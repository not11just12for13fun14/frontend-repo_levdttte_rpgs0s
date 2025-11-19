import React from 'react'
import Hero from './components/Hero'
import FeaturedCategories from './components/FeaturedCategories'
import ProductGrid from './components/ProductGrid'
import Customization from './components/Customization'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <Hero />

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Product Grid */}
      <ProductGrid />

      {/* Customization */}
      <Customization />

      {/* Story */}
      <Story />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
