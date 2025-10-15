import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Music } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-white mt-16">
      <div className="max-w-[1280px] mx-auto px-5 py-14">
        {/* Logo and Description */}
        <div className="mb-10">
          <div className="mb-4">
            <div className="text-[10px] font-bold tracking-[0.1em] mb-1 text-gray-400" style={{ fontFamily: 'Georgia, serif' }}>
              The New York Times
            </div>
            <Link to="/" className="text-[30px] font-bold logo-text inline-block text-white hover:text-gray-200">
              Wirecutter
            </Link>
          </div>
          <p className="text-[15px] text-gray-300 max-w-[540px] leading-[1.65] mb-1">
            Wirecutter is the product recommendation service from The New York Times. Our journalists combine 
            independent research with (occasionally) over-the-top testing so you can make quick and confident 
            buying decisions. Whether it's finding great products or discovering helpful advice, we'll help you 
            get it right (the first time). <Link to="/subscribe" className="underline hover:text-white">Subscribe now</Link> for unlimited access.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 mb-12">
          {/* Column 1 */}
          <div>
            <ul className="space-y-3 text-[14px]">
              <li><Link to="/about" className="text-gray-300 hover:text-white hover:underline">About Wirecutter</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white hover:underline">Our team</Link></li>
              <li><Link to="/demographics" className="text-gray-300 hover:text-white hover:underline">Staff demographics</Link></li>
              <li><Link to="/jobs" className="text-gray-300 hover:text-white hover:underline">Jobs at Wirecutter</Link></li>
              <li><Link to="/pitch" className="text-gray-300 hover:text-white hover:underline">How to pitch</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-3 text-[14px]">
              <li><Link to="/contact" className="text-gray-300 hover:text-white hover:underline">Contact The New York Times</Link></li>
              <li><Link to="/feedback" className="text-gray-300 hover:text-white hover:underline">Send us feedback</Link></li>
              <li><Link to="/newsletters" className="text-gray-300 hover:text-white hover:underline">Newsletters</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-3 text-[14px]">
              <li><Link to="/how-to-pitch" className="text-gray-300 hover:text-white hover:underline">How to pitch</Link></li>
              <li><Link to="/contact-nyt" className="text-gray-300 hover:text-white hover:underline">Contact The New York Times</Link></li>
              <li><Link to="/send-feedback" className="text-gray-300 hover:text-white hover:underline">Send us feedback</Link></li>
              <li><Link to="/newsletters-signup" className="text-gray-300 hover:text-white hover:underline">Newsletters</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="space-y-3 text-[14px]">
              <li><Link to="/partnerships" className="text-gray-300 hover:text-white hover:underline">Partnerships & Advertising</Link></li>
              <li><Link to="/licensing" className="text-gray-300 hover:text-white hover:underline">Licensing & Reprints</Link></li>
              <li><Link to="/rss" className="text-gray-300 hover:text-white hover:underline">RSS</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mb-12">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
             aria-label="Facebook">
            <Facebook size={20} fill="currentColor" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
             aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
             aria-label="Twitter/X">
            <Twitter size={18} fill="currentColor" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
             className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
             aria-label="TikTok">
            <Music size={20} />
          </a>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-gray-400">
            <span>&copy; 2025 Wirecutter, Inc., A New York Times Company</span>
            <Link to="/privacy" className="hover:text-white hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white hover:underline">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white hover:underline">Cookie Policy</Link>
            <Link to="/partnerships" className="hover:text-white hover:underline">Partnerships & Advertising</Link>
            <Link to="/licensing" className="hover:text-white hover:underline">Licensing & Reprints</Link>
            <Link to="/rss" className="hover:text-white hover:underline">RSS</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
