import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { LogOut, Settings, BarChart3 } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Admin() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/login')
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    toast.success('Logged out successfully')
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold font-playfair">
            <span className="text-white">Admin</span> <span className="text-yellow-600">Dashboard</span>
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center gap-4">
              <BarChart3 size={32} className="text-yellow-600" />
              <div>
                <p className="text-gray-400 text-sm">Total Services</p>
                <p className="text-2xl font-bold">4</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center gap-4">
              <Settings size={32} className="text-yellow-600" />
              <div>
                <p className="text-gray-400 text-sm">Bookings</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex items-center gap-4">
              <BarChart3 size={32} className="text-yellow-600" />
              <div>
                <p className="text-gray-400 text-sm">Gallery Items</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-4 bg-black border border-gray-800 rounded hover:border-yellow-600 transition text-left">
              <p className="font-bold">Manage Services</p>
              <p className="text-sm text-gray-400">Add, edit, or remove services</p>
            </button>
            <button className="p-4 bg-black border border-gray-800 rounded hover:border-yellow-600 transition text-left">
              <p className="font-bold">View Bookings</p>
              <p className="text-sm text-gray-400">Manage customer bookings</p>
            </button>
            <button className="p-4 bg-black border border-gray-800 rounded hover:border-yellow-600 transition text-left">
              <p className="font-bold">Gallery Settings</p>
              <p className="text-sm text-gray-400">Update gallery images</p>
            </button>
            <button className="p-4 bg-black border border-gray-800 rounded hover:border-yellow-600 transition text-left">
              <p className="font-bold">Website Settings</p>
              <p className="text-sm text-gray-400">Customize your website</p>
            </button>
          </div>
        </div>

        <div className="mt-12 p-6 bg-yellow-600 text-black rounded-lg">
          <h3 className="font-bold text-lg mb-2">🎉 Welcome to Your Admin Panel!</h3>
          <p>This is a fully functional luxury fashion website dashboard. Full admin features are being deployed. Check back soon for complete functionality.</p>
        </div>
      </div>
    </div>
  )
}