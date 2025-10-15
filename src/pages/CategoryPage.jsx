import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import { getArticlesByCategory } from '../firebase/articleService'

const CategoryPage = () => {
  const { slug } = useParams()
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  
  // Load articles from Firebase
  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true)
        
        // Convert slug to category name
        const categoryName = slug.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
        
        const data = await getArticlesByCategory(categoryName)
        
        setArticles(data.map(a => ({
          id: a.id,
          slug: a.slug,
          title: a.title,
          author: a.author,
          excerpt: a.excerpt,
          date: formatDate(a.createdAt),
          image: a.mainImage
        })))
      } catch (error) {
        console.error('Error loading articles:', error)
        // Keep empty state if Firebase not configured
      } finally {
        setLoading(false)
      }
    }
    
    loadArticles()
  }, [slug])
  
  const formatDate = (date) => {
    if (!date) return 'Recent'
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // REMOVED: All dummy categoryData - only using Firebase data now
  
  const categoryTitles = {
    kitchen: 'Kitchen',
    electronics: 'Electronics',
    'home-garden': 'Home & Garden',
    'health-lifestyle': 'Health & Lifestyle',
    tech: 'Tech',
    'baby-kid': 'Baby & Kid',
    style: 'Style',
    gifts: 'Gifts',
    deals: 'Deals',
  }

  return (
    <div className="bg-white min-h-screen fade-in">
      <div className="max-w-[1280px] mx-auto px-5 py-8 slide-down">
        <h1 className="text-[40px] font-bold mb-2 section-title leading-[1.15]">
          {categoryTitles[slug] || slug.replace('-', ' ')}
        </h1>
        <p className="text-[15px] text-gray-600 mb-8">Expert reviews and recommendations</p>

        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading articles...</p>
          </div>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} layout="vertical" />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No articles found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryPage
