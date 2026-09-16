import Link from "next/link";
import Image from "next/image";

export function Header() {
  return <header className="site-header"><div className="container nav"><Link className="brand" href="/" aria-label="Productos Zilis, inicio"><Image src="/brand/zilis-logo-main.png" alt="Logo de Zilis" width={74} height={34} priority /></Link><nav className="nav-links" aria-label="Navegación principal"><Link href="/#productos">Productos</Link><Link href="/#categorias">Categorías</Link><Link href="/#buscar">Buscar</Link></nav></div></header>;
}
