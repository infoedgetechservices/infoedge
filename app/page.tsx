import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import SiteHeader from '@/components/site-header'

const services = [
  ['Web Development', '/services/web-development', 'Fast, modern websites built to convert visitors into customers.'],
  ['SEO & Google Profile', '/services/seo-google-profile', 'Rank higher on search and get found on Google Maps.'],
  ['Digital Marketing', '/services/digital-marketing', 'Performance campaigns across search and social.'],
  ['OTT Advertising', '/services/ott-advertising', 'Put your brand in front of streaming audiences.'],
  ['Metro & Airport Ads', '/services/metro-airport-ads', 'High-footfall placements across Delhi NCR transit.'],
  ['Society & Lift Ads', '/services/society-lift-ads', 'Hyperlocal visibility where your customers live.'],
] as const

const reasons = ['One partner for online and offline advertising', 'Local expertise across Greater Noida and Delhi NCR', 'Transparent planning and reporting']

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#102238]">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-36 lg:px-8 lg:pt-44">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087ff5]">Info Edge Tech Services</p>
        <h1 className="mt-4 max-w-3xl text-balance text-5xl font-black leading-[1.04] tracking-[-0.055em] sm:text-6xl">Digital growth and advertising that gets you seen.</h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[#617087]">Web development, SEO, digital marketing, OTT, airport, metro and local advertising services in Greater Noida and Delhi NCR.</p>
        <Link href="/contact#query" className="mt-9 inline-flex items-center rounded-full bg-[#087ff5] px-7 py-4 font-bold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-[#0669d2]">
          Discuss your goals <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087ff5]">Services</p>
          <h2 className="mt-4 text-3xl font-black">Everything you need to grow.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([name, href, text]) => (
              <Link key={href} href={href} className="rounded-3xl border border-slate-100 bg-[#f9fbfe] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#617087]">{text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#087ff5]">Learn more <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="why-us" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087ff5]">Why us</p>
          <h2 className="mt-4 text-3xl font-black">Built around your results.</h2>
          <ul className="mt-8 flex flex-col gap-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-center gap-3 text-lg leading-relaxed">
                <Check className="h-5 w-5 text-[#087ff5]" /> {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
