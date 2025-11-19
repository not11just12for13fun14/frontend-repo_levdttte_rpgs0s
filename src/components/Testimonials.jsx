import React from 'react'

export default function Testimonials() {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Airbnb_Logo_B%C3%A9lo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Puma_AG.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5a/Spotify_logo_with_text.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <p className="text-center text-sm text-gray-500 mb-6">Trusted by teams and brands worldwide</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-80">
          {logos.map((src, i) => (
            <div key={i} className="flex items-center justify-center">
              <img src={src} alt={`Client ${i+1}`} className="h-8 object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
