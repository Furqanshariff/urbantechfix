import { Shield, Star, CheckCircle, Filter, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const RefurbishedPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');

  const handleWhatsApp = (deviceName: string) => {
    window.open(`https://wa.me/918660618676?text=Hi! I'm interested in the ${deviceName}. Can you provide more details?`, '_blank');
  };

  const devices = [
    {
      id: 1,
      name: "MacBook Air M1 (2020)",
      category: "laptop",
      brand: "apple",
      price: "₹45,000",
      originalPrice: "₹62,000",
      warranty: "6 months",
      condition: "Excellent",
      specs: ["8GB RAM", "256GB SSD", "13.3\" Display"],
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 2,
      name: "iPhone 12 (128GB)",
      category: "phone",
      brand: "apple",
      price: "₹32,000",
      originalPrice: "₹45,000",
      warranty: "4 months",
      condition: "Very Good",
      specs: ["128GB Storage", "6.1\" Display", "12MP Camera"],
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 3,
      name: "Dell XPS 13",
      category: "laptop",
      brand: "dell",
      price: "₹38,000",
      originalPrice: "₹55,000",
      warranty: "5 months",
      condition: "Good",
      specs: ["16GB RAM", "512GB SSD", "13.3\" FHD Display"],
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 4,
      name: "Samsung Galaxy S21",
      category: "phone",
      brand: "samsung",
      price: "₹28,000",
      originalPrice: "₹42,000",
      warranty: "4 months",
      condition: "Very Good",
      specs: ["128GB Storage", "6.2\" Display", "64MP Camera"],
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 5,
      name: "ThinkPad X1 Carbon",
      category: "laptop",
      brand: "lenovo",
      price: "₹42,000",
      originalPrice: "₹65,000",
      warranty: "6 months",
      condition: "Excellent",
      specs: ["16GB RAM", "512GB SSD", "14\" FHD Display"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 6,
      name: "OnePlus 9 Pro",
      category: "phone",
      brand: "oneplus",
      price: "₹35,000",
      originalPrice: "₹50,000",
      warranty: "5 months",
      condition: "Very Good",
      specs: ["256GB Storage", "6.7\" Display", "48MP Camera"],
      image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=400&h=300"
    }
  ];

  const filteredDevices = devices.filter(device => {
    const categoryMatch = selectedCategory === 'all' || device.category === selectedCategory;
    const brandMatch = selectedBrand === 'all' || device.brand === selectedBrand;
    return categoryMatch && brandMatch;
  });

  const categories = [
    { value: 'all', label: 'All Devices' },
    { value: 'laptop', label: 'Laptops' },
    { value: 'phone', label: 'Phones' }
  ];

  const brands = [
    { value: 'all', label: 'All Brands' },
    { value: 'apple', label: 'Apple' },
    { value: 'samsung', label: 'Samsung' },
    { value: 'dell', label: 'Dell' },
    { value: 'lenovo', label: 'Lenovo' },
    { value: 'oneplus', label: 'OnePlus' }
  ];

  const qualityFeatures = [
    "Thorough hardware testing",
    "Software optimization",
    "Professional cleaning",
    "Battery health verification",
    "Cosmetic grading",
    "Performance benchmarking"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certified <span className="text-blue-600">Refurbished Devices</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Premium quality refurbished laptops and smartphones with warranty. 
              Each device is thoroughly tested and comes with our quality guarantee.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">3-6 Months Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Quality Tested</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Best Prices in Bangalore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Quality Process
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every device goes through our comprehensive refurbishment process to ensure 
                you get the best quality at unbeatable prices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600"
                alt="Quality testing process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by:</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Brand:</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {brands.map(brand => (
                  <option key={brand.value} value={brand.value}>
                    {brand.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-sm text-gray-600">
              Showing {filteredDevices.length} devices
            </div>
          </div>
        </div>
      </section>

      {/* Devices Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDevices.map((device) => (
              <div key={device.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={device.image}
                  alt={device.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{device.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      device.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
                      device.condition === 'Very Good' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {device.condition}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-2xl font-bold text-gray-900">{device.price}</span>
                    <span className="text-lg text-gray-500 line-through">{device.originalPrice}</span>
                  </div>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span>{device.warranty} warranty</span>
                    </div>
                  </div>

                  <div className="space-y-1 mb-4">
                    {device.specs.map((spec, index) => (
                      <div key={index} className="text-sm text-gray-600">
                        • {spec}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleWhatsApp(device.name)}
                    className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp to Enquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We get new devices regularly! Tell us what you need and we'll find it for you at the best price in Bangalore.
          </p>
          <button
            onClick={() => handleWhatsApp("custom device request")}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Specific Device
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefurbishedPage;
