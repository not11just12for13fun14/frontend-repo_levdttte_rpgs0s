import React from 'react'
import { Briefcase, Dumbbell, Shirt, Factory, Users, Package } from 'lucide-react'

const categories = [
  { name: 'Corporate Wear', icon: Briefcase, color: 'from-slate-800 to-slate-900', accent: 'ring-blue-500/30' },
  { name: 'Sportswear', icon: Users, color: 'from-blue-800 to-blue-900', accent: 'ring-blue-400/30' },
  { name: 'Gym Wear', icon: Dumbbell, color: 'from-gray-800 to-gray-900', accent: 'ring-red-500/30' },
  { name: 'Workwear', icon: Factory, color: 'from-slate-800 to-black', accent: 'ring-slate-400/30' },
  { name: 'Team Kits', icon: Shirt, color: 'from-blue-900 to-black', accent: 'ring-royal-400/30' },
  { name: 'Accessories', icon: Package, color: 'from-gray-900 to-black', accent: 'ring-gray-400/30' },
]

export default function FeaturedCategories() {
  return (
    <section id="categories" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Categories</h2>
          <p className="text-sm text-gray-500">Premium lines for every arena</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ name, icon: Icon, color }, idx) => (
            <a key={idx} href="#products" className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-6 ring-1 ring-black/5 shadow-sm` }>
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(600px_200px_at_0%_0%,#60a5fa,transparent),radial-gradient(400px_200px_at_100%_100%,#ef4444,transparent)]" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-xs uppercase tracking-wider">Explore</p>
                  <h3 className="mt-1 text-white text-xl font-semibold">{name}</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white">
                  <Icon />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="text-white/70 text-sm">View collection</span>
                <span className="h-px flex-1 bg-white/20" />
              </div>
              <div className="absolute -bottom-10 right-6 w-40 h-40 rounded-full blur-2xl bg-blue-500/20 group-hover:translate-y-2 transition" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
