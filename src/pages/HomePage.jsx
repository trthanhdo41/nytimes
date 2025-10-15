import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import DealCard from '../components/DealCard'
import { getAllArticles, getFeaturedArticles, getLatestArticles } from '../firebase/articleService'

const HomePage = () => {
  const [latestArticles, setLatestArticles] = useState([])
  const [featuredArticle, setFeaturedArticle] = useState(null)
  const [allArticles, setAllArticles] = useState([])
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
  
  // Dummy data as fallback
  const dummyLatestArticles = [
    { id: 1, slug: 'puzzles-toys-2-year-olds', title: 'The Best Puzzles, Animal Toys, and More for Energetic 2-Year-Olds', date: 'Today' },
    { id: 2, slug: 'gag-gifts', title: 'Gag Gifts (That They Might Actually Use)', date: 'Today' },
    { id: 3, slug: 'colored-pencils', title: 'The Best Colored Pencils', date: 'Today' },
    { id: 4, slug: 'sweatpants-sweatshirts', title: 'The 24 Comfiest Sweatpants and Sweatshirts (That You Can Totally Leave the House In).', date: 'Today' },
    { id: 5, slug: 'travel-gadgets', title: 'Our 10 Favorite Travel Gadgets (That Actually Work)', date: 'Today' },
    { id: 6, slug: 'chess-set', title: 'How to Pick the Best Chess Set', date: 'Today' },
    { id: 7, slug: 'halloween-tricks', title: 'Be a Neighborhood Legend With These 5 Halloween Tricks From a Wirecutter Gadget Expert', date: 'Today' },
  ]

  const dummyFeaturedArticle = {
    slug: 'best-sweatshirts-sweatpants',
    title: 'The Best Sweatshirts and Sweatpants',
    author: 'Zoe Vanderweide',
    excerpt: 'After months of lounging around in sweatsuits, we found 24 women\'s, men\'s, and unisex styles that both look and feel terrific.',
    image: 'https://picsum.photos/800/500?random=1',
  }
  
  // Use Firebase data if available, otherwise use dummy data
  const displayLatestArticles = latestArticles.length > 0 ? latestArticles : dummyLatestArticles
  const displayFeaturedArticle = featuredArticle || dummyFeaturedArticle

  const deals = [
    {
      id: 1,
      title: 'Black Diamond Spot 400 Headlamp',
      salePrice: 42,
      originalPrice: 50,
      store: 'Public Lands',
      note: 'Price reflects in cart',
      image: 'https://picsum.photos/200/150?random=10',
      link: '#'
    },
    {
      id: 2,
      title: 'Hoka Clifton 10 Running Shoes (Men\'s)',
      salePrice: 110,
      originalPrice: 154,
      store: 'Dick\'s Sporting Goods',
      note: 'Price reflects in cart (deal on orange/white)',
      image: 'https://picsum.photos/200/150?random=11',
      link: '#'
    },
    {
      id: 3,
      title: 'Schoolhouse June Side Table',
      salePrice: 335,
      originalPrice: 434,
      store: 'Schoolhouse',
      note: 'Use promo code EARLYBIRD25',
      image: 'https://picsum.photos/200/150?random=12',
      link: '#'
    },
  ]

  // Full sections data
  const sections = [
    {
      name: 'Create your own bathroom oasis',
      description: 'Expert-approved products to help you create the perfect space for your daily refreshes.',
      slug: 'bathroom',
      articles: [
        {
          slug: '50-bathroom-picks',
          title: '50(ish) Wirecutter Picks to Glow Up Your Bathroom for $50 or Less',
          image: 'https://picsum.photos/400/300?random=20',
        },
        {
          slug: 'best-bathroom-rugs',
          title: 'The Best Bathroom Rugs and Bath Mats',
          image: 'https://picsum.photos/400/300?random=21',
        },
        {
          slug: 'organizing-small-bathroom',
          title: 'Great Ideas for Organizing a Small Bathroom',
          image: 'https://picsum.photos/400/300?random=22',
        },
        {
          slug: 'best-bath-towel',
          title: 'The Best Bath Towel',
          image: 'https://picsum.photos/400/300?random=23',
        },
      ]
    },
    {
      name: 'Home',
      slug: 'home',
      subtitle: 'Cleaning, Smart home devices, Bedroom',
      articles: [
        {
          slug: 'halloween-tricks',
          title: 'Be a Neighborhood Legend With These 5 Halloween Tricks From a Wirecutter Gadget Expert',
          author: 'Rachel Cericola',
          excerpt: 'Skip the pricey big-box Halloween decorations and conjure up these kid-safe front porch scare tactics using devices you may already own.',
          date: 'Updated October 14, 2025',
          image: 'https://picsum.photos/400/300?random=30',
        },
        {
          slug: 'cordless-lamp',
          title: 'Do You Need a Cordless Lamp? Well, Define \'Need\'…',
          author: 'Ivy Elrod',
          excerpt: 'Don\'t dismiss portable lamps as a gimmick. They can solve a few lighting challenges that you may not even realize you have.',
          date: 'Published October 10, 2025',
          image: 'https://picsum.photos/400/300?random=31',
        },
        {
          slug: 'halloween-decor',
          title: 'Our Favorite Halloween Decor',
          author: 'Dorie Chevlen',
          excerpt: 'Our Halloween-obsessed writer found the best decor to make your home feel festive and spooky.',
          date: 'Updated October 9, 2025',
          image: 'https://picsum.photos/400/300?random=32',
        },
      ]
    },
    {
      name: 'Electronics',
      slug: 'electronics',
      subtitle: 'Smartphones, Audio, Computers',
      articles: [
        {
          slug: 'canon-lenses',
          title: '13 Lenses That Will Level Up Your Canon Mirrorless Camera Experience',
          author: 'Erin Roberts',
          excerpt: 'After dozens of hours of research and testing more than 20 lenses, these are our picks for the first lenses you should buy for your RF-mount mirrorless camera.',
          date: 'Updated October 14, 2025',
          image: 'https://picsum.photos/400/300?random=40',
        },
        {
          slug: 'bluetooth-receivers',
          title: 'The Best Bluetooth Audio Receivers and Transmitters',
          author: 'Adrienne Maxwell and Dennis Burger',
          excerpt: 'Want to add Bluetooth to an audio or video device that doesn\'t have it? We\'ve got recommendations for the best Bluetooth receivers and transmitters.',
          date: 'Updated October 14, 2025',
          image: 'https://picsum.photos/400/300?random=41',
        },
        {
          slug: 'portable-cd-player',
          title: 'The Best Portable CD Player',
          author: 'Brent Butterworth',
          excerpt: 'The Syitren R300 is our favorite portable CD player because it offers a great mix of performance and convenience for a reasonable price.',
          date: 'Published October 14, 2025',
          image: 'https://picsum.photos/400/300?random=42',
        },
      ]
    },
    {
      name: 'Sleep',
      slug: 'sleep',
      subtitle: 'How to sleep better, Sleep gear, Mattresses',
      articles: [
        {
          slug: 'air-mattress',
          title: 'The Best Air Mattress',
          author: 'Danna Lorch',
          excerpt: 'Don\'t settle for a leaky air mattress. After spending more than 180 hours testing air mattresses, we think the SoundAsleep Dream Series is the best of them all.',
          date: 'Updated October 7, 2025',
          image: 'https://picsum.photos/400/300?random=50',
        },
        {
          slug: 'throw-blankets',
          title: 'The Coziest Throw Blankets',
          author: 'Jackie Reeve',
          excerpt: 'We spent hundreds of hours researching and testing more than 50 throws. Here are the throws we think are the best to curl up with for a nap.',
          date: 'Updated October 6, 2025',
          image: 'https://picsum.photos/400/300?random=51',
        },
        {
          slug: 'best-slippers',
          title: 'The Best Slippers',
          author: 'Zoe Vanderweide',
          excerpt: 'We\'ve been testing (and retesting) slippers since 2014, and we feel confident that our picks are the coziest, comfiest, most durable pairs available.',
          date: 'Updated October 1, 2025',
          image: 'https://picsum.photos/400/300?random=52',
        },
      ]
    },
    {
      name: 'Kitchen',
      slug: 'kitchen',
      subtitle: 'Cooking tools and utensils, Small kitchen appliances, Food and grocery',
      articles: [
        {
          slug: 'cutting-boards',
          title: 'The Best Cutting Boards',
          author: 'Michael Sullivan',
          excerpt: 'We\'ve tested over 40 cutting boards since 2015 and recommend four in a range of materials and price points.',
          date: 'Updated October 14, 2025',
          image: 'https://picsum.photos/400/300?random=60',
        },
        {
          slug: 'kitchen-scale',
          title: 'The Best Kitchen Scale',
          author: 'Laura Motley and Tyler Wells Lynch',
          excerpt: 'An accurate and dependable kitchen scale will help you be a better cook, and it\'ll cut down on dishes, too.',
          date: 'Updated October 10, 2025',
          image: 'https://picsum.photos/400/300?random=61',
        },
        {
          slug: 'fall-treats',
          title: '5 Little Treats for a Cozier Fall',
          author: 'Wirecutter Staff',
          excerpt: 'Today some Wirecutter journalists share the mainstays in their cozy routines, from a perfect sweater to quenching skin care.',
          date: 'Published October 14, 2025',
          image: 'https://picsum.photos/400/300?random=62',
        },
      ]
    },
    {
      name: 'Baby and kid',
      slug: 'baby-kid',
      subtitle: 'Baby, Toys, School',
      articles: [
        {
          slug: 'board-games-kids',
          title: 'Board Games We Love for Kids and Families',
          author: 'Courtney Schley and James Austin',
          excerpt: 'These games can introduce kids to new genres, help them build skills, and offer provocative and age-appropriate challenges, engaging themes, and distinctive designs.',
          date: 'Updated October 10, 2025',
          image: 'https://picsum.photos/400/300?random=70',
        },
        {
          slug: 'gifts-3-year-olds',
          title: 'Great Gifts for 3-Year-Olds Who Love to Play Pretend',
          author: 'Caitlin Giddings and Wirecutter Staff',
          excerpt: 'Open-ended toys that inspire role-playing and beginner board games that encourage cooperation make great gifts for 3-year-olds.',
          date: 'Updated October 9, 2025',
          image: 'https://picsum.photos/400/300?random=71',
        },
        {
          slug: 'jigsaw-puzzles',
          title: 'Jigsaw Puzzles We Love',
          author: 'James Austin',
          excerpt: 'Jigsaw puzzles are a great way to pass time on a rainy day, during a screen break, or at a family gathering. These are a few of our favorites.',
          date: 'Updated October 3, 2025',
          image: 'https://picsum.photos/400/300?random=72',
        },
      ]
    },
  ]

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
                {displayLatestArticles.map((article) => (
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
            <div className="mb-10">
              <Link to={`/article/${displayFeaturedArticle.slug}`} className="block mb-4">
                <img
                  src={displayFeaturedArticle.image}
                  alt={displayFeaturedArticle.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              </Link>
              <h1 className="text-[40px] font-bold mb-3 leading-[1.05] section-title">
                <Link to={`/article/${displayFeaturedArticle.slug}`} className="hover:underline">
                  {displayFeaturedArticle.title}
                </Link>
              </h1>
              <p className="text-[14px] text-gray-800 mb-2">by {displayFeaturedArticle.author}</p>
              <p className="text-[15px] text-gray-900 leading-[1.5]">{displayFeaturedArticle.excerpt}</p>
            </div>

            {/* All Sections */}
            {sections.map((section) => (
              <div key={section.slug} className="mb-10 pb-8 border-b-[3px] border-black">
                <h2 className="text-[34px] font-bold mb-1 section-title">{section.name}</h2>
                {section.description && (
                  <p className="text-[15px] text-gray-800 mb-5 leading-[1.5]">{section.description}</p>
                )}
                {section.subtitle && (
                  <p className="text-[13px] text-gray-600 mb-5 leading-relaxed">
                    {section.subtitle}, or <Link to={`/category/${section.slug}`} className="underline">see all in {section.name}</Link>
                  </p>
                )}
                
                {/* Grid layout - 4 columns for special sections, 3 for regular */}
                <div className={`grid grid-cols-1 ${section.description ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-6`}>
                  {section.articles.map((article) => (
                    <ArticleCard key={article.slug} article={article} layout="vertical" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar - Deals */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <h2 className="text-[26px] font-bold mb-4 pb-2 border-b-[3px] border-black section-title">Daily deals</h2>
              <p className="text-[13px] text-gray-600 mb-4 leading-relaxed">Price drops on products we already love</p>
              <div>
                {deals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
              <Link to="/deals" className="block font-bold underline mt-3 text-[14px]">
                See all 211 deals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
