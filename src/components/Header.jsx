import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'
import LoginModal from './LoginModal'
import SubscribeModal from './SubscribeModal'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeSubcategory, setActiveSubcategory] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [subscribeModalOpen, setSubscribeModalOpen] = useState(false)

  const menuCategories = [
    {
      name: 'Prime Day',
      slug: 'prime-day',
      subcategories: []
    },
    {
      name: 'Home & Garden',
      slug: 'home-garden',
      subcategories: [
        { 
          name: 'Vacuums, Cleaning, & Laundry',
          groups: [
            {
              title: 'Vacuum Cleaners',
              items: [
                { name: 'Vacuum cleaners', slug: 'vacuum-cleaners' },
                { name: 'Upright vacuums', slug: 'upright-vacuums' },
                { name: 'Cordless vacuums', slug: 'cordless-vacuums' },
                { name: 'Robot vacuums', slug: 'robot-vacuums' },
                { name: 'Handheld vacuums', slug: 'handheld-vacuums' },
                { name: 'Hardwood floor vacuums', slug: 'hardwood-vacuums' },
                { name: 'Vacuums for pet hair', slug: 'pet-vacuums' },
                { name: 'Car vacuums', slug: 'car-vacuums' },
              ]
            },
            {
              title: 'Mops & Cleaners',
              items: [
                { name: 'Wet mops', slug: 'wet-mops' },
                { name: 'Portable carpet & upholstery cleaners', slug: 'carpet-cleaners' },
                { name: 'Carpet cleaners', slug: 'carpet-cleaners-2' },
                { name: 'Wet/dry vacs', slug: 'wet-dry-vacs' },
                { name: 'Brooms, dustpans, & dust mops', slug: 'brooms' },
                { name: 'Surface cleaners & disinfectants', slug: 'surface-cleaners' },
              ]
            },
            {
              title: 'Laundry',
              items: [
                { name: 'Washers & dryers', slug: 'washers-dryers' },
                { name: 'Compact washers & dryers', slug: 'compact-washers' },
                { name: 'Irons', slug: 'irons' },
                { name: 'Ironing boards', slug: 'ironing-boards' },
                { name: 'Clothing steamers', slug: 'steamers' },
                { name: 'Laundry detergents', slug: 'detergents' },
                { name: 'Stain removers', slug: 'stain-removers' },
              ]
            },
          ]
        },
        { name: 'Bathroom', groups: [] },
        { name: 'Garden & Outdoors', groups: [] },
        { name: 'Heating, Cooling, & Air Quality', groups: [] },
        { name: 'Home & Decor', groups: [] },
        { name: 'Home Improvement', groups: [] },
        { name: 'Home Security & Safety', groups: [] },
        { name: 'Office', groups: [] },
        { name: 'Sleep', groups: [] },
      ]
    },
    {
      name: 'Kitchen',
      slug: 'kitchen',
      subcategories: [
        { 
          name: 'Cooking Tools & Utensils',
          groups: [
            {
              title: 'Essential Tools',
              items: [
                { name: 'Chef knives', slug: 'chef-knives' },
                { name: 'Cutting boards', slug: 'cutting-boards' },
                { name: 'Knife sets', slug: 'knife-sets' },
                { name: 'Kitchen shears', slug: 'kitchen-shears' },
              ]
            },
          ]
        },
        { name: 'Small Kitchen Appliances', groups: [] },
        { name: 'Food & Grocery', groups: [] },
      ]
    },
    {
      name: 'Health & Lifestyle',
      slug: 'health-lifestyle',
      subcategories: [
        { name: 'Fitness & Exercise', groups: [] },
        { name: 'Personal Care', groups: [] },
        { name: 'Wellness', groups: [] },
      ]
    },
    {
      name: 'Tech',
      slug: 'tech',
      subcategories: [
        {
          name: 'Smartphones & Accessories',
          groups: [
            {
              title: 'Phones',
              items: [
                { name: 'Best smartphones', slug: 'smartphones' },
                { name: 'iPhone', slug: 'iphone' },
                { name: 'Android phones', slug: 'android' },
              ]
            },
          ]
        },
        { name: 'Audio', groups: [] },
        { name: 'Computers & Tablets', groups: [] },
        { name: 'Cameras & Photography', groups: [] },
      ]
    },
    {
      name: 'Baby & Kid',
      slug: 'baby-kid',
      subcategories: [
        { name: 'Nursery & Baby Gear', groups: [] },
        { name: 'Toys & Games', groups: [] },
        { name: 'Kids\' Clothing', groups: [] },
      ]
    },
    {
      name: 'Style',
      slug: 'style',
      subcategories: [
        { name: 'Clothing & Accessories', groups: [] },
        { name: 'Bags & Luggage', groups: [] },
        { name: 'Shoes', groups: [] },
      ]
    },
    {
      name: 'Gifts',
      slug: 'gifts',
      subcategories: [
        { name: 'Gift Ideas by Recipient', groups: [] },
        { name: 'Gift Ideas by Price', groups: [] },
        { name: 'Gift Guides', groups: [] },
      ]
    },
    {
      name: 'Deals',
      slug: 'deals',
      subcategories: [
        { name: 'Daily Deals', groups: [] },
        { name: 'Sales & Promotions', groups: [] },
      ]
    },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-[100]">
      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-5 py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                <text x="12" y="18" fontSize="20" fontFamily="Georgia, serif" fontWeight="bold" textAnchor="middle" fill="currentColor">T</text>
              </svg>
              <span className="text-[30px] font-bold logo-text leading-none">Wirecutter</span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-[400px] mx-12">
              <div className="relative w-full">
                <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
                <input
                  type="text"
                  placeholder="Show me the research on..."
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500"
                />
              </div>
            </div>

            {/* Right Menu */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setLoginModalOpen(true)}
                className="hidden md:block text-[13px] hover:underline"
              >
                Log in
              </button>
              <button 
                onClick={() => setSubscribeModalOpen(true)}
                className="hidden md:block bg-black text-white px-5 py-2 text-[13px] font-bold rounded hover:bg-gray-900 transition-colors"
              >
                Subscribe
              </button>
              <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-b border-gray-100 relative z-[200]">
        <div className="max-w-[1280px] mx-auto px-5">
          <ul className="hidden md:flex items-center justify-start gap-7 py-2.5">
            {menuCategories.map((category) => (
              <li
                key={category.slug}
                className="relative"
                onMouseEnter={() => {
                  setActiveMenu(category.slug)
                  setActiveSubcategory(0)
                }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={`/category/${category.slug}`}
                  className="text-[13px] font-bold hover:underline whitespace-nowrap py-2 block"
                >
                  {category.name}
                </Link>

                {/* Dropdown Menu */}
                {activeMenu === category.slug && category.subcategories.length > 0 && (
                  <div className="absolute top-full left-0 z-[999] min-w-[900px] pt-2 -mt-2">
                    <div className="bg-white shadow-xl border border-gray-200 slide-down">
                      <div className="flex">
                      {/* Left Sidebar - Categories */}
                      <div className="w-[280px] bg-gray-50 border-r border-gray-200 py-4">
                        <ul className="space-y-0.5">
                          {category.subcategories.map((sub, idx) => (
                            <li key={idx}>
                              <button
                                onMouseEnter={() => setActiveSubcategory(idx)}
                                className={`block w-full text-left px-6 py-2.5 text-[13px] font-bold transition-colors ${
                                  activeSubcategory === idx ? 'bg-white' : 'hover:bg-white'
                                }`}
                              >
                                {sub.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Right Content - Items in Groups */}
                      <div className="flex-1 py-5 px-7">
                        {category.subcategories[activeSubcategory]?.groups && category.subcategories[activeSubcategory].groups.length > 0 && (
                          <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                            {category.subcategories[activeSubcategory].groups.map((group, groupIdx) => (
                              <div key={groupIdx}>
                                <h3 className="font-bold text-[13px] mb-2.5 underline">
                                  {group.title}
                                </h3>
                                {group.items && group.items.length > 0 && (
                                  <ul className="space-y-1.5">
                                    {group.items.map((item, itemIdx) => (
                                      <li key={itemIdx}>
                                        <Link
                                          to={`/category/${item.slug}`}
                                          className="text-[13px] hover:underline block text-gray-700 hover:text-black transition-colors"
                                        >
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {menuCategories.map((category) => (
                <div key={category.slug} className="mb-3">
                  <Link
                    to={`/category/${category.slug}`}
                    className="block font-semibold py-2 hover:underline"
                  >
                    {category.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Modals */}
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
      <SubscribeModal isOpen={subscribeModalOpen} onClose={() => setSubscribeModalOpen(false)} />
    </header>
  )
}

export default Header
