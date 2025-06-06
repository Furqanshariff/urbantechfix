import { MessageCircle, Phone, CheckCircle, Star, Wrench, Truck, Shield, DollarSign, MapPin, Clock, Award } from 'lucide-react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/918660618676?text=Hi! I need help with my device repair.', '_blank');
  };

  const whyChooseUsFeatures = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Doorstep Diagnosis in Bangalore",
      description: "Expert technicians come to your location for quick diagnosis and repair across all areas of Bangalore."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Transparent Pricing",
      description: "Clear breakdown of parts and labor costs. No hidden charges, just honest pricing you can trust."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Certified Technicians",
      description: "Our team of qualified professionals ensures quality repairs with industry-standard practices."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Refurbished Devices with Warranty",
      description: "Certified refurbished laptops and smartphones with 3-6 months warranty at affordable rates."
    }
  ];

  const howItWorksSteps = [
    {
      step: "01",
      title: "Book a Visit on WhatsApp",
      description: "Simply message us on WhatsApp with your device issue. We'll schedule a convenient time for you.",
      icon: <MessageCircle className="w-12 h-12 text-blue-600" />
    },
    {
      step: "02", 
      title: "Technician Arrives & Diagnoses",
      description: "Our certified technician visits your location and thoroughly diagnoses the problem with your device.",
      icon: <Wrench className="w-12 h-12 text-blue-600" />
    },
    {
      step: "03",
      title: "Transparent Quote Shared",
      description: "You receive a detailed quote breaking down parts and labor costs before any work begins.",
      icon: <DollarSign className="w-12 h-12 text-blue-600" />
    },
    {
      step: "04",
      title: "Device Fixed & Delivered",
      description: "After your approval, we fix your device and deliver it back to you in perfect working condition.",
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Koramangala, Bangalore",
      text: "Amazing service! They came to my office, fixed my laptop screen in 2 hours, and the pricing was exactly what they quoted. No surprises!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Rajesh Kumar",
      location: "Whitefield, Bangalore",
      text: "Bought a refurbished MacBook from them with 6 months warranty. Working perfectly for 4 months now. Great quality at unbeatable price!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Anita Reddy",
      location: "Indiranagar, Bangalore",
      text: "My phone stopped working suddenly. Their technician diagnosed the issue at my home and fixed it the same day. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Priya Sharma",
      location: "Koramangala, Bangalore",
      text: "Amazing service! They came to my office, fixed my laptop screen in 2 hours, and the pricing was exactly what they quoted. No surprises!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Rajesh Kumar",
      location: "Whitefield, Bangalore",
      text: "Bought a refurbished MacBook from them with 6 months warranty. Working perfectly for 4 months now. Great quality at unbeatable price!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Anita Reddy",
      location: "Indiranagar, Bangalore",
      text: "My phone stopped working suddenly. Their technician diagnosed the issue at my home and fixed it the same day. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  // Function to get random background color for avatar
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-200 text-blue-800',
      'bg-green-200 text-green-800',
      'bg-purple-200 text-purple-800',
      'bg-pink-200 text-pink-800',
      'bg-indigo-200 text-indigo-800',
      'bg-teal-200 text-teal-800'
    ];
    // Use the name to consistently get the same color for the same person
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  // Function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            FIXING YOUR
            <br />
            <span className="text-blue-400">TECH LIFE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover Our Cutting Edge
            <br />
            Doorstep Repair Technology
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Repair Now
            </button>
            <a
              href="tel:+918660618676"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Call Expert
            </a>
          </div>
        </div>
      </section>

      {/* New Section - Doorstep Repairs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Doorstep
                <br />
                Repairs. <span className="text-blue-600">Honest Pricing.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                You Just Chill.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Bangalore's trusted tech repair service. We bring expert laptop and mobile repairs right to your door with transparent pricing and quality you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Book on WhatsApp</span>
                </button>
                <a
                  href="tel:+918660618676"
                  className="flex items-center justify-center space-x-3 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600"
                alt="Person using laptop for tech repair"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              {/* 500+ Happy Customers Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-full px-6 py-3 shadow-lg flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-900 font-semibold">500+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose UrbanTechFix?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another repair service. We're your trusted local tech partners in Bangalore.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent process to get your device fixed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{step.step}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bangalore Focus Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Proudly Serving All of Bangalore
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Born and raised in Bangalore, we understand the city's tech needs. From Koramangala startups 
                to Whitefield IT parks, we're your local tech help you can trust.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Same-day service across Bangalore</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Local team with quick response times</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 font-bold" />
                  <span className="text-gray-700 font-bold text-green-600">Trusted by 500+ Bangalore customers</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600"
                alt="Tech repair in Bangalore"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from real Bangalore customers
            </p>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`flex space-x-6 transition-transform duration-1000 ${isHovered ? 'pause' : 'animate-scroll'}`}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-none w-[350px] bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${getAvatarColor(testimonial.name)}`}>
                      {getInitials(testimonial.name)}
                    </div>
                    <div className="text-left ml-4">
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Device Fixed?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers across Bangalore. Quick, honest, and reliable tech repair service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book on WhatsApp</span>
            </button>
            <a
              href="tel:+918660618676"
              className="flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center space-x-2"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline-block">Chat with us</span>
      </button>

      <Footer />
    </div>
  );
};

export default HomePage;
