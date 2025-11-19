import React from 'react'

const products = [
  { name: 'Elite Polo', img: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9715', tag: 'Corporate' },
  { name: 'Pro Hoodie', img: 'https://images.unsplash.com/photo-1544025162-d76694265947', tag: 'Athletic' },
  { name: 'Performance Sweater', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04', tag: 'Corporate' },
  { name: 'Matchday Jersey', img: 'https://images.unsplash.com/photo-1521417531039-9557a4b9b4ce', tag: 'Team' },
  { name: 'Track Pants', img: 'https://images.unsplash.com/photo-1520975432133-adeb1ff31d04', tag: 'Training' },
  { name: 'Tennis Dress', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211', tag: 'Sportswear' },
  { name: 'Yoga Tights', img: 'https://images.unsplash.com/photo-1519741497674-611481863552', tag: 'Active' },
  { name: 'Biker Shorts', img: 'https://images.unsplash.com/photo-1571907480495-5c0ff6f251b4', tag: 'Active' },
  { name: 'All-Weather Jacket', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246', tag: 'Outerwear' },
  { name: 'Golf Wear', img: 'https://images.unsplash.com/photo-1518600506278-4e8ef466b810', tag: 'Corporate Sport' },
]

function ProductCard({ name, img, tag }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="aspect-[4/5] bg-gray-100">
        <img src={`${img}?auto=format&fit=crop&w=900&q=60`} alt={name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500">{tag}</p>
          <h4 className="font-semibold text-gray-900">{name}</h4>
        </div>
        <button className="text-xs font-semibold px-3 py-1 rounded-lg bg-blue-600 text-white shadow ring-1 ring-blue-500/30 hover:bg-blue-500 transition">View</button>
      </div>
    </div>
  )
}

export default function ProductGrid() {
  return (
    <section id="products" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Signature Collection</h2>
          <a href="#" className="text-blue-700 hover:text-blue-600 font-medium">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
