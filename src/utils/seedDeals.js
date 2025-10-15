export const dealsData = [
  {
    title: 'Black Diamond Spot 400 Headlamp',
    salePrice: 42,
    originalPrice: 50,
    store: 'Public Lands',
    note: 'Price reflects in cart',
    image: 'https://picsum.photos/id/1001/400/300',
    link: 'https://www.publiclands.com',
    active: true
  },
  {
    title: 'Hoka Clifton 10 Running Shoes (Men\'s)',
    salePrice: 110,
    originalPrice: 154,
    store: 'Dick\'s Sporting Goods',
    note: 'Price reflects in cart (deal on orange/white)',
    image: 'https://picsum.photos/id/1002/400/300',
    link: 'https://www.dickssportinggoods.com',
    active: true
  },
  {
    title: 'Schoolhouse June Side Table',
    salePrice: 335,
    originalPrice: 434,
    store: 'Schoolhouse',
    note: 'Use promo code EARLYBIRD25',
    image: 'https://picsum.photos/id/1003/400/300',
    link: 'https://www.schoolhouse.com',
    active: true
  },
  {
    title: 'Vitamix 5200 Blender',
    salePrice: 299,
    originalPrice: 449,
    store: 'Amazon',
    note: 'Limited time offer',
    image: 'https://picsum.photos/id/1004/400/300',
    link: 'https://www.amazon.com',
    active: true
  },
  {
    title: 'Apple AirPods Pro (2nd Gen)',
    salePrice: 199,
    originalPrice: 249,
    store: 'Best Buy',
    note: 'Save $50',
    image: 'https://picsum.photos/id/1005/400/300',
    link: 'https://www.bestbuy.com',
    active: true
  }
];

// Function to seed deals to Firebase
import { createDeal } from '../firebase/dealService';

export const seedDeals = async () => {
  try {
    const createdIds = [];
    
    for (const deal of dealsData) {
      const id = await createDeal(deal);
      createdIds.push(id);
    }
    
    return createdIds;
  } catch (error) {
    console.error('Error seeding deals:', error);
    throw error;
  }
};

