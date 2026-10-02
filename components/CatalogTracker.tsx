"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const EVENTS_URL = "https://elite-focus-platform.vercel.app/api/catalog/events";
const ATTRIBUTION_KEY = "zilis_catalog_attribution";
const SESSION_KEY = "zilis_catalog_session";
const ATTRIBUTION_TTL_MS = 60 * 24 * 60 * 60 * 1000;
const SESSION_TTL_MS = 30 * 60 * 1000;
const TOKEN_PATTERN = /^[A-Za-z0-9_-]{16,80}$/;
const PRODUCT_SLUGS = new Set(["ice", "amalaki", "b-fit", "edge", "rise", "ultra-vibe"]);

type Attribution = { token: string; expiresAt: number };
type StoredSession = { token: string; sessionId: string; lastActivityAt: number };
type EventType = "SESSION_STARTED" | "CATALOG_VIEWED" | "PRODUCT_VIEWED";

const sentInThisRuntime = new Set<string>();
let memoryAttribution: Attribution | null = null;
let memorySession: StoredSession | null = null;

function readStorage<T>(key: string): T | null {
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: unknown): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Tracking must never affect the catalog.
  }
}

function removeStorage(key: string): void {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // Tracking must never affect the catalog.
  }
}

function getAttribution(): Attribution | null {
  const stored = readStorage<Attribution>(ATTRIBUTION_KEY) ?? memoryAttribution;
  if (!stored || !TOKEN_PATTERN.test(stored.token) || stored.expiresAt <= Date.now()) {
    removeStorage(ATTRIBUTION_KEY);
    memoryAttribution = null;
    return null;
  }
  memoryAttribution = stored;
  return stored;
}

function resolveAttribution(): Attribution | null {
  const ref = new URLSearchParams(window.location.search).get("ref");
  if (ref && TOKEN_PATTERN.test(ref)) {
    const previous = getAttribution();
    const attribution = { token: ref, expiresAt: Date.now() + ATTRIBUTION_TTL_MS };
    memoryAttribution = attribution;
    writeStorage(ATTRIBUTION_KEY, attribution);
    if (previous?.token !== ref) {
      memorySession = null;
      removeStorage(SESSION_KEY);
    }
  }
  return getAttribution();
}

function getSession(attribution: Attribution): { session: StoredSession; isNew: boolean } {
  const stored = readStorage<StoredSession>(SESSION_KEY) ?? memorySession;
  const isValid =
    stored &&
    stored.token === attribution.token &&
    Date.now() - stored.lastActivityAt <= SESSION_TTL_MS;

  if (isValid) {
    memorySession = stored;
    return { session: stored, isNew: false };
  }

  const session = {
    token: attribution.token,
    sessionId: crypto.randomUUID(),
    lastActivityAt: Date.now(),
  };
  memorySession = session;
  writeStorage(SESSION_KEY, session);
  return { session, isNew: true };
}

function sendEvent(
  token: string,
  sessionId: string,
  eventType: EventType,
  pathname: string,
  productSlug: string | null = null,
): void {
  const dedupeKey = `${token}:${sessionId}:${pathname}:${eventType}`;
  if (sentInThisRuntime.has(dedupeKey)) return;
  sentInThisRuntime.add(dedupeKey);

  void fetch(EVENTS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
      eventType,
      sessionId,
      productSlug,
      referrer: document.referrer || null,
    }),
    keepalive: true,
  }).catch(() => {
    // Tracking is best effort and must remain invisible to visitors.
  });
}

export function CatalogTracker(): null {
  const pathname = usePathname();

  useEffect(() => {
    try {
      const productMatch = pathname.match(/^\/productos\/([^/]+)\/?$/);
      const productSlug = productMatch ? decodeURIComponent(productMatch[1]) : null;
      const isTrackable = pathname === "/" || (productSlug !== null && PRODUCT_SLUGS.has(productSlug));
      if (!isTrackable) return;

      const attribution = resolveAttribution();
      if (!attribution) return;

      const { session, isNew } = getSession(attribution);
      if (isNew) {
        sendEvent(attribution.token, session.sessionId, "SESSION_STARTED", pathname);
      }

      session.lastActivityAt = Date.now();
      memorySession = session;
      writeStorage(SESSION_KEY, session);

      if (pathname === "/") {
        sendEvent(attribution.token, session.sessionId, "CATALOG_VIEWED", pathname);
      } else if (productSlug) {
        sendEvent(attribution.token, session.sessionId, "PRODUCT_VIEWED", pathname, productSlug);
      }
    } catch {
      // Tracking must never break rendering or navigation.
    }
  }, [pathname]);

  return null;
}
