import { createArticle } from '../firebase/articleService';

// Seed data for Wirecutter clone
const seedArticles = [
  // Kitchen Category
  {
    title: 'The Best Chef\'s Knife',
    slug: 'best-chef-knife',
    category: 'Kitchen',
    author: 'Michael Sullivan',
    excerpt: 'After five years of testing and more than 20 knives, we think the Mac Mighty MTH-80 is the best chef\'s knife for most people.',
    content: `<p>After five years of testing the best chef's knives—and more than 20 knives total—we're confident that the Mac Mighty MTH-80 is the best chef's knife for most people. It's sharp, easy to handle, and universally useful.</p>

<h2>Why you should trust us</h2>
<p>We've been testing kitchen knives since 2013. For this guide, we spoke with knife experts and professional chefs to understand what makes a great chef's knife.</p>

<h2>How we picked and tested</h2>
<p>We tested each knife by dicing onions, mincing herbs, slicing tomatoes, and breaking down chickens. We also evaluated how comfortable each knife felt in our hands.</p>`,
      mainImage: 'https://picsum.photos/id/101/800/600',
    featured: true
  },
  {
    title: 'The Best Cutting Boards',
    slug: 'best-cutting-boards',
    category: 'Kitchen',
    author: 'Michael Sullivan',
    excerpt: 'We\'ve tested over 40 cutting boards since 2015 and recommend four in a range of materials and price points.',
    content: `<p>A good cutting board is one of the most important tools in your kitchen. After testing more than 40 cutting boards, we have recommendations for plastic, wood, and rubber boards.</p>

<h2>Our pick: Teakhaus Edge Grain Carving Board</h2>
<p>This gorgeous teak board is a solid, durable workhorse that's also beautiful enough to use as a serving platter.</p>`,
    mainImage: 'https://picsum.photos/id/102/800/600',
    featured: false
  },
  {
    title: 'The Best Blender',
    slug: 'best-blender',
    category: 'Kitchen',
    author: 'Lesley Stockton',
    excerpt: 'The Vitamix 5200 is the best blender for most people because it makes smooth smoothies and is easy to use and clean.',
    content: `<p>After testing 15 blenders, we think the Vitamix 5200 is the best blender for most people. It consistently blended smoother smoothies than any other blender we tested.</p>`,
    mainImage: 'https://picsum.photos/id/103/800/600',
    featured: false
  },
  {
    title: 'The Best Coffee Maker',
    slug: 'best-coffee-maker',
    category: 'Kitchen',
    author: 'Michael Sullivan',
    excerpt: 'The OXO Brew 9 Cup Coffee Maker is the best drip coffee maker because it brews better-tasting coffee than most machines.',
    content: `<p>After testing 15 coffee makers, the OXO Brew 9 Cup Coffee Maker is our top pick. It brews flavorful, hot coffee and is easy to use.</p>`,
    mainImage: 'https://picsum.photos/id/104/800/600',
    featured: false
  },

  // Tech Category
  {
    title: 'The Best Wireless Earbuds',
    slug: 'best-wireless-earbuds',
    category: 'Tech',
    author: 'Lauren Dragan',
    excerpt: 'After testing dozens of wireless earbuds, we think the Apple AirPods Pro offer the best combination of sound quality and features.',
    content: `<p>We've tested more than 50 pairs of wireless earbuds. The Apple AirPods Pro are our top pick because they sound great and have excellent noise cancellation.</p>`,
    mainImage: 'https://picsum.photos/id/201/800/600',
    featured: true
  },
  {
    title: 'The Best Laptop',
    slug: 'best-laptop',
    category: 'Tech',
    author: 'Kimber Streams',
    excerpt: 'The Apple MacBook Air M2 is the best laptop for most people because it\'s fast, has great battery life, and is reasonably priced.',
    content: `<p>After testing 20 laptops, we recommend the MacBook Air M2 for most people. It's powerful enough for everyday tasks and has excellent battery life.</p>`,
    mainImage: 'https://picsum.photos/id/202/800/600',
    featured: false
  },
  {
    title: 'The Best Smartphone',
    slug: 'best-smartphone',
    category: 'Tech',
    author: 'Thorin Klosowski',
    excerpt: 'The iPhone 15 is the best smartphone for most people because of its excellent camera, long battery life, and years of software support.',
    content: `<p>We tested the latest smartphones and found the iPhone 15 offers the best balance of features, performance, and price.</p>`,
    mainImage: 'https://picsum.photos/id/203/800/600',
    featured: false
  },
  {
    title: 'The Best Tablet',
    slug: 'best-tablet',
    category: 'Tech',
    author: 'Nick Guy',
    excerpt: 'The iPad Air is the best tablet for most people because it has a great screen, fast performance, and works with the Apple Pencil.',
    content: `<p>After testing 12 tablets, the iPad Air is our favorite. It's powerful, has a beautiful screen, and works with accessories.</p>`,
    mainImage: 'https://picsum.photos/id/204/800/600',
    featured: false
  },

  // Home & Garden Category
  {
    title: 'The Best Vacuum Cleaner',
    slug: 'best-vacuum-cleaner',
    category: 'Home & Garden',
    author: 'Liam McCabe',
    excerpt: 'The Shark Navigator Lift-Away NV352 is the best vacuum for most people because it works well on all surfaces and is affordable.',
    content: `<p>We've tested dozens of vacuums and the Shark Navigator is our top pick. It's powerful, versatile, and reasonably priced.</p>`,
    mainImage: 'https://picsum.photos/id/301/800/600',
    featured: false
  },
  {
    title: 'The Best Air Purifier',
    slug: 'best-air-purifier',
    category: 'Home & Garden',
    author: 'Tim Heffernan',
    excerpt: 'The Coway AP-1512HH Mighty is the best air purifier because it removes 99% of particles and is energy efficient.',
    content: `<p>After testing 15 air purifiers, the Coway Mighty is our favorite. It effectively cleans the air and costs little to run.</p>`,
    mainImage: 'https://picsum.photos/id/302/800/600',
    featured: false
  },
  {
    title: 'The Best Robot Vacuum',
    slug: 'best-robot-vacuum',
    category: 'Home & Garden',
    author: 'Liam McCabe',
    excerpt: 'The iRobot Roomba i3+ EVO is the best robot vacuum because it cleans well and empties itself automatically.',
    content: `<p>We tested 20 robot vacuums and the Roomba i3+ is our top choice. It navigates well and has a self-emptying dock.</p>`,
    mainImage: 'https://picsum.photos/id/303/800/600',
    featured: true
  },

  // Health & Lifestyle Category
  {
    title: 'The Best Fitness Tracker',
    slug: 'best-fitness-tracker',
    category: 'Health & Lifestyle',
    author: 'Courtney Schley',
    excerpt: 'The Fitbit Charge 5 is the best fitness tracker because it accurately tracks workouts and has great battery life.',
    content: `<p>After testing 12 fitness trackers, we recommend the Fitbit Charge 5. It tracks steps, heart rate, and sleep accurately.</p>`,
    mainImage: 'https://picsum.photos/id/401/800/600',
    featured: false
  },
  {
    title: 'The Best Yoga Mat',
    slug: 'best-yoga-mat',
    category: 'Health & Lifestyle',
    author: 'Wirecutter Staff',
    excerpt: 'The Manduka PRO is the best yoga mat for most people because it provides excellent grip and cushioning.',
    content: `<p>We tested 15 yoga mats and the Manduka PRO is our favorite. It's durable, comfortable, and has great traction.</p>`,
    mainImage: 'https://picsum.photos/id/402/800/600',
    featured: false
  },
  {
    title: 'The Best Water Bottle',
    slug: 'best-water-bottle',
    category: 'Health & Lifestyle',
    author: 'Kalee Thompson',
    excerpt: 'The Hydro Flask Standard Mouth is the best water bottle because it keeps drinks cold for hours and is leak-proof.',
    content: `<p>After testing 20 water bottles, the Hydro Flask is our top pick. It's insulated, durable, and easy to clean.</p>`,
    mainImage: 'https://picsum.photos/id/403/800/600',
    featured: false
  },

  // Baby & Kid Category
  {
    title: 'The Best Car Seat',
    slug: 'best-car-seat',
    category: 'Baby & Kid',
    author: 'Wirecutter Staff',
    excerpt: 'The Graco Extend2Fit is the best car seat for most families because it keeps kids rear-facing longer and is easy to install.',
    content: `<p>We tested 15 car seats and the Graco Extend2Fit is our favorite. It's safe, comfortable, and grows with your child.</p>`,
    mainImage: 'https://picsum.photos/id/501/800/600',
    featured: false
  },
  {
    title: 'The Best Stroller',
    slug: 'best-stroller',
    category: 'Baby & Kid',
    author: 'Wirecutter Staff',
    excerpt: 'The Baby Jogger City Mini GT2 is the best stroller because it\'s easy to fold, maneuvers well, and has great suspension.',
    content: `<p>After testing 12 strollers, we recommend the Baby Jogger City Mini GT2. It's compact, smooth, and built to last.</p>`,
    mainImage: 'https://picsum.photos/id/502/800/600',
    featured: false
  },
  {
    title: 'The Best Baby Monitor',
    slug: 'best-baby-monitor',
    category: 'Baby & Kid',
    author: 'Wirecutter Staff',
    excerpt: 'The Infant Optics DXR-8 is the best baby monitor because it has a clear picture and reliable connection.',
    content: `<p>We tested 10 baby monitors and the Infant Optics DXR-8 is our top choice. It's easy to use and performs consistently.</p>`,
    mainImage: 'https://picsum.photos/id/503/800/600',
    featured: false
  },

  // Style Category
  {
    title: 'The Best White T-Shirt',
    slug: 'best-white-t-shirt',
    category: 'Style',
    author: 'James Austin',
    excerpt: 'The Everlane Supima Cotton Crew is the best white t-shirt because it fits well, feels soft, and holds up to washing.',
    content: `<p>We tested 15 white t-shirts and the Everlane Supima Cotton Crew is our favorite. It's comfortable and durable.</p>`,
    mainImage: 'https://picsum.photos/id/601/800/600',
    featured: false
  },
  {
    title: 'The Best Jeans',
    slug: 'best-jeans',
    category: 'Style',
    author: 'Wirecutter Staff',
    excerpt: 'Levi\'s 501 Original Fit Jeans are the best jeans for most people because they fit well and are built to last.',
    content: `<p>After trying on dozens of jeans, we recommend Levi\'s 501s. They\'re classic, comfortable, and durable.</p>`,
    mainImage: 'https://picsum.photos/id/602/800/600',
    featured: false
  },
  {
    title: 'The Best Sneakers',
    slug: 'best-sneakers',
    category: 'Style',
    author: 'Wirecutter Staff',
    excerpt: 'The Adidas Stan Smith is the best sneaker for most people because it\'s comfortable, versatile, and stylish.',
    content: `<p>We tested 20 sneakers and the Adidas Stan Smith is our top pick. It goes with everything and is comfortable all day.</p>`,
    mainImage: 'https://picsum.photos/id/603/800/600',
    featured: false
  },

  // Electronics Category
  {
    title: 'The Best Headphones',
    slug: 'best-headphones',
    category: 'Electronics',
    author: 'Lauren Dragan',
    excerpt: 'The Sony WH-1000XM5 are the best headphones because they have excellent sound quality and noise cancellation.',
    content: `<p>After testing 30 pairs of headphones, the Sony WH-1000XM5 are our favorite. They sound amazing and block out noise effectively.</p>`,
    mainImage: 'https://picsum.photos/id/701/800/600',
    featured: true
  },
  {
    title: 'The Best Monitor',
    slug: 'best-monitor',
    category: 'Electronics',
    author: 'Thorin Klosowski',
    excerpt: 'The Dell UltraSharp U2723DE is the best monitor for most people because it has a great picture and ergonomic stand.',
    content: `<p>We tested 15 monitors and the Dell UltraSharp is our top choice. It has accurate colors and comfortable viewing angles.</p>`,
    mainImage: 'https://picsum.photos/id/702/800/600',
    featured: false
  },
  {
    title: 'The Best Keyboard',
    slug: 'best-keyboard',
    category: 'Electronics',
    author: 'Kimber Streams',
    excerpt: 'The Keychron K8 is the best keyboard because it\'s comfortable to type on and works with any device.',
    content: `<p>After testing 25 keyboards, we recommend the Keychron K8. It has great switches and connects via Bluetooth or cable.</p>`,
    mainImage: 'https://picsum.photos/id/703/800/600',
    featured: false
  },

  // Gifts Category
  {
    title: 'The Best Gifts Under $50',
    slug: 'best-gifts-under-50',
    category: 'Gifts',
    author: 'Wirecutter Staff',
    excerpt: 'Our favorite gifts under $50 include quality items that anyone would appreciate, from kitchen tools to tech accessories.',
    content: `<p>We've compiled a list of the best gifts under $50 that we've tested and loved. These make great presents for any occasion.</p>`,
    mainImage: 'https://picsum.photos/id/801/800/600',
    featured: false
  },
  {
    title: 'The Best Gifts for Coffee Lovers',
    slug: 'best-gifts-coffee-lovers',
    category: 'Gifts',
    author: 'Wirecutter Staff',
    excerpt: 'From grinders to mugs, these are the best gifts for the coffee enthusiast in your life.',
    content: `<p>We've tested hundreds of coffee products and these are our favorites for gift-giving. Any coffee lover would appreciate these.</p>`,
    mainImage: 'https://picsum.photos/id/802/800/600',
    featured: false
  },

  // More Featured Articles
  {
    title: 'The Best Sweatshirts and Sweatpants',
    slug: 'best-sweatshirts-sweatpants',
    category: 'Style',
    author: 'Zoe Vanderweide',
    excerpt: 'After months of lounging around in sweatsuits, we found 24 women\'s, men\'s, and unisex styles that both look and feel terrific.',
    content: `<p>We spent months testing sweatshirts and sweatpants to find the coziest, best-looking options. Here are our favorites.</p>

<h2>Our picks</h2>
<p>We have recommendations for different budgets and styles, from basic loungewear to elevated athletic wear.</p>`,
    mainImage: 'https://picsum.photos/id/901/800/600',
    featured: true
  },

  // Prime Day Category
  {
    title: 'The Best Prime Day Deals on Kitchen Essentials',
    slug: 'best-prime-day-kitchen-deals',
    category: 'Prime Day',
    author: 'Wirecutter Staff',
    excerpt: 'We\'ve rounded up the best Prime Day deals on kitchen gadgets, cookware, and appliances that we\'ve tested and recommend.',
    content: `<p>Prime Day is one of the best times to save on kitchen essentials. We\'ve tested hundreds of products and these are the deals worth getting.</p>

<h2>Top Kitchen Deals</h2>
<p>From stand mixers to air fryers, here are the kitchen tools on sale that we actually recommend.</p>

<h2>What to buy</h2>
<p>Our top picks include discounts on KitchenAid mixers, Instant Pots, quality knife sets, and essential cookware.</p>`,
    mainImage: 'https://picsum.photos/id/326/800/600',
    featured: false
  },
  {
    title: 'Prime Day Tech Deals: What\'s Actually Worth Buying',
    slug: 'prime-day-tech-deals-worth-buying',
    category: 'Prime Day',
    author: 'Thorin Klosowski',
    excerpt: 'Not all Prime Day tech deals are created equal. Here\'s what we recommend buying and what to skip.',
    content: `<p>Prime Day brings thousands of tech deals, but only a fraction are actually worth your money. We\'ve done the research.</p>

<h2>Best tech deals</h2>
<p>We\'re seeing genuine discounts on tablets, headphones, smart home devices, and more products we\'ve tested.</p>

<h2>What to avoid</h2>
<p>Beware of inflated "deals" on unknown brands. Stick to products we\'ve vetted and recommend year-round.</p>`,
    mainImage: 'https://picsum.photos/id/0/800/600',
    featured: false
  },
  {
    title: 'The Best Prime Day Deals on Home and Garden',
    slug: 'best-prime-day-home-garden-deals',
    category: 'Prime Day',
    author: 'Jackie Reeve',
    excerpt: 'Prime Day offers significant savings on home essentials. We\'ve found the best deals on products we trust.',
    content: `<p>Looking to upgrade your home during Prime Day? These are the deals on vacuum cleaners, bedding, and home improvement tools worth considering.</p>

<h2>Home essentials on sale</h2>
<p>Major discounts on robot vacuums, air purifiers, and quality bedding from brands we recommend.</p>

<h2>Garden deals</h2>
<p>Save on outdoor furniture, grills, and gardening tools that we\'ve tested and approved.</p>`,
    mainImage: 'https://picsum.photos/id/1015/800/600',
    featured: false
  },
  {
    title: 'Prime Day Beauty and Personal Care Deals',
    slug: 'prime-day-beauty-deals',
    category: 'Prime Day',
    author: 'Wirecutter Beauty Team',
    excerpt: 'The best Prime Day deals on skincare, hair care, and beauty tools that dermatologists and experts recommend.',
    content: `<p>Prime Day brings deals on premium beauty products. We\'ve identified the best discounts on items recommended by dermatologists and beauty experts.</p>

<h2>Skincare steals</h2>
<p>Quality moisturizers, serums, and sunscreens from trusted brands at genuine discounts.</p>

<h2>Hair and beauty tools</h2>
<p>Save on hair dryers, straighteners, and electric toothbrushes we\'ve thoroughly tested.</p>`,
    mainImage: 'https://picsum.photos/id/431/800/600',
    featured: true
  },

  // Deals Category
  {
    title: 'The Best Tech Deals Right Now',
    slug: 'best-tech-deals-right-now',
    category: 'Deals',
    author: 'Thorin Klosowski',
    excerpt: 'We track thousands of deals daily. Here are the best discounts on tech products we\'ve tested and recommend.',
    content: `<p>Our deal hunters track prices across the web to find genuine discounts on quality tech products.</p>

<h2>Today\'s top tech deals</h2>
<p>Current deals include laptops, tablets, wireless earbuds, and smart home devices that we\'ve tested and approved.</p>

<h2>How we find deals</h2>
<p>We use price tracking tools and our knowledge of typical pricing to identify real deals, not fake markdowns.</p>`,
    mainImage: 'https://picsum.photos/id/180/800/600',
    featured: false
  },
  {
    title: 'Kitchen and Home Deals We\'re Watching',
    slug: 'kitchen-home-deals-watching',
    category: 'Deals',
    author: 'Michael Sullivan',
    excerpt: 'The best current deals on kitchen gadgets, cookware, and home essentials from brands we trust.',
    content: `<p>We\'ve found significant discounts on kitchen and home products that we\'ve tested and recommend.</p>

<h2>Kitchen deals</h2>
<p>Quality cookware, small appliances, and kitchen tools at their lowest prices in months.</p>

<h2>Home essentials</h2>
<p>Save on vacuums, air purifiers, and other household items we use ourselves.</p>`,
    mainImage: 'https://picsum.photos/id/225/800/600',
    featured: false
  },
  {
    title: 'Best Deals on Baby and Kid Products',
    slug: 'best-deals-baby-kid-products',
    category: 'Deals',
    author: 'Kalee Thompson',
    excerpt: 'Current deals on car seats, strollers, toys, and other baby gear that we\'ve rigorously tested.',
    content: `<p>We monitor prices on baby products year-round and alert you to the best deals on items that meet our safety and quality standards.</p>

<h2>Baby gear on sale</h2>
<p>Discounts on car seats, strollers, and high chairs that have passed our safety tests.</p>

<h2>Toys and essentials</h2>
<p>Quality toys, baby monitors, and feeding supplies at great prices.</p>`,
    mainImage: 'https://picsum.photos/id/433/800/600',
    featured: false
  },
  {
    title: 'Fitness and Wellness Deals Worth Your Time',
    slug: 'fitness-wellness-deals',
    category: 'Deals',
    author: 'Ingrid Skjong',
    excerpt: 'The best deals on exercise equipment, yoga gear, and wellness products we\'ve tested.',
    content: `<p>Stay fit for less with these deals on quality exercise equipment and wellness products.</p>

<h2>Exercise equipment</h2>
<p>Discounts on yoga mats, resistance bands, dumbbells, and other fitness gear we recommend.</p>

<h2>Wellness products</h2>
<p>Save on massage guns, foam rollers, and recovery tools that actually work.</p>`,
    mainImage: 'https://picsum.photos/id/659/800/600',
    featured: false
  },
  {
    title: 'Best Clothing and Style Deals Today',
    slug: 'best-clothing-style-deals',
    category: 'Deals',
    author: 'Zoe Vanderweide',
    excerpt: 'Current deals on quality clothing, shoes, and accessories that we\'ve tested for comfort and durability.',
    content: `<p>We\'ve found the best deals on wardrobe essentials and accessories that we stand behind.</p>

<h2>Clothing deals</h2>
<p>Quality basics, outerwear, and activewear at significant discounts.</p>

<h2>Shoes and accessories</h2>
<p>Comfortable, durable footwear and bags from brands we trust.</p>`,
    mainImage: 'https://picsum.photos/id/683/800/600',
    featured: false
  }
];

export async function seedDatabase() {
  console.log('🌱 Starting database seeding...');
  
  try {
    let successCount = 0;
    let errorCount = 0;

    for (const article of seedArticles) {
      try {
        await createArticle(article);
        successCount++;
        console.log(`✅ Created: ${article.title}`);
      } catch (error) {
        errorCount++;
        console.error(`❌ Failed to create: ${article.title}`, error);
      }
    }

    console.log(`\n🎉 Seeding complete!`);
    console.log(`✅ Success: ${successCount} articles`);
    console.log(`❌ Failed: ${errorCount} articles`);
    
    return { successCount, errorCount };
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    throw error;
  }
}

