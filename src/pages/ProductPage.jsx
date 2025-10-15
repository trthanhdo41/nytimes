import { useParams, Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

const ProductPage = () => {
  const { slug } = useParams()

  const article = {
    title: 'The Best Vacuum Cleaners',
    author: 'Liam McCabe',
    date: 'Updated October 12, 2025',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=1000&h=600&fit=crop',
    excerpt: 'After testing dozens of vacuums over the years, we think the Shark Navigator Lift-Away NV352 is the best vacuum for most people.',
    content: `
      <p>We've tested more than 50 vacuums over the years, and we're confident that the Shark Navigator Lift-Away NV352 is the best vacuum for most people. It's powerful, versatile, affordable, and easy to use.</p>
      
      <h2>Our pick: Shark Navigator Lift-Away NV352</h2>
      <p>The Shark Navigator Lift-Away NV352 is our top pick because it combines strong suction, versatility, and a reasonable price. It works well on all floor types and has a detachable canister for cleaning stairs and upholstery.</p>
      
      <h3>Why it's great</h3>
      <ul>
        <li>Powerful suction on all floor types</li>
        <li>Lift-Away canister for stairs and furniture</li>
        <li>HEPA filter traps allergens</li>
        <li>Large dust cup means fewer trips to the trash</li>
        <li>Five-year warranty</li>
      </ul>
      
      <h3>Flaws but not dealbreakers</h3>
      <p>The Navigator can be a bit loud, and the hose is relatively short. But these are minor inconveniences compared with its overall performance.</p>
    `,
    products: [
      {
        name: 'Shark Navigator Lift-Away NV352',
        price: 199,
        link: '#',
        store: 'Amazon',
        image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=300&h=300&fit=crop',
      }
    ]
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:underline">Home</Link>
          {' '}/{' '}
          <Link to="/category/home-garden" className="hover:underline">Home & Garden</Link>
          {' '}/{' '}
          <span className="text-gray-900">{article.title}</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4 leading-tight">{article.title}</h1>
        
        {/* Meta */}
        <p className="text-gray-700 mb-2">by {article.author}</p>
        <p className="text-sm text-gray-500 mb-8">{article.date}</p>

        {/* Featured Image */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover mb-8"
        />

        {/* Excerpt */}
        <p className="text-xl text-gray-800 mb-8 leading-relaxed">{article.excerpt}</p>

        {/* Product Recommendation Box */}
        {article.products && article.products.length > 0 && (
          <div className="border-2 border-gray-300 p-6 mb-8 bg-gray-50">
            <h3 className="font-bold text-lg mb-4">Our pick</h3>
            {article.products.map((product, idx) => (
              <div key={idx} className="flex gap-4 items-center">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-contain" />
                <div className="flex-1">
                  <h4 className="font-bold mb-2">{product.name}</h4>
                  <p className="text-2xl font-bold mb-2">${product.price}</p>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 font-semibold rounded"
                  >
                    Buy from {product.store}
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </div>
    </div>
  )
}

export default ProductPage
