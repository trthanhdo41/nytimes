import { useParams, Link } from 'react-router-dom'
import { Bookmark, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const ProductPage = () => {
  const { slug } = useParams()
  const [bookmarked, setBookmarked] = useState({})

  const article = {
    title: 'The Best Cutting Boards',
    category: 'Kitchen',
    categorySlug: 'kitchen',
    author: 'Michael Sullivan',
    date: 'Updated October 14, 2025',
    readTime: '12 min read',
    mainImage: 'https://picsum.photos/1200/600?random=1000',
    excerpt: 'We\'ve tested over 40 cutting boards since 2015 and recommend four in a range of materials and price points. Whether you want plastic, wood, or rubber, we have a pick for you.',
    
    picks: [
      {
        id: 1,
        label: 'Best overall',
        labelColor: 'bg-blue-600',
        name: 'Teakhaus Edge Grain Carving Board',
        image: 'https://picsum.photos/400/400?random=1001',
        description: 'This gorgeous teak board is a solid, durable workhorse that\'s also beautiful enough to use as a serving platter.',
        price: 110,
        stores: [
          { name: 'Amazon', price: 110, link: '#' },
          { name: 'Williams Sonoma', price: 110, link: '#' },
        ]
      },
      {
        id: 2,
        label: 'Budget pick',
        labelColor: 'bg-green-600',
        name: 'OXO Good Grips Cutting Board',
        image: 'https://picsum.photos/400/400?random=1002',
        description: 'This plastic board is lightweight, dishwasher-safe, and affordable. It\'s perfect for everyday use.',
        price: 15,
        stores: [
          { name: 'Amazon', price: 15, link: '#' },
          { name: 'Target', price: 17, link: '#' },
        ]
      },
      {
        id: 3,
        label: 'Upgrade pick',
        labelColor: 'bg-blue-600',
        name: 'The Boardsmith Maple End Grain',
        image: 'https://picsum.photos/400/400?random=1003',
        description: 'This gorgeous end-grain maple board is half an inch thicker than the Teakhaus board and has more-durable feet.',
        price: 250,
        stores: [
          { name: 'Boardsmith', price: 250, link: '#' },
          { name: 'Amazon', price: 250, link: '#' },
        ]
      },
    ],

    sections: [
      {
        title: 'Why you should trust us',
        content: `I've been testing cutting boards since 2015, and I've put more than 40 different models through their paces. I've interviewed experts, including knife makers and professional chefs, about what makes a good cutting board.

For this guide, I also spoke with Michael Ruhlman, author of Ratio and Grocery, who has written extensively about kitchen equipment. I consulted with Bill Truslow, owner of the Brooklyn Kitchen, and several other knife and cookware professionals.`
      },
      {
        title: 'Who this is for',
        content: `A good cutting board is one of the most important tools in your kitchen. Whether you're a novice cook or a seasoned professional, you need a reliable surface for prepping food.

This guide is for anyone who wants a cutting board that will last for years and won't dull their knives. We have recommendations for different materials, sizes, and budgets.`
      },
      {
        title: 'How we picked and tested',
        content: `To find the best cutting boards, we started by reading reviews from sources like Cook's Illustrated, The Strategist, and Good Housekeeping. We also looked at highly rated boards on Amazon and Williams Sonoma.

We tested each board by using it to prep a variety of foods, including vegetables, meat, and bread. We paid attention to how stable the board felt, how easy it was to clean, and whether it showed signs of wear after repeated use.`
      }
    ],

    relatedArticles: [
      { title: 'The Best Kitchen Knives', slug: 'best-kitchen-knives', image: 'https://picsum.photos/300/200?random=2001' },
      { title: 'The Best Kitchen Shears', slug: 'best-kitchen-shears', image: 'https://picsum.photos/300/200?random=2002' },
      { title: 'The Best Chef\'s Knife', slug: 'best-chef-knife', image: 'https://picsum.photos/300/200?random=2003' },
    ]
  }

  const toggleBookmark = (id) => {
    setBookmarked(prev => ({ ...prev, [id]: !prev[id] }))
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

            {/* Article Sections */}
            <div className="prose prose-lg max-w-none">
              {article.sections.map((section, idx) => (
                <div key={idx} className="mb-10">
                  <h2 className="text-[32px] font-bold mb-4 section-title leading-[1.2]">
                    {section.title}
                  </h2>
                  <div className="text-[16px] leading-[1.65] text-gray-800 whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              {/* Related Articles */}
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
