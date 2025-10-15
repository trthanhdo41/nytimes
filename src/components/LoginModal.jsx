import { X } from 'lucide-react'

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50 fade-in" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative scale-in" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {/* Header */}
          <h2 className="text-[28px] font-bold mb-2 leading-tight" style={{ fontFamily: 'Cheltenham, Georgia, serif' }}>
            Log in or create a free Times account to continue
          </h2>

          {/* Email Form */}
          <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder=""
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#326891] text-white py-3 rounded font-medium hover:bg-[#2a5a7a] transition-colors mb-4"
            >
              Continue
            </button>

            <div className="text-center text-sm text-gray-600 mb-4">or</div>

            {/* Terms */}
            <p className="text-xs text-gray-600 text-center mb-4">
              By continuing, you agree to the{' '}
              <a href="#" className="underline hover:text-gray-900">Terms of Sale</a>,{' '}
              <a href="#" className="underline hover:text-gray-900">Terms of Service</a>, and{' '}
              <a href="#" className="underline hover:text-gray-900">Privacy Policy</a>.
            </p>

            {/* Social Login Buttons */}
            <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded font-medium hover:bg-gray-50 transition-colors mb-3 flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded font-medium hover:bg-gray-50 transition-colors mb-4 flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="currentColor"/>
              </svg>
              Continue with Apple
            </button>

            <div className="text-center">
              <a href="#" className="text-sm underline hover:text-gray-900">
                Continue with work or school single sign-on &gt;
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginModal

