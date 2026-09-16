import Link from "next/link";
export default function NotFound() { return <main id="contenido" className="container" style={{padding:"120px 0"}}><p className="eyebrow">404</p><h1>Producto no encontrado.</h1><Link className="back-link" href="/">Volver al catálogo</Link></main>; }
