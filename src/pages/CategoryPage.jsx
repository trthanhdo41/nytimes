import { useParams } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'

const CategoryPage = () => {
  const { slug } = useParams()

  const categoryData = {
    kitchen: [
      {
        slug: 'best-vacuum-cleaners',
        title: 'The Best Vacuum Cleaners',
        author: 'Liam McCabe',
        excerpt: 'After testing dozens of vacuums over the years, we think the Shark Navigator Lift-Away NV352 is the best vacuum for most people.',
        date: 'Updated October 12, 2025',
        image: 'https://picsum.photos/400/300?random=100',
      },
      {
        slug: 'best-robot-vacuum',
        title: 'The Best Robot Vacuums',
        author: 'Liam McCabe',
        excerpt: 'The iRobot Roomba i3+ EVO is the best robot vacuum for most people because it cleans well and rarely gets stuck.',
        date: 'Updated October 10, 2025',
        image: 'https://picsum.photos/400/300?random=101',
      },
      {
        slug: 'best-cutting-board',
        title: 'The Best Cutting Boards',
        author: 'Michael Sullivan',
        excerpt: 'We\'ve tested over 40 cutting boards since 2015 and recommend four in a range of materials and price points.',
        date: 'Updated October 14, 2025',
        image: 'https://picsum.photos/400/300?random=102',
      },
      {
        slug: 'best-kitchen-knives',
        title: 'The Best Kitchen Knives',
        author: 'Michael Sullivan',
        excerpt: 'A great chef\'s knife is the most important tool in your kitchen. After five years of testing, we think the Mac Mighty MTH-80 is the best.',
        date: 'Updated October 8, 2025',
        image: 'https://picsum.photos/400/300?random=103',
      },
      {
        slug: 'best-blender',
        title: 'The Best Blender',
        author: 'Lesley Stockton',
        excerpt: 'After blending more than 200 smoothies, we think the Vitamix 5200 is the best blender for most people.',
        date: 'Updated October 5, 2025',
        image: 'https://picsum.photos/400/300?random=104',
      },
      {
        slug: 'best-stand-mixer',
        title: 'The Best Stand Mixer',
        author: 'Lesley Stockton',
        excerpt: 'After mixing hundreds of batches of cookie dough and kneading countless loaves of bread, we think the KitchenAid Classic Plus is the best stand mixer.',
        date: 'Updated October 1, 2025',
        image: 'https://picsum.photos/400/300?random=105',
      },
    ],
    electronics: [
      {
        slug: 'best-laptop',
        title: 'The Best Laptops',
        author: 'Kimber Streams',
        excerpt: 'We\'ve tested hundreds of laptops to find the best ones for any budget and use case.',
        date: 'Updated October 14, 2025',
        image: 'https://picsum.photos/400/300?random=200',
      },
      {
        slug: 'best-headphones',
        title: 'The Best Wireless Headphones',
        author: 'Lauren Dragan',
        excerpt: 'After testing more than 100 pairs of headphones, we recommend the Sony WH-1000XM5 as the best wireless headphones.',
        date: 'Updated October 12, 2025',
        image: 'https://picsum.photos/400/300?random=201',
      },
      {
        slug: 'best-phone',
        title: 'The Best Smartphones',
        author: 'Roderick Scott',
        excerpt: 'We test dozens of phones every year to find the best options for any budget.',
        date: 'Updated October 10, 2025',
        image: 'https://picsum.photos/400/300?random=202',
      },
    ],
    'home-garden': [
      {
        slug: 'best-vacuum-cleaners',
        title: 'The Best Vacuum Cleaners',
        author: 'Liam McCabe',
        excerpt: 'After testing dozens of vacuums over the years, we think the Shark Navigator Lift-Away NV352 is the best vacuum for most people.',
        date: 'Updated October 14, 2025',
        image: 'https://picsum.photos/400/300?random=300',
      },
      {
        slug: 'best-air-purifier',
        title: 'The Best Air Purifiers',
        author: 'Tim Heffernan',
        excerpt: 'After five years of testing air purifiers, we recommend the Coway AP-1512HH Mighty as the best air purifier for most people.',
        date: 'Updated October 12, 2025',
        image: 'https://picsum.photos/400/300?random=301',
      },
      {
        slug: 'best-mattress',
        title: 'The Best Mattresses',
        author: 'Jackie Reeve',
        excerpt: 'We\'ve spent hundreds of hours researching and testing mattresses to find the best options for every sleeping position and budget.',
        date: 'Updated October 10, 2025',
        image: 'https://picsum.photos/400/300?random=302',
      },
      {
        slug: 'best-humidifier',
        title: 'The Best Humidifiers',
        author: 'Tim Heffernan',
        excerpt: 'After testing dozens of humidifiers, we recommend the Levoit LV600S as the best humidifier for most people.',
        date: 'Updated October 8, 2025',
        image: 'https://picsum.photos/400/300?random=303',
      },
      {
        slug: 'best-bed-sheets',
        title: 'The Best Bed Sheets',
        author: 'Jackie Reeve',
        excerpt: 'After sleeping on 20 different sheet sets, we think the Mellanni sheets are the best combination of comfort and value.',
        date: 'Updated October 5, 2025',
        image: 'https://picsum.photos/400/300?random=304',
      },
      {
        slug: 'best-sofa',
        title: 'The Best Sofas',
        author: 'Jackie Reeve',
        excerpt: 'We spent months researching and testing sofas to find the most comfortable and durable options for any budget.',
        date: 'Updated October 1, 2025',
        image: 'https://picsum.photos/400/300?random=305',
      },
    ],
    'health-lifestyle': [
      {
        slug: 'best-fitness-tracker',
        title: 'The Best Fitness Trackers',
        author: 'Courtney Schley',
        excerpt: 'After testing dozens of fitness trackers, we think the Fitbit Charge 6 is the best fitness tracker for most people.',
        date: 'Updated October 14, 2025',
        image: 'https://picsum.photos/400/300?random=400',
      },
      {
        slug: 'best-yoga-mat',
        title: 'The Best Yoga Mats',
        author: 'Joanne Chen',
        excerpt: 'After testing 35 yoga mats, we recommend the Manduka PRO as the best yoga mat for most people.',
        date: 'Updated October 12, 2025',
        image: 'https://picsum.photos/400/300?random=401',
      },
      {
        slug: 'best-water-bottle',
        title: 'The Best Water Bottles',
        author: 'Sabine Heinlein',
        excerpt: 'After testing 25 water bottles, we think the Hydro Flask is the best water bottle for most people.',
        date: 'Updated October 10, 2025',
        image: 'https://picsum.photos/400/300?random=402',
      },
      {
        slug: 'best-massage-gun',
        title: 'The Best Massage Guns',
        author: 'Ingrid Skjong',
        excerpt: 'After testing 10 massage guns, we recommend the Theragun Prime as the best massage gun for most people.',
        date: 'Updated October 8, 2025',
        image: 'https://picsum.photos/400/300?random=403',
      },
      {
        slug: 'best-sunscreen',
        title: 'The Best Sunscreen',
        author: 'Hunter Harris',
        excerpt: 'After researching and testing dozens of sunscreens, we recommend Coppertone Ultra Guard as our top pick.',
        date: 'Updated October 5, 2025',
        image: 'https://picsum.photos/400/300?random=404',
      },
    ],
    tech: [
      {
        slug: 'best-wireless-earbuds',
        title: 'The Best Wireless Earbuds',
        author: 'Lauren Dragan',
        excerpt: 'After testing over 200 pairs of wireless earbuds, we recommend the Apple AirPods Pro as the best wireless earbuds.',
        date: 'Updated October 14, 2025',
        image: 'https://picsum.photos/400/300?random=500',
      },
      {
        slug: 'best-tablet',
        title: 'The Best Tablets',
        author: 'Roderick Scott',
        excerpt: 'After testing dozens of tablets, we think the Apple iPad is the best tablet for most people.',
        date: 'Updated October 12, 2025',
        image: 'https://picsum.photos/400/300?random=501',
      },
      {
        slug: 'best-external-hard-drive',
        title: 'The Best External Hard Drives',
        author: 'Justin Krajeski',
        excerpt: 'After testing dozens of external hard drives, we recommend the WD My Book as the best external hard drive.',
        date: 'Updated October 10, 2025',
        image: 'https://picsum.photos/400/300?random=502',
      },
      {
        slug: 'best-keyboard',
        title: 'The Best Wireless Keyboards',
        author: 'Kimber Streams',
        excerpt: 'After testing 25 wireless keyboards, we think the Logitech K380 is the best wireless keyboard for most people.',
        date: 'Updated October 8, 2025',
        image: 'https://picsum.photos/400/300?random=503',
      },
      {
        slug: 'best-mouse',
        title: 'The Best Wireless Mouse',
        author: 'Kimber Streams',
        excerpt: 'After testing dozens of wireless mice, we recommend the Logitech MX Master 3S as the best wireless mouse.',
        date: 'Updated October 5, 2025',
        image: 'https://picsum.photos/400/300?random=504',
      },
      {
        slug: 'best-camera',
        title: 'The Best Cameras',
        author: 'Erin Roberts',
        excerpt: 'After years of testing cameras, we recommend the Sony a6400 as the best camera for most people.',
        date: 'Updated October 1, 2025',
        image: 'https://picsum.photos/400/300?random=505',
      },
    ],
    'baby-kid': [
      {
        slug: 'best-car-seat',
        title: 'The Best Car Seats',
        author: 'Kalee Thompson',
        excerpt: 'After researching and crash-testing dozens of car seats, we recommend the Graco 4Ever DLX as the best car seat.',
        date: 'Updated October 14, 2025',
        image: 'https://picsum.photos/400/300?random=600',
      },
      {
        slug: 'best-stroller',
        title: 'The Best Strollers',
        author: 'Kalee Thompson',
        excerpt: 'After pushing dozens of strollers for hundreds of miles, we think the Baby Jogger City Mini GT2 is the best stroller.',
        date: 'Updated October 12, 2025',
        image: 'https://picsum.photos/400/300?random=601',
      },
      {
        slug: 'best-baby-monitor',
        title: 'The Best Baby Monitors',
        author: 'Kalee Thompson',
        excerpt: 'After testing 30 baby monitors, we recommend the Infant Optics DXR-8 Pro as the best baby monitor.',
        date: 'Updated October 10, 2025',
        image: 'https://picsum.photos/400/300?random=602',
      },
      {
        slug: 'best-diaper-bag',
        title: 'The Best Diaper Bags',
        author: 'Kalee Thompson',
        excerpt: 'After carrying around 25 diaper bags, we think the Skip Hop Forma is the best diaper bag for most parents.',
        date: 'Updated October 8, 2025',
        image: 'https://picsum.photos/400/300?random=603',
      },
      {
        slug: 'best-toys-toddlers',
        title: 'The Best Toys for Toddlers',
        author: 'Courtney Schley',
        excerpt: 'After researching and testing dozens of toys, we found the best toys for toddlers that encourage creative play.',
        date: 'Updated October 5, 2025',
        image: 'https://picsum.photos/400/300?random=604',
      },
    ],
    style: [
      {
        slug: 'best-backpack',
        title: 'The Best Backpacks',
        author: 'Sabrina Rojas Weiss',
        excerpt: 'After carrying 40 different backpacks, we recommend the Evergoods Civic Panel Loader 24L as the best backpack.',
        date: 'Updated October 14, 2025',
        image: 'https://picsum.photos/400/300?random=700',
      },
      {
        slug: 'best-jeans',
        title: 'The Best Jeans',
        author: 'Zoe Vanderweide',
        excerpt: 'After researching and testing dozens of jeans, we found the most comfortable and flattering jeans for every body type.',
        date: 'Updated October 12, 2025',
        image: 'https://picsum.photos/400/300?random=701',
      },
      {
        slug: 'best-luggage',
        title: 'The Best Luggage',
        author: 'Sabrina Rojas Weiss',
        excerpt: 'After years of testing luggage, we think the Away Bigger Carry-On is the best carry-on luggage for most travelers.',
        date: 'Updated October 10, 2025',
        image: 'https://picsum.photos/400/300?random=702',
      },
      {
        slug: 'best-sunglasses',
        title: 'The Best Sunglasses',
        author: 'Sabrina Rojas Weiss',
        excerpt: 'After testing dozens of sunglasses, we recommend EyeBuyDirect as the best place to buy affordable, quality sunglasses.',
        date: 'Updated October 8, 2025',
        image: 'https://picsum.photos/400/300?random=703',
      },
      {
        slug: 'best-watch',
        title: 'The Best Watches Under $500',
        author: 'Victoria Giardina',
        excerpt: 'After researching hundreds of watches, we found the best watches under $500 for any style and occasion.',
        date: 'Updated October 5, 2025',
        image: 'https://picsum.photos/400/300?random=704',
      },
    ],
    gifts: [
      {
        slug: 'gifts-under-50',
        title: 'The Best Gifts Under $50',
        author: 'Wirecutter Staff',
        excerpt: 'These affordable gifts are thoughtful, practical, and sure to please just about anyone on your list.',
        date: 'Updated October 14, 2025',
        image: 'https://picsum.photos/400/300?random=800',
      },
      {
        slug: 'gifts-for-dad',
        title: 'The Best Gifts for Dad',
        author: 'Wirecutter Staff',
        excerpt: 'Whether your dad is a techie, a foodie, or an outdoorsman, we have gift ideas he\'ll actually use.',
        date: 'Updated October 12, 2025',
        image: 'https://picsum.photos/400/300?random=801',
      },
      {
        slug: 'gifts-for-mom',
        title: 'The Best Gifts for Mom',
        author: 'Wirecutter Staff',
        excerpt: 'Show your mom how much you care with these thoughtful gift ideas that she\'ll love and actually use.',
        date: 'Updated October 10, 2025',
        image: 'https://picsum.photos/400/300?random=802',
      },
      {
        slug: 'gifts-for-teens',
        title: 'The Best Gifts for Teens',
        author: 'Wirecutter Staff',
        excerpt: 'These gifts are cool enough to impress even the pickiest teenagers on your list.',
        date: 'Updated October 8, 2025',
        image: 'https://picsum.photos/400/300?random=803',
      },
      {
        slug: 'gifts-under-100',
        title: 'The Best Gifts Under $100',
        author: 'Wirecutter Staff',
        excerpt: 'These gifts hit the sweet spot of being thoughtful, useful, and affordable.',
        date: 'Updated October 5, 2025',
        image: 'https://picsum.photos/400/300?random=804',
      },
      {
        slug: 'gifts-for-couples',
        title: 'The Best Gifts for Couples',
        author: 'Wirecutter Staff',
        excerpt: 'Whether they\'re newlyweds or celebrating decades together, these gifts are perfect for couples.',
        date: 'Updated October 1, 2025',
        image: 'https://picsum.photos/400/300?random=805',
      },
    ],
    deals: [
      {
        slug: 'best-black-friday-deals',
        title: 'The Best Black Friday Deals',
        author: 'Wirecutter Staff',
        excerpt: 'We\'re tracking the best Black Friday deals on Wirecutter-recommended products across all categories.',
        date: 'Updated October 14, 2025',
        image: 'https://picsum.photos/400/300?random=900',
      },
      {
        slug: 'amazon-prime-day-deals',
        title: 'The Best Amazon Prime Day Deals',
        author: 'Wirecutter Staff',
        excerpt: 'Our deal hunters have found the best Prime Day deals on products we\'ve tested and recommend.',
        date: 'Updated October 12, 2025',
        image: 'https://picsum.photos/400/300?random=901',
      },
      {
        slug: 'best-laptop-deals',
        title: 'The Best Laptop Deals',
        author: 'Wirecutter Staff',
        excerpt: 'We\'ve found the best deals on our favorite laptops from brands like Apple, Dell, and HP.',
        date: 'Updated October 10, 2025',
        image: 'https://picsum.photos/400/300?random=902',
      },
      {
        slug: 'best-tv-deals',
        title: 'The Best TV Deals',
        author: 'Wirecutter Staff',
        excerpt: 'Save hundreds on the TVs we recommend in our extensive testing and reviews.',
        date: 'Updated October 8, 2025',
        image: 'https://picsum.photos/400/300?random=903',
      },
      {
        slug: 'best-headphone-deals',
        title: 'The Best Headphone Deals',
        author: 'Wirecutter Staff',
        excerpt: 'Great deals on our favorite headphones and earbuds from brands like Sony, Bose, and Apple.',
        date: 'Updated October 5, 2025',
        image: 'https://picsum.photos/400/300?random=904',
      },
    ],
  }

  const articles = categoryData[slug] || []

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

        {articles.length > 0 ? (
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
