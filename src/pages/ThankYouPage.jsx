import { Link } from 'react-router-dom'
import { CheckCircle, ArrowLeft } from 'lucide-react'

const ThankYouPage = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center fade-in">
      <div className="max-w-2xl mx-auto px-5 text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <CheckCircle size={80} className="text-green-500 mx-auto" />
        </div>

        {/* Main Message */}
        <h1 className="text-[40px] font-bold mb-4 section-title leading-tight">
          Thank You!
        </h1>
        
        <p className="text-[18px] text-gray-700 mb-8 leading-relaxed">
          Your request has been received. We'll be in touch soon!
        </p>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-[20px] font-bold mb-3" style={{ fontFamily: 'Cheltenham, Georgia, serif' }}>
            What's Next?
          </h2>
          <ul className="text-[15px] text-gray-700 space-y-2 text-left max-w-md mx-auto">
            <li>• We'll review your information</li>
            <li>• You'll receive a confirmation email</li>
            <li>• Our team will contact you within 24 hours</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#326891] text-white px-6 py-3 rounded font-medium hover:bg-[#2a5a7a] transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Homepage
          </Link>
          
          <Link
            to="/category/deals"
            className="inline-flex items-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors"
          >
            Browse Deals
          </Link>
        </div>

        {/* Footer Note */}
        <p className="text-[13px] text-gray-500 mt-8">
          Questions? Contact us at{' '}
          <a href="mailto:support@wirecutter.com" className="underline hover:text-gray-700">
            support@wirecutter.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default ThankYouPage
