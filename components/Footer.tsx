import Image from "next/image";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-wrap"><div className="footer-brand"><Image className="footer-logo" src="/brand/zilis-logo-main.png" alt="Logo de Zilis" width={150} height={52} /><small>Catálogo de productos Zilis.</small></div><div className="footer-copy"><p>Catálogo informativo de bienestar.</p><small>Este sitio tiene fines informativos y educativos. Consulta la etiqueta vigente y a un profesional de salud si tienes dudas.</small></div><small className="footer-independent">Catálogo informativo independiente de productos Zilis.</small></div></footer>;
}
