import { X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SubscribeModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  const handleSubscribe = () => {
    onClose()
    navigate('/thank-you')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50 fade-in" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-full mx-4 relative scale-in" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="p-8 text-center">
          {/* Logo */}
          <div className="mb-4">
            <div className="text-[10px] font-bold tracking-[0.1em] mb-1 text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
              The New York Times
            </div>
            <h1 className="text-[36px] font-bold logo-text text-black">
              Wirecutter
            </h1>
          </div>

          {/* Header */}
          <h2 className="text-[26px] font-bold mb-3 leading-tight" style={{ fontFamily: 'Cheltenham, Georgia, serif' }}>
            Get the best of (just about) everything
          </h2>

          <p className="text-[16px] text-gray-700 mb-5 leading-relaxed">
            Thousands of independent reviews. Dozens of daily deals. One source for buying better.
          </p>

          {/* Image */}
          <div className="mb-6">
            <img 
              src="https://picsum.photos/500/250?random=999" 
              alt="Wirecutter products"
              className="w-full rounded-lg"
            />
          </div>

          {/* Subscribe Options */}
          <div className="space-y-3 mb-5">
            <button 
              onClick={handleSubscribe}
              className="w-full bg-[#326891] text-white py-3 rounded text-[15px] font-bold hover:bg-[#2a5a7a] transition-colors"
            >
              Subscribe now for $40/year
            </button>
            
            <button 
              onClick={handleSubscribe}
              className="w-full border-2 border-gray-300 py-3 rounded text-[15px] font-bold hover:bg-gray-50 transition-colors"
            >
              Subscribe now for $5/month
            </button>
          </div>

          {/* Terms */}
          <p className="text-[11px] text-gray-600">
            By subscribing, you agree to our{' '}
            <a href="#" className="underline hover:text-gray-900">Terms of Sale</a> and{' '}
            <a href="#" className="underline hover:text-gray-900">Privacy Policy</a>.
          </p>

          {/* Login Link */}
          <p className="text-[13px] text-gray-700 mt-4">
            Already have an account?{' '}
            <button className="font-bold underline hover:text-gray-900">
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SubscribeModal

