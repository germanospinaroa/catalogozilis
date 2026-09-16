import Image from "next/image";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Image className="footer-logo" src="/brand/zilis-logo-main.png" alt="Logo de Zilis" width={60} height={28} /><div>Catálogo informativo independiente de productos Zilis.</div></div><p className="footer-note">Este sitio tiene fines informativos y educativos. No sustituye la etiqueta del producto ni la orientación de un profesional de salud. No se realizan diagnósticos, tratamientos ni promesas de resultados.</p></div></footer>;
}
