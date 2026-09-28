'use client'

import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

const serviceLinks = [
  ['Web Development', '/services/web-development'],
  ['SEO & Google Profile', '/services/seo-google-profile'],
  ['Digital Marketing', '/services/digital-marketing'],
  ['OTT Advertising', '/services/ott-advertising'],
  ['Metro & Airport Ads', '/services/metro-airport-ads'],
  ['Society & Lift Ads', '/services/society-lift-ads'],
  ['Listings & Social Media', '/services/listings-social-media'],
] as const

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
      <Link href="/" className="flex items-center" aria-label="Info Edge home"><img src="/info-edge-logo.png" alt="Info Edge Tech Services" className="h-14 w-40 object-contain object-left" /></Link>
      <nav className="hidden items-center gap-8 text-sm font-semibold text-[#536278] md:flex">
        <div className="group relative"><button className="flex items-center gap-1 py-4 transition hover:text-[#087ff5]" aria-haspopup="true">Services <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" /></button><div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2 rounded-2xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">{serviceLinks.map(([label, href]) => <Link key={href} href={href} className="block rounded-xl px-4 py-3 text-sm hover:bg-blue-50 hover:text-[#087ff5]">{label}</Link>)}</div></div>
        <Link href="/#why-us" className="transition hover:text-[#087ff5]">Why us</Link><Link href="/contact" className="transition hover:text-[#087ff5]">Contact</Link>
      </nav>
      <Link href="/contact#query" className="hidden rounded-full bg-[#087ff5] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-[#0669d2] md:block">Get a quote</Link>
      <button className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
    </div>
    {menuOpen && <nav className="max-h-[75vh] overflow-auto border-t border-slate-200 bg-white px-5 py-5 text-sm font-semibold md:hidden"><Link href="/" className="block py-3" onClick={() => setMenuOpen(false)}>Home</Link>{serviceLinks.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="block py-3 text-[#536278]">{label}</Link>)}<Link href="/contact" onClick={() => setMenuOpen(false)} className="block py-3">Contact</Link></nav>}
  </header>
}

export { serviceLinks }
