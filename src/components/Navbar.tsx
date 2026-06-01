import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-white">Adel</span>
          <span className="text-yellow-600">Clothes</span>
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-yellow-600 transition">Home</Link>
          <Link to="/services" className="hover:text-yellow-600 transition">Services</Link>
          <Link to="/gallery" className="hover:text-yellow-600 transition">Gallery</Link>
          <Link to="/booking" className="hover:text-yellow-600 transition">Booking</Link>
          <Link to="/login" className="text-yellow-600 hover:text-yellow-500 transition">Admin</Link>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 py-4 px-4 space-y-2">
          <Link to="/" className="block py-2 hover:text-yellow-600">Home</Link>
          <Link to="/services" className="block py-2 hover:text-yellow-600">Services</Link>
          <Link to="/gallery" className="block py-2 hover:text-yellow-600">Gallery</Link>
          <Link to="/booking" className="block py-2 hover:text-yellow-600">Booking</Link>
          <Link to="/login" className="block py-2 text-yellow-600">Admin</Link>
        </div>
      )}
    </nav>
  )
}