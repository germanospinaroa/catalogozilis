import Link from "next/link";
import Image from "next/image";

export function Header() {
  return <header className="site-header"><div className="container nav"><Link className="brand" href="/" aria-label="Inicio del catálogo Zilis"><Image src="/brand/zilis-logo-main.png" alt="Logo de Zilis" width={150} height={52} priority /></Link><nav className="main-nav" aria-label="Navegación principal"><Link href="/#productos">Productos</Link><Link href="/#categorias">Categorías</Link><Link href="/#buscar">Buscar</Link></nav><div className="nav-actions"><Link href="/#productos" className="btn-primary">Ver productos <span aria-hidden="true">→</span></Link></div></div></header>;
}
