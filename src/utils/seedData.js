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
    mainImage: 'https://picsum.photos/800/600?random=101',
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
    mainImage: 'https://picsum.photos/800/600?random=102',
    featured: false
  },
  {
    title: 'The Best Blender',
    slug: 'best-blender',
    category: 'Kitchen',
    author: 'Lesley Stockton',
    excerpt: 'The Vitamix 5200 is the best blender for most people because it makes smooth smoothies and is easy to use and clean.',
    content: `<p>After testing 15 blenders, we think the Vitamix 5200 is the best blender for most people. It consistently blended smoother smoothies than any other blender we tested.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=103',
    featured: false
  },
  {
    title: 'The Best Coffee Maker',
    slug: 'best-coffee-maker',
    category: 'Kitchen',
    author: 'Michael Sullivan',
    excerpt: 'The OXO Brew 9 Cup Coffee Maker is the best drip coffee maker because it brews better-tasting coffee than most machines.',
    content: `<p>After testing 15 coffee makers, the OXO Brew 9 Cup Coffee Maker is our top pick. It brews flavorful, hot coffee and is easy to use.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=104',
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
    mainImage: 'https://picsum.photos/800/600?random=201',
    featured: true
  },
  {
    title: 'The Best Laptop',
    slug: 'best-laptop',
    category: 'Tech',
    author: 'Kimber Streams',
    excerpt: 'The Apple MacBook Air M2 is the best laptop for most people because it\'s fast, has great battery life, and is reasonably priced.',
    content: `<p>After testing 20 laptops, we recommend the MacBook Air M2 for most people. It's powerful enough for everyday tasks and has excellent battery life.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=202',
    featured: false
  },
  {
    title: 'The Best Smartphone',
    slug: 'best-smartphone',
    category: 'Tech',
    author: 'Thorin Klosowski',
    excerpt: 'The iPhone 15 is the best smartphone for most people because of its excellent camera, long battery life, and years of software support.',
    content: `<p>We tested the latest smartphones and found the iPhone 15 offers the best balance of features, performance, and price.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=203',
    featured: false
  },
  {
    title: 'The Best Tablet',
    slug: 'best-tablet',
    category: 'Tech',
    author: 'Nick Guy',
    excerpt: 'The iPad Air is the best tablet for most people because it has a great screen, fast performance, and works with the Apple Pencil.',
    content: `<p>After testing 12 tablets, the iPad Air is our favorite. It's powerful, has a beautiful screen, and works with accessories.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=204',
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
    mainImage: 'https://picsum.photos/800/600?random=301',
    featured: false
  },
  {
    title: 'The Best Air Purifier',
    slug: 'best-air-purifier',
    category: 'Home & Garden',
    author: 'Tim Heffernan',
    excerpt: 'The Coway AP-1512HH Mighty is the best air purifier because it removes 99% of particles and is energy efficient.',
    content: `<p>After testing 15 air purifiers, the Coway Mighty is our favorite. It effectively cleans the air and costs little to run.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=302',
    featured: false
  },
  {
    title: 'The Best Robot Vacuum',
    slug: 'best-robot-vacuum',
    category: 'Home & Garden',
    author: 'Liam McCabe',
    excerpt: 'The iRobot Roomba i3+ EVO is the best robot vacuum because it cleans well and empties itself automatically.',
    content: `<p>We tested 20 robot vacuums and the Roomba i3+ is our top choice. It navigates well and has a self-emptying dock.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=303',
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
    mainImage: 'https://picsum.photos/800/600?random=401',
    featured: false
  },
  {
    title: 'The Best Yoga Mat',
    slug: 'best-yoga-mat',
    category: 'Health & Lifestyle',
    author: 'Wirecutter Staff',
    excerpt: 'The Manduka PRO is the best yoga mat for most people because it provides excellent grip and cushioning.',
    content: `<p>We tested 15 yoga mats and the Manduka PRO is our favorite. It's durable, comfortable, and has great traction.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=402',
    featured: false
  },
  {
    title: 'The Best Water Bottle',
    slug: 'best-water-bottle',
    category: 'Health & Lifestyle',
    author: 'Kalee Thompson',
    excerpt: 'The Hydro Flask Standard Mouth is the best water bottle because it keeps drinks cold for hours and is leak-proof.',
    content: `<p>After testing 20 water bottles, the Hydro Flask is our top pick. It's insulated, durable, and easy to clean.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=403',
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
    mainImage: 'https://picsum.photos/800/600?random=501',
    featured: false
  },
  {
    title: 'The Best Stroller',
    slug: 'best-stroller',
    category: 'Baby & Kid',
    author: 'Wirecutter Staff',
    excerpt: 'The Baby Jogger City Mini GT2 is the best stroller because it\'s easy to fold, maneuvers well, and has great suspension.',
    content: `<p>After testing 12 strollers, we recommend the Baby Jogger City Mini GT2. It's compact, smooth, and built to last.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=502',
    featured: false
  },
  {
    title: 'The Best Baby Monitor',
    slug: 'best-baby-monitor',
    category: 'Baby & Kid',
    author: 'Wirecutter Staff',
    excerpt: 'The Infant Optics DXR-8 is the best baby monitor because it has a clear picture and reliable connection.',
    content: `<p>We tested 10 baby monitors and the Infant Optics DXR-8 is our top choice. It's easy to use and performs consistently.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=503',
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
    mainImage: 'https://picsum.photos/800/600?random=601',
    featured: false
  },
  {
    title: 'The Best Jeans',
    slug: 'best-jeans',
    category: 'Style',
    author: 'Wirecutter Staff',
    excerpt: 'Levi\'s 501 Original Fit Jeans are the best jeans for most people because they fit well and are built to last.',
    content: `<p>After trying on dozens of jeans, we recommend Levi\'s 501s. They\'re classic, comfortable, and durable.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=602',
    featured: false
  },
  {
    title: 'The Best Sneakers',
    slug: 'best-sneakers',
    category: 'Style',
    author: 'Wirecutter Staff',
    excerpt: 'The Adidas Stan Smith is the best sneaker for most people because it\'s comfortable, versatile, and stylish.',
    content: `<p>We tested 20 sneakers and the Adidas Stan Smith is our top pick. It goes with everything and is comfortable all day.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=603',
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
    mainImage: 'https://picsum.photos/800/600?random=701',
    featured: true
  },
  {
    title: 'The Best Monitor',
    slug: 'best-monitor',
    category: 'Electronics',
    author: 'Thorin Klosowski',
    excerpt: 'The Dell UltraSharp U2723DE is the best monitor for most people because it has a great picture and ergonomic stand.',
    content: `<p>We tested 15 monitors and the Dell UltraSharp is our top choice. It has accurate colors and comfortable viewing angles.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=702',
    featured: false
  },
  {
    title: 'The Best Keyboard',
    slug: 'best-keyboard',
    category: 'Electronics',
    author: 'Kimber Streams',
    excerpt: 'The Keychron K8 is the best keyboard because it\'s comfortable to type on and works with any device.',
    content: `<p>After testing 25 keyboards, we recommend the Keychron K8. It has great switches and connects via Bluetooth or cable.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=703',
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
    mainImage: 'https://picsum.photos/800/600?random=801',
    featured: false
  },
  {
    title: 'The Best Gifts for Coffee Lovers',
    slug: 'best-gifts-coffee-lovers',
    category: 'Gifts',
    author: 'Wirecutter Staff',
    excerpt: 'From grinders to mugs, these are the best gifts for the coffee enthusiast in your life.',
    content: `<p>We've tested hundreds of coffee products and these are our favorites for gift-giving. Any coffee lover would appreciate these.</p>`,
    mainImage: 'https://picsum.photos/800/600?random=802',
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
    mainImage: 'https://picsum.photos/800/600?random=901',
    featured: true
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

