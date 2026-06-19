import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Consultorio Odontológico en Bucaramanga",
  description: "Tratamientos odontológicos completos en un ambiente tranquilo, con tecnología moderna y un equipo que te escucha.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav className="od-nav">
          <a href="/" className="od-nav-logo">Consultorio</a>
          <div className="od-nav-links">
            <a href="/#servicios">Servicios</a>
            <a href="/#nosotros">Nosotros</a>
            <a href="/blog">Blog</a>
            <a href="/#contacto">Contacto</a>
          </div>
          <a href="/#contacto" className="od-btn" style={{ fontSize: '13px', padding: '8px 16px' }}>
            Agendar cita
          </a>
        </nav>
        {children}
        <footer className="od-footer">
          © 2026 Consultorio · Bucaramanga, Santander · Todos los derechos reservados
        </footer>
      </body>
    </html>
  );
}