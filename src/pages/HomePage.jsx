import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import DealCard from '../components/DealCard'
import { getAllArticles, getFeaturedArticles, getLatestArticles } from '../firebase/articleService'
import { getActiveDeals } from '../firebase/dealService'

const HomePage = () => {
  const [latestArticles, setLatestArticles] = useState([])
  const [featuredArticle, setFeaturedArticle] = useState(null)
  const [allArticles, setAllArticles] = useState([])
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)

  const disclaimer = "We independently review everything we recommend. When you buy through our links, we may earn a commission."
  
  // Load articles from Firebase
  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true)
        
        // Fetch featured articles
        const featured = await getFeaturedArticles(1)
        if (featured.length > 0) {
          setFeaturedArticle({
            id: featured[0].id,
            slug: featured[0].slug,
            title: featured[0].title,
            author: featured[0].author,
            excerpt: featured[0].excerpt,
            image: featured[0].mainImage
          })
        }
        
        // Fetch latest articles
        const latest = await getLatestArticles(10)
        setLatestArticles(latest.map(a => ({
          id: a.id,
          slug: a.slug,
          title: a.title,
          date: formatDate(a.createdAt)
        })))
        
        // Fetch all articles for sections
        const all = await getAllArticles()
        setAllArticles(all)
        
        // Fetch active deals
        const activeDeals = await getActiveDeals(3)
        setDeals(activeDeals)
        
      } catch (error) {
        console.error('Error loading articles:', error)
        // Keep empty state if Firebase not configured
      } finally {
        setLoading(false)
      }
    }
    
    loadArticles()
  }, [])
  
  const formatDate = (date) => {
    if (!date) return 'Recent'
    const now = new Date()
    const articleDate = new Date(date)
    const diffDays = Math.floor((now - articleDate) / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    return articleDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
  
  // Organize articles by category for sections
  const articlesByCategory = allArticles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {});

  // Create sections from Firebase data
  const sections = Object.keys(articlesByCategory).map(category => ({
    name: category,
    slug: category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'),
    articles: articlesByCategory[category].slice(0, 3) // Show top 3 articles per category
  })).filter(section => section.articles.length > 0);

  // REMOVED: All dummy data - only using Firebase data now

  return (
    <div className="bg-white fade-in">
      {/* Disclaimer */}
      <div className="bg-gray-50 border-b border-gray-200 slide-down">
        <div className="max-w-[1280px] mx-auto px-5 py-2.5 text-center">
          <p className="text-[13px] text-gray-800 leading-relaxed">
            {disclaimer} <Link to="/about" className="underline font-bold">Learn more ›</Link>
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Latest */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-[26px] font-bold mb-4 pb-2 border-b-[3px] border-black section-title">The latest</h2>
              <div className="space-y-0">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} layout="list" />
                ))}
              </div>
              <Link to="/articles" className="block mt-3 font-bold underline text-[14px]">
                See everything
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            {/* Featured Article */}
            {featuredArticle && (
              <div className="mb-10">
                <Link to={`/article/${featuredArticle.slug}`} className="block mb-4">
                  <img
                    src={featuredArticle.mainImage || featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                </Link>
                <h1 className="text-[40px] font-bold mb-3 leading-[1.05] section-title">
                  <Link to={`/article/${featuredArticle.slug}`} className="hover:underline">
                    {featuredArticle.title}
                  </Link>
                </h1>
                <p className="text-[14px] text-gray-800 mb-2">by {featuredArticle.author}</p>
                <p className="text-[15px] text-gray-900 leading-[1.5]">{featuredArticle.excerpt}</p>
              </div>
            )}

            {/* All Sections */}
            {sections.map((section) => (
              <div key={section.slug} className="mb-10 pb-8 border-b-[3px] border-black">
                <h2 className="text-[34px] font-bold mb-1 section-title">{section.name}</h2>
                
                {/* Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.articles.map((article) => (
                    <ArticleCard key={article.slug || article.id} article={{
                      ...article,
                      date: formatDate(article.createdAt),
                      image: article.mainImage || article.image
                    }} layout="vertical" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar - Daily deals */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <h2 className="text-[26px] font-bold mb-4 pb-2 border-b-[3px] border-black section-title">Daily deals</h2>
              <p className="text-[13px] text-gray-600 mb-4 leading-relaxed">Price drops on products we already love</p>
              <div>
                {deals.length > 0 ? (
                  deals.map((deal) => (
                    <DealCard key={deal.id} deal={deal} />
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No deals available at the moment.</p>
                )}
              </div>
              {deals.length > 0 && (
                <Link to="/deals" className="block font-bold underline mt-3 text-[14px]">
                  See all deals
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
