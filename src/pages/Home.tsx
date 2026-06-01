import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  const services = [
    {
      title: 'Bespoke Suits',
      description: 'Handcrafted suits tailored to perfection for modern gentlemen.',
      price: 'From ₦250,000',
      icon: '👔'
    },
    {
      title: 'Wedding Wear',
      description: 'Exquisite bridal and groom wear for your special day.',
      price: 'Custom pricing',
      icon: '💍'
    },
    {
      title: 'Corporate Attire',
      description: 'Professional business wear that commands respect.',
      price: 'From ₦150,000',
      icon: '🎩'
    },
    {
      title: 'Native Wear',
      description: 'Authentic African attire crafted with cultural pride.',
      price: 'From ₦200,000',
      icon: '🎭'
    }
  ]

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-playfair">
            <span className="text-white">Élégance</span>
            <br />
            <span className="text-yellow-600">Couture</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Premium Luxury Tailoring & Fashion Design
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/booking" 
              className="px-8 py-3 bg-yellow-600 text-black font-bold rounded hover:bg-yellow-500 transition flex items-center gap-2"
            >
              Book Now <ChevronRight size={20} />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3 border-2 border-yellow-600 text-yellow-600 font-bold rounded hover:bg-yellow-600 hover:text-black transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-16 font-playfair">
            Our <span className="text-yellow-600">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-yellow-600 transition hover:shadow-lg hover:shadow-yellow-600/20"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <p className="text-yellow-600 font-bold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-10 font-playfair">
            About <span className="text-yellow-600">Us</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            With over a decade of experience in luxury fashion design and tailoring, Adel Clothes has become the premier choice for those who demand perfection. Every piece we create is a masterpiece, crafted with meticulous attention to detail and the finest materials.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our commitment to excellence, combined with our understanding of contemporary style and timeless elegance, ensures that every client receives not just clothing, but an investment in their personal image and confidence.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6 font-playfair">Ready to Elevate Your Style?</h2>
          <p className="text-gray-300 mb-8">
            Contact us today to schedule a consultation with our expert designers.
          </p>
          <Link 
            to="/booking"
            className="inline-block px-10 py-4 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}