import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App
