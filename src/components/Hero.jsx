import React from 'react'
import { ArrowRight, Menu } from 'lucide-react'

function Navbar() {
  return (
    <div className="absolute top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg ring-1 ring-white/10">
            <span className="text-white font-black tracking-wider">W</span>
          </div>
          <span className="text-white/90 text-xl font-semibold tracking-wide">WARUS</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#categories" className="text-white/80 hover:text-white transition">Categories</a>
          <a href="#products" className="text-white/80 hover:text-white transition">Products</a>
          <a href="#custom" className="text-white/80 hover:text-white transition">Customization</a>
          <a href="#story" className="text-white/80 hover:text-white transition">Our Story</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </div>
        <button className="md:hidden text-white/80 hover:text-white" aria-label="Menu">
          <Menu size={24} />
        </button>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-black">
      <Navbar />

      {/* Background media collage */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 z-10" />
        <div className="absolute -inset-x-10 -top-10 h-[120%] opacity-70">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 h-full">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="relative h-full">
                <img
                  src={`https://images.unsplash.com/photo-${
                    i===1? '1520972135685-5f62d7b63e23' :
                    i===2? '1602810318383-8a4d2a1df3a2' :
                    i===3? '1520974693050-46fd8e20b1f3' :
                    i===4? '1542291026-7eec264c27ff' :
                    i===5? '1540574163026-643ea20ade25' :
                             '1516826957135-700dedea698c'}`}
                  alt="WARUS apparel"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <div className="max-w-3xl">
          <p className="text-blue-300 uppercase tracking-[0.25em] text-xs md:text-sm mb-4">Performance • Precision • Presence</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Tailored For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-white">Greatness</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl">
            Premium corporate clothing and athletic wear engineered for teams, brands, and high performers. From boardroom to training ground — move with confidence.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#products" className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-xl shadow-blue-900/30 ring-1 ring-white/10 transition">
              Explore Collection
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </a>
            <a href="#custom" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 transition">
              Customise Your Kit
            </a>
          </div>
        </div>
      </div>

      {/* Accents */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black" />
    </section>
  )
}
