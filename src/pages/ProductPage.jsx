import { useParams, Link } from 'react-router-dom'
import { Bookmark, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getArticleBySlug } from '../firebase/articleService'

const ProductPage = () => {
  const { slug } = useParams()
  const [bookmarked, setBookmarked] = useState({})
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Load article from Firebase
  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true)
        const data = await getArticleBySlug(slug)
        
        if (data) {
          // Transform Firebase data to match ProductPage structure
          const transformedArticle = {
            title: data.title,
            category: data.category,
            categorySlug: data.category?.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'),
            author: data.author,
            date: new Date(data.createdAt).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            }),
            readTime: '10 min read',
            mainImage: data.mainImage || 'https://picsum.photos/1200/600',
            excerpt: data.excerpt,
            
            // Parse content as HTML
            picks: [],
            sections: [
              {
                title: data.title,
                content: data.content || data.excerpt
              }
            ],
            relatedArticles: []
          }
          
          setArticle(transformedArticle)
        } else {
          setArticle(null)
        }
      } catch (error) {
        console.error('Error loading article:', error)
        setArticle(null)
      } finally {
        setLoading(false)
      }
    }
    
    loadArticle()
  }, [slug])


  const toggleBookmark = (id) => {
    setBookmarked(prev => ({ ...prev, [id]: !prev[id] }))
  }
  
  // Show loading state
  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading article...</p>
        </div>
      </div>
    )
  }
  
  // Show error if article not found
  if (!article) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/" className="text-secondary hover:underline">Go back to homepage</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen fade-in">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-5 py-3">
          <div className="flex items-center text-[13px] text-gray-600">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/category/${article.categorySlug}`} className="hover:underline">{article.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{article.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Title */}
            <h1 className="text-[48px] font-bold mb-4 leading-[1.1] section-title">
              {article.title}
            </h1>
            
            {/* Meta */}
            <div className="flex items-center gap-4 mb-6 text-[14px]">
              <span className="text-gray-700">by <span className="font-bold">{article.author}</span></span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500 uppercase tracking-wide">{article.date}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">{article.readTime}</span>
            </div>

            {/* Featured Image */}
            <div className="mb-8 image-hover rounded-lg overflow-hidden">
              <img
                src={article.mainImage}
                alt={article.title}
                className="w-full aspect-[2/1] object-cover"
              />
            </div>

            {/* Excerpt */}
            <p className="text-[18px] text-gray-800 mb-10 leading-[1.65] font-[500]">
              {article.excerpt}
            </p>

            {/* Product Picks */}
            {article.picks && article.picks.length > 0 && (
              <div className="space-y-8 mb-12">
                {article.picks.map((pick) => (
                  <div key={pick.id} className="border border-gray-200 rounded-lg overflow-hidden hover-lift bg-white">
                    {/* Label */}
                    <div className={`${pick.labelColor} text-white px-6 py-3`}>
                      <span className="text-[14px] font-bold uppercase tracking-wide">{pick.label}</span>
                    </div>

                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Product Image */}
                        <div className="md:w-[280px] flex-shrink-0">
                          <div className="image-hover rounded overflow-hidden bg-gray-50 p-4">
                            <img
                              src={pick.image}
                              alt={pick.name}
                              className="w-full aspect-square object-contain"
                            />
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-[24px] font-bold leading-tight article-title">
                              {pick.name}
                            </h3>
                            <button
                              onClick={() => toggleBookmark(pick.id)}
                              className="ml-4 p-2 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                              aria-label="Bookmark"
                            >
                              <Bookmark 
                                size={20} 
                                className={bookmarked[pick.id] ? 'fill-current' : ''}
                              />
                            </button>
                          </div>

                          <p className="text-[16px] text-gray-700 mb-6 leading-[1.65]">
                            {pick.description}
                          </p>

                          {/* Buy Buttons */}
                          <div className="flex flex-wrap gap-3">
                            {pick.stores.map((store, idx) => (
                              <a
                                key={idx}
                                href={store.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded font-bold text-[14px] hover:bg-gray-800 transition-colors"
                              >
                                <span>${store.price} from {store.name}</span>
                                <ExternalLink size={16} />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {article.sections && article.sections.map((section, idx) => (
                <div key={idx} className="mb-10">
                  <h2 className="text-[32px] font-bold mb-4 section-title leading-[1.2]">
                    {section.title}
                  </h2>
                  <div 
                    className="text-[16px] leading-[1.65] text-gray-800"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              {/* Related Articles */}
              {article.relatedArticles && article.relatedArticles.length > 0 && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-[20px] font-bold mb-4 section-title">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {article.relatedArticles.map((related, idx) => (
                      <Link
                        key={idx}
                        to={`/article/${related.slug}`}
                        className="block group hover:bg-white p-3 -m-3 rounded transition-colors"
                      >
                        <div className="flex gap-3">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-20 h-20 object-cover rounded flex-shrink-0"
                          />
                          <div className="flex-1">
                            <h4 className="text-[14px] font-bold group-hover:underline leading-tight">
                              {related.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter Signup */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                <h3 className="text-[18px] font-bold mb-2 section-title">
                  Get our newsletter
                </h3>
                <p className="text-[14px] text-gray-700 mb-4 leading-relaxed">
                  Wirecutter's weekly newsletter will help you find what you need.
                </p>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded mb-3 text-[14px]"
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded font-bold text-[14px] hover:bg-blue-700 transition-colors">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
