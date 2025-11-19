import React from 'react'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg ring-1 ring-white/10">
                <span className="text-white font-black tracking-wider">W</span>
              </div>
              <span className="text-white/90 text-xl font-semibold tracking-wide">WARUS</span>
            </div>
            <p className="mt-4 text-white/70 max-w-md">Premium corporate clothing and athletic wear engineered for performance. Built for athletes, teams, and brands that lead.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-center gap-2"><Mail size={16}/> hello@warus.co</li>
              <li className="flex items-center gap-2"><Phone size={16}/> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><MapPin size={16}/> Global HQ, New York</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition" aria-label="Instagram"><Instagram size={18}/></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition" aria-label="Facebook"><Facebook size={18}/></a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition" aria-label="LinkedIn"><Linkedin size={18}/></a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/50 flex items-center justify-between">
          <p>© {new Date().getFullYear()} WARUS. All rights reserved.</p>
          <p>Crafted for performance.</p>
        </div>
      </div>
    </footer>
  )
}
