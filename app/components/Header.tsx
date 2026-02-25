"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Nuestro Equipo", href: "/nuestro-equipo" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/90 backdrop-blur text-white">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Link 
          href="/" 
          className="flex items-center text-lg font-semibold text-gray-900 dark:text-white cursor-pointer select-none"
          onContextMenu={(e) => e.preventDefault()}
        >
          <Image 
            src="/logohead.png" 
            alt="Moi Studio" 
            width={180} 
            height={50} 
            className="h-12 w-auto object-contain pointer-events-none select-none" 
            priority 
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative transition-colors hover:text-white ${
                  isActive ? "text-[#f20c0c] font-semibold" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f20c0c]" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 relative">
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className="hidden sm:inline-flex items-center rounded-full border border-white/20 px-3 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            aria-expanded={searchOpen}
            aria-controls="search-bar"
          >
            Buscar
          </button>
          <a 
            href="https://wa.me/+593982048240?text=Quiero%20m%C3%A1s%20info..." 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            Consultar
          </a>
          
          {/* Botón Hamburguesa para móviles */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Menú"
          >
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {searchOpen && (
            <div
              id="search-bar"
              className="absolute right-0 top-14 w-[260px] sm:w-[300px] rounded-2xl border border-white/15 bg-black p-3 shadow-lg"
            >
              <label className="sr-only" htmlFor="search-input">Buscar</label>
              <input
                id="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar..."
                autoFocus
                className="w-full rounded-xl border border-white/20 bg-black px-3 py-2 text-sm text-white outline-none ring-2 ring-transparent transition focus:border-white/40 focus:ring-white/15"
              />
            </div>
          )}
        </div>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95">
          <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-200 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 mt-2">
              Consultar
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
