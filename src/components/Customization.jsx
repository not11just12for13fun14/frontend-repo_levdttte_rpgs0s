import React from 'react'
import { Palette, Needle, Layers, Infinity } from 'lucide-react'

export default function Customization() {
  const items = [
    { title: 'Embroidery', desc: 'Raised, durable branding with precision stitchwork for a premium finish.', icon: Needle },
    { title: 'Sublimation', desc: 'Seamless all-over prints with rich color depth and zero peel or fade.', icon: Layers },
    { title: 'Premium Fabrics', desc: 'Moisture-wicking, four-way stretch, and breathable blends for performance.', icon: Palette },
    { title: 'Unlimited Colors', desc: 'Your brand, your palette — without compromise.', icon: Infinity },
  ]

  return (
    <section id="custom" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-700 font-semibold uppercase tracking-widest text-xs">Customization</p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight">Built for your brand</h3>
            <p className="mt-4 text-gray-600 max-w-prose">From corporate uniforms to championship kits, our in-house studio produces consistent, high-precision results at scale. Specify materials, cuts, and artwork — we handle the rest.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {items.map(({ title, desc, icon: Icon }, i) => (
                <div key={i} className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition bg-white">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3 ring-1 ring-blue-100">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-semibold">{title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-xl">
              <img src="https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=60" alt="Customization" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-red-500/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
