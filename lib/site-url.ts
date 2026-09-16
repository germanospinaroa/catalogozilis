export function getSiteUrl() {
  const vercelUrl = process.env.VERCEL_URL;
  if (process.env.VERCEL_ENV === "preview" && vercelUrl) {
    return new URL(`https://${vercelUrl}`);
  }
  return new URL(process.env.NEXT_PUBLIC_SITE_URL || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"));
}
