import { CheckCircle, Clock, DollarSign, Users, Wrench, Truck, Shield, Smartphone, Laptop, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918660618676?text=Hi! I need help with my device repair.', '_blank');
  };

  const mainServices = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Doorstep Diagnosis",
      description: "Our expert technicians come to your location for quick and accurate diagnosis of your device issues.",
      features: [
        "Free initial diagnosis",
        "Same-day service availability",
        "Expert technicians with 5+ years experience",
        "Transparent quote before any repair"
      ]
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: "Pickup & Delivery",
      description: "Can't wait at home? We offer free pickup and delivery service for approved repairs.",
      features: [
        "Free pickup from your location",
        "Secure handling of your devices",
        "Real-time repair status updates",
        "Free delivery back to you"
      ]
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      title: "Transparent Pricing",
      description: "Clear breakdown of all costs with no hidden charges. You know exactly what you're paying for.",
      features: [
        "Separate parts and labor costs",
        "No hidden charges",
        "Competitive market rates",
        "Payment only after satisfaction"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Refurbished Devices",
      description: "Quality certified refurbished laptops and smartphones with warranty at affordable prices.",
      features: [
        "3-6 months warranty",
        "Thorough quality testing",
        "30-day return policy",
        "Best prices in Bangalore"
      ]
    }
  ];

  const deviceTypes = [
    {
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
      title: "Laptop Repair",
      issues: ["Screen replacement", "Keyboard repair", "Battery replacement", "Motherboard issues", "Software problems", "Data recovery"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Mobile Repair",
      issues: ["Screen replacement", "Battery replacement", "Camera issues", "Charging port repair", "Software troubleshooting", "Water damage"]
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Software Services",
      issues: ["OS installation", "Virus removal", "Data backup", "Software installation", "Performance optimization", "System upgrades"]
    }
  ];

  const corporateFeatures = [
    "Bulk repair discounts for offices",
    "Priority service for businesses",
    "Monthly maintenance contracts",
    "On-site IT support",
    "Dedicated account manager",
    "Same-day service guarantee"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive tech repair solutions designed for Bangalore's fast-paced lifestyle. 
              From doorstep diagnosis to certified refurbished devices, we've got you covered.
            </p>
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Started on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Types Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Repair
            </h2>
            <p className="text-xl text-gray-600">
              Expert repair services for all your tech devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deviceTypes.map((device, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  {device.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{device.title}</h3>
                </div>
                <div className="space-y-2">
                  {device.issues.map((issue, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent process from booking to repair
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Service</h3>
              <p className="text-gray-600">Contact us via WhatsApp or call to schedule your repair</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Diagnosis</h3>
              <p className="text-gray-600">Our technician visits and diagnoses the issue</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quote & Approval</h3>
              <p className="text-gray-600">Receive transparent quote and approve the repair</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Repair & Delivery</h3>
              <p className="text-gray-600">Quick repair and delivery back to your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Corporate & Bulk Services
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Special packages for Bangalore startups, colleges, and businesses. 
                Keep your team's devices running smoothly with our corporate repair services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {corporateFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Get Corporate Quote</h3>
              <p className="text-gray-300 mb-6">
                Contact us for customized pricing and service packages for your organization.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Contact for Corporate Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
