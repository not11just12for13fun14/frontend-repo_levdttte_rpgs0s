import React from 'react'

export default function Story() {
  return (
    <section id="story" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold tracking-tight">Our story</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">WARUS was founded with a simple belief: performance and presence should never be mutually exclusive. We blend technical fabrics with tailored silhouettes to deliver apparel that commands attention in boardrooms and dominates on game day. Our manufacturing partners meet rigorous standards for consistency, feel, and lifespan.</p>
            <p className="mt-4 text-gray-700 leading-relaxed">Each piece is cut, stitched, and finished with obsessive detail — from reinforced seams to calibrated fits for men and women. Whether equipping a national team or elevating your corporate identity, our process ensures every garment represents your standard.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Years of expertise', value: '12+' },
              { label: 'Team partners', value: '250+' },
              { label: 'Corporate clients', value: '500+' },
              { label: 'Countries served', value: '18' },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
                <div className="text-3xl font-black text-slate-900">{s.value}</div>
                <div className="mt-1 text-gray-500 text-sm uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
