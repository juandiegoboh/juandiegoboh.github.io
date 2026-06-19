import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const services = [
  { icon: "🦷", title: "Limpieza y profilaxis", desc: "Remoción de sarro y placa para mantener tus encías sanas." },
  { icon: "✨", title: "Blanqueamiento dental", desc: "Técnica profesional segura para una sonrisa más luminosa." },
  { icon: "📐", title: "Ortodoncia", desc: "Brackets tradicionales e invisibles para alinear tu dentadura." },
  { icon: "🛡️", title: "Odontología preventiva", desc: "Revisiones periódicas para detectar problemas a tiempo." },
];

const blogPosts = [
  { slug: "visitas-dentista", tag: "Prevención", icon: "🦷", title: "¿Cada cuánto debo visitar al dentista?", excerpt: "La respuesta depende de tu historial dental y tus hábitos de higiene." },
  { slug: "blanqueamiento", tag: "Estética", icon: "✨", title: "Blanqueamiento en casa vs. profesional", excerpt: "Conoce las diferencias y cuál es más adecuado para ti." },
  { slug: "alimentos-dientes", tag: "Hábitos", icon: "🍎", title: "Alimentos que protegen y dañan tus dientes", excerpt: "Una guía práctica para comer bien sin afectar tu sonrisa." },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="od-hero">
        <div className="od-hero-eyebrow">Consultorio Odontológico en Bucaramanga</div>
        <h1>Tu sonrisa merece atención que te cuide de verdad</h1>
        <p>Tratamientos odontológicos completos en un ambiente tranquilo, con tecnología moderna y un equipo que te escucha.</p>
        <div className="od-hero-buttons">
          <a href="/#contacto" className="od-btn">Agendar mi primera cita</a>
          <a href="/#servicios" className="od-btn-outline">Ver servicios</a>
        </div>
      </section>

      <div style={{ background: "#F9F7F4", paddingTop: "40px" }}>

        {/* Servicios */}
        <section id="servicios" className="od-section" style={{ paddingTop: 0 }}>
          <div className="od-section-label">Lo que ofrecemos</div>
          <h2>Servicios para toda la familia</h2>
          <div className="od-services-grid">
            {services.map((s) => (
              <div key={s.title} className="od-service-card">
                <div className="od-service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="od-divider" />

        {/* Sobre nosotros */}
        <section id="nosotros" className="od-section">
          <div className="od-section-label">Quiénes somos</div>
          <div className="od-about">
            <div className="od-about-img">🩺</div>
            <div className="od-about-text">
              <h2>Más de 15 años cuidando sonrisas en Santander</h2>
              <p>Somos un equipo de profesionales comprometidos con tu salud bucal. Nuestro enfoque combina tecnología de última generación con un trato cercano y sin afanes.</p>
              <div>
                <div className="od-about-stat">
                  <strong>+2.400</strong>
                  <span>Pacientes atendidos</span>
                </div>
                <div className="od-about-stat">
                  <strong>15 años</strong>
                  <span>De experiencia</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="od-divider" />

        {/* Blog preview */}
        <section className="od-section">
          <div className="od-section-label">Blog</div>
          <h2>Artículos para cuidar tu salud bucal</h2>
          <div className="od-blog-grid">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="od-blog-card">
                <div className="od-blog-thumb">{post.icon}</div>
                <div className="od-blog-body">
                  <div className="od-blog-tag">{post.tag}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* Contacto */}
      <ContactSection />
    </main>
  );
}

function ContactSection() {
  return (
    <section id="contacto" className="od-contact-section">
      <div className="od-contact-inner">
        <div className="od-contact-info">
          <div className="od-contact-label">Contacto</div>
          <h2>¿Tienes dudas o quieres tu primera cita?</h2>
          <p>Escríbenos o llámanos. Respondemos en menos de 24 horas y agendamos a la hora que mejor te quede.</p>
          <div className="od-contact-item">📍 Calle 45 # 28-10, Bucaramanga</div>
          <div className="od-contact-item">📞 +57 300 000 0000</div>
          <div className="od-contact-item">✉️ hola@dentacare.com.co</div>
          <div className="od-contact-item">🕐 Lun – Vie: 8am – 6pm</div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
