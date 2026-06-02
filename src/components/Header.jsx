import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['inicio', 'nosotros', 'servicios', 'contacto']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0F1E]/95 backdrop-blur-md shadow-lg shadow-[#40E0C8]/5 border-b border-[rgba(64,224,200,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Brand Name */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNav('#inicio') }}
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="Fast Connection Digital Logo"
              className="h-12 w-12 object-contain drop-shadow-[0_0_8px_rgba(64,224,200,0.4)] group-hover:drop-shadow-[0_0_14px_rgba(64,224,200,0.7)] transition-all duration-300"
            />
            <div className="flex flex-col leading-tight">
              <span
                className="font-display font-800 text-lg tracking-wide gradient-text"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
              >
                Fast Connection
              </span>
              <span
                className="text-xs font-medium tracking-[0.25em] text-[#20C5E0]/70 uppercase"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Digital
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={`nav-link text-sm font-medium tracking-wide transition-colors duration-200 pb-0.5 ${
                  active === item.href.replace('#', '')
                    ? 'text-[#40E0C8]'
                    : 'text-slate-300 hover:text-[#40E0C8]'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contacto')}
              className="shimmer-btn text-[#0A0F1E] font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#40E0C8]/30"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Cotizar
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#40E0C8] p-2"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1526]/98 backdrop-blur-md border-t border-[rgba(64,224,200,0.1)] px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left text-slate-300 hover:text-[#40E0C8] font-medium tracking-wide py-2 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contacto')}
            className="shimmer-btn text-[#0A0F1E] font-semibold px-5 py-2.5 rounded-full mt-2 w-full"
          >
            Cotizar
          </button>
        </div>
      )}
    </header>
  )
}
