import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import ArticleEditor from './pages/admin/ArticleEditor'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Admin Routes (no header/footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/articles/new"
            element={
              <ProtectedRoute>
                <ArticleEditor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/articles/edit/:id"
            element={
              <ProtectedRoute>
                <ArticleEditor />
              </ProtectedRoute>
            }
          />

          {/* Public Routes (with header/footer) */}
          <Route
            path="/*"
            element={
              <div className="min-h-screen bg-white">
                <Header />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/category/:slug" element={<CategoryPage />} />
                  <Route path="/article/:slug" element={<ProductPage />} />
                  <Route path="/product/:slug" element={<ProductPage />} />
                </Routes>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
