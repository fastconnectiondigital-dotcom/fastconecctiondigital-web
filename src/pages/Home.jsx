import { useState, useRef } from 'react'

/* ─── DATA ─────────────────────────────────────────────────── */
const webServices = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Landing Business Page',
    desc: 'Páginas profesionales de alta conversión para presentar tu negocio con impacto y captar leads de forma efectiva.',
    tag: 'Diseño Web',
    price: 'Desde $4,999',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
    title: 'Landing Premium Page',
    desc: 'Sitios web premium con animaciones, diseño exclusivo y experiencia de usuario que deja una huella imborrable.',
    tag: 'Diseño Web',
    price: 'Desde $9,999',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: 'Tienda Online',
    desc: 'E-commerce completo con carrito de compras, pasarela de pagos, catálogo y panel de administración.',
    tag: 'E-Commerce',
    price: 'Desde $14,999',
  },
]

const marketingServices = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Optimización de Redes Sociales',
    desc: 'Perfil optimizado, estrategia de contenido y crecimiento orgánico en Instagram, Facebook, TikTok y más.',
    tag: 'Social Media',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO & Posicionamiento',
    desc: 'Aparece en los primeros resultados de Google con estrategias de SEO técnico y de contenido.',
    tag: 'SEO',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Administración de Contenido',
    desc: 'Creamos, publicamos y gestionamos tu contenido digital para mantener tu audiencia conectada y activa.',
    tag: 'Contenido',
  },
]

const stats = [
  { value: '50+', label: 'Proyectos entregados' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '3x', label: 'Aumento en tráfico promedio' },
  { value: '24h', label: 'Soporte técnico' },
]

/* ─── HERO ──────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* AI-style hero background — abstract tech cityscape generated via CSS */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #020714 0%, #061020 40%, #030D1C 70%, #020714 100%)'
        }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `
            linear-gradient(rgba(64,224,200,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64,224,200,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(500px) rotateX(30deg)',
          transformOrigin: 'bottom',
          backgroundPosition: 'center bottom',
        }} />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #40E0C8 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #1A7FD4 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #20C5E0 0%, transparent 70%)', filter: 'blur(40px)' }} />

        {/* Abstract circuit lines SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#40E0C8" stopOpacity="0"/>
              <stop offset="50%" stopColor="#40E0C8" stopOpacity="1"/>
              <stop offset="100%" stopColor="#1A7FD4" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* Horizontal lines */}
          {[200, 400, 600, 750].map((y, i) => (
            <line key={i} x1="0" y1={y} x2="1440" y2={y} stroke="url(#lineGrad)" strokeWidth="0.5" />
          ))}
          {/* Vertical lines */}
          {[200, 400, 720, 1000, 1250].map((x, i) => (
            <line key={i} x1={x} y1="0" x2={x} y2="900" stroke="url(#lineGrad)" strokeWidth="0.5" />
          ))}
          {/* Nodes */}
          {[[200,200],[400,400],[720,600],[1000,200],[1250,750]].map(([x,y], i) => (
            <circle key={i} cx={x} cy={y} r="4" fill="#40E0C8" opacity="0.6" />
          ))}
          {/* Diagonal paths */}
          <path d="M 0 900 Q 360 500 720 300 T 1440 100" stroke="#20C5E0" strokeWidth="0.8" fill="none" opacity="0.5"/>
          <path d="M 0 200 Q 400 400 800 600 T 1440 800" stroke="#1A7FD4" strokeWidth="0.8" fill="none" opacity="0.4"/>
        </svg>

        {/* 50% overlay */}
        <div className="hero-overlay absolute inset-0 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(64,224,200,0.3)] bg-[rgba(64,224,200,0.05)] text-[#40E0C8] text-sm font-medium mb-8 fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#40E0C8] animate-pulse" />
            Diseño Web & Marketing Digital
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 fade-in-up"
            style={{ fontFamily: 'Syne, sans-serif', animationDelay: '0.1s' }}
          >
            Tu negocio,{' '}
            <span className="gradient-text">conectado</span>{' '}
            al mundo digital
          </h1>

          <p
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Diseñamos sitios web que convierten visitas en clientes y estrategias de marketing que hacen crecer tu marca en el mundo digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              className="shimmer-btn text-[#0A0F1E] font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#40E0C8]/30"
            >
              Cotiza tu proyecto →
            </button>
            <button
              onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full text-base font-medium border border-[rgba(64,224,200,0.3)] text-[#40E0C8] hover:bg-[rgba(64,224,200,0.08)] transition-all duration-300"
            >
              Ver servicios
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 fade-in-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="gradient-text text-3xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {s.value}
                </span>
                <span className="text-slate-400 text-xs mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500 text-xs">
        <span>Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#40E0C8] to-transparent rounded animate-pulse" />
      </div>
    </section>
  )
}

/* ─── NOSOTROS ───────────────────────────────────────────────── */
function NosotrosSection() {
  return (
    <section id="nosotros" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden glow-border">
              {/* Abstract visual for "us" */}
              <div className="aspect-square" style={{
                background: 'linear-gradient(135deg, #0D1526 0%, #061628 50%, #081420 100%)'
              }}>
                <svg viewBox="0 0 500 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#40E0C8" />
                      <stop offset="100%" stopColor="#1A7FD4" />
                    </linearGradient>
                    <filter id="blur1">
                      <feGaussianBlur stdDeviation="8" />
                    </filter>
                  </defs>
                  {/* Glow circles */}
                  <circle cx="250" cy="250" r="150" fill="#40E0C8" opacity="0.04" filter="url(#blur1)" />
                  <circle cx="250" cy="250" r="100" fill="#20C5E0" opacity="0.06" filter="url(#blur1)" />
                  {/* Outer ring */}
                  <circle cx="250" cy="250" r="180" fill="none" stroke="url(#g1)" strokeWidth="1" strokeDasharray="10 15" opacity="0.4" />
                  <circle cx="250" cy="250" r="130" fill="none" stroke="url(#g1)" strokeWidth="0.5" opacity="0.3" />
                  {/* Center icon */}
                  <text x="250" y="220" textAnchor="middle" fontSize="80" fill="url(#g1)" opacity="0.9">⚡</text>
                  <text x="250" y="300" textAnchor="middle" fontSize="22" fill="#40E0C8" fontFamily="Syne, sans-serif" fontWeight="700" opacity="0.9">Fast Connection</text>
                  <text x="250" y="325" textAnchor="middle" fontSize="13" fill="#20C5E0" fontFamily="DM Sans, sans-serif" opacity="0.7" letterSpacing="4">DIGITAL</text>
                  {/* Orbiting dots */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180
                    const x = 250 + 180 * Math.cos(rad)
                    const y = 250 + 180 * Math.sin(rad)
                    return <circle key={i} cx={x} cy={y} r="5" fill="#40E0C8" opacity="0.7" />
                  })}
                </svg>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#0D1526] border border-[rgba(64,224,200,0.25)] rounded-2xl px-5 py-4 shadow-xl">
              <div className="text-2xl font-extrabold gradient-text" style={{ fontFamily: 'Syne, sans-serif' }}>5+</div>
              <div className="text-xs text-slate-400">Años de experiencia</div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <span className="text-[#40E0C8] text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ fontFamily: 'Syne, sans-serif' }}>
              Quiénes somos
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Conectamos tu marca con{' '}
              <span className="gradient-text">el futuro digital</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              En <strong className="text-white">Fast Connection Digital</strong> somos un equipo apasionado por el diseño y la tecnología. Creamos soluciones digitales que no solo se ven increíbles, sino que generan resultados reales para tu negocio.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Desde landing pages de alto impacto hasta tiendas online completas y estrategias de marketing digital, somos tu aliado tecnológico en cada etapa del camino.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🎯', title: 'Orientados a resultados', desc: 'Cada proyecto se mide por los resultados que genera.' },
                { icon: '⚡', title: 'Rápidos y eficientes', desc: 'Entregamos proyectos en tiempo récord sin sacrificar calidad.' },
                { icon: '🔒', title: 'Confiables', desc: 'Soporte continuo y transparencia total en cada proceso.' },
                { icon: '✨', title: 'Diseño único', desc: 'Cada sitio es creado a medida, nunca plantillas genéricas.' },
              ].map((v) => (
                <div key={v.title} className="flex gap-3 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(64,224,200,0.1)] hover:border-[rgba(64,224,200,0.25)] transition-colors">
                  <span className="text-xl">{v.icon}</span>
                  <div>
                    <div className="text-white text-sm font-semibold mb-1">{v.title}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SERVICIOS ──────────────────────────────────────────────── */
function ServiciosSection() {
  return (
    <section id="servicios" className="py-24 bg-[#060B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#40E0C8] text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ fontFamily: 'Syne, sans-serif' }}>
            Lo que hacemos
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Soluciones digitales completas para hacer crecer tu negocio en el mundo online.
          </p>
        </div>

        {/* Web Design */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-0.5 w-8 bg-gradient-to-r from-[#40E0C8] to-transparent" />
            <h3 className="text-[#40E0C8] text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
              Diseño Web
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {webServices.map((s) => (
              <div
                key={s.title}
                className="service-card glow-border rounded-2xl p-7 bg-[#0D1526] flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#40E0C8]"
                  style={{ background: 'rgba(64,224,200,0.08)' }}>
                  {s.icon}
                </div>
                <div>
                  <span className="text-[10px] text-[#20C5E0] tracking-widest uppercase font-semibold">{s.tag}</span>
                  <h4 className="text-white font-bold text-lg mt-1 mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{s.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
                {s.price && (
                  <div className="mt-auto pt-4 border-t border-[rgba(64,224,200,0.1)] flex items-center justify-between">
                    <span className="gradient-text font-bold">{s.price}</span>
                    <button
                      onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                      className="text-xs text-[#40E0C8] border border-[rgba(64,224,200,0.3)] px-3 py-1.5 rounded-full hover:bg-[rgba(64,224,200,0.1)] transition-colors"
                    >
                      Cotizar →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Marketing */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-0.5 w-8 bg-gradient-to-r from-[#40E0C8] to-transparent" />
            <h3 className="text-[#40E0C8] text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
              Marketing Digital
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {marketingServices.map((s) => (
              <div
                key={s.title}
                className="service-card glow-border rounded-2xl p-7 bg-[#0D1526] flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#40E0C8]"
                  style={{ background: 'rgba(64,224,200,0.08)' }}>
                  {s.icon}
                </div>
                <div>
                  <span className="text-[10px] text-[#20C5E0] tracking-widest uppercase font-semibold">{s.tag}</span>
                  <h4 className="text-white font-bold text-lg mt-1 mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{s.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs text-[#40E0C8] border border-[rgba(64,224,200,0.3)] px-3 py-1.5 rounded-full hover:bg-[rgba(64,224,200,0.1)] transition-colors"
                  >
                    Más información →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACTO ───────────────────────────────────────────────── */
function ContactoSection() {
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '', mensaje: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Build mailto link
    const subject = encodeURIComponent(`Cotización - ${form.nombre}`)
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nCorreo: ${form.correo}\nTeléfono: ${form.telefono}\n\nMensaje:\n${form.mensaje}`
    )
    window.open(`mailto:fastconnectiondigital@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ nombre: '', correo: '', telefono: '', mensaje: '' })
      setTimeout(() => setSent(false), 4000)
    }, 800)
  }

  return (
    <section id="contacto" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#40E0C8] text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ fontFamily: 'Syne, sans-serif' }}>
            Hablemos
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            ¿Listo para <span className="gradient-text">empezar</span>?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Cuéntanos sobre tu proyecto y te enviamos una propuesta sin costo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-white font-bold text-2xl mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                Información de contacto
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Estamos listos para escucharte. Contáctanos por el medio que prefieras y te responderemos a la brevedad.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  label: 'Email',
                  value: 'fastconnectiondigital@gmail.com',
                  href: 'mailto:fastconnectiondigital@gmail.com',
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                  label: 'Teléfono',
                  value: '81 8868 8391',
                  href: 'tel:8188688391',
                },
                {
                  icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
                  label: 'WhatsApp',
                  value: '81 8868 8391',
                  href: 'https://wa.me/528188688391',
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#0D1526] border border-[rgba(64,224,200,0.1)] hover:border-[rgba(64,224,200,0.35)] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[#40E0C8] flex-shrink-0"
                    style={{ background: 'rgba(64,224,200,0.08)' }}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">{c.label}</div>
                    <div className="text-white text-sm group-hover:text-[#40E0C8] transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glow-border rounded-3xl p-8 bg-[#0D1526]">
            <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Envíanos un mensaje
            </h3>

            {sent && (
              <div className="mb-6 p-4 rounded-xl bg-[rgba(64,224,200,0.1)] border border-[rgba(64,224,200,0.3)] text-[#40E0C8] text-sm text-center">
                ✅ ¡Mensaje enviado! Te responderemos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="text-slate-400 text-xs uppercase tracking-widest mb-2 block">Nombre completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(64,224,200,0.15)] rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 outline-none focus:border-[#40E0C8] focus:shadow-[0_0_0_3px_rgba(64,224,200,0.1)] transition-all"
                />
              </div>

              <div>
                <label className="text-slate-400 text-xs uppercase tracking-widest mb-2 block">Correo electrónico *</label>
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(64,224,200,0.15)] rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 outline-none focus:border-[#40E0C8] focus:shadow-[0_0_0_3px_rgba(64,224,200,0.1)] transition-all"
                />
              </div>

              <div>
                <label className="text-slate-400 text-xs uppercase tracking-widest mb-2 block">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="81 0000 0000"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(64,224,200,0.15)] rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 outline-none focus:border-[#40E0C8] focus:shadow-[0_0_0_3px_rgba(64,224,200,0.1)] transition-all"
                />
              </div>

              <div>
                <label className="text-slate-400 text-xs uppercase tracking-widest mb-2 block">¿En qué podemos ayudarte? *</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto, tipo de servicio que necesitas, presupuesto aproximado..."
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(64,224,200,0.15)] rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-600 outline-none focus:border-[#40E0C8] focus:shadow-[0_0_0_3px_rgba(64,224,200,0.1)] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`shimmer-btn text-[#0A0F1E] font-bold py-4 rounded-full text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#40E0C8]/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {sending ? 'Enviando...' : 'Enviar mensaje →'}
              </button>

              <p className="text-center text-slate-500 text-xs">
                Al enviar aceptas que te contactemos para cotizarte.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── HOME ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <NosotrosSection />
      <ServiciosSection />
      <ContactoSection />
    </>
  )
}
