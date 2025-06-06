import { Heart, Users, Award, Target, CheckCircle, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918660618676?text=Hi! I would like to know more about UrbanTechFix.', '_blank');
  };

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Honesty First",
      description: "We believe in transparent pricing and honest service. No hidden charges, no unnecessary repairs - just what your device needs."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Customer Focus",
      description: "Your convenience is our priority. We come to you, work around your schedule, and ensure you're satisfied with every service."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance",
      description: "Every repair is done with precision and care. We use genuine parts and provide warranty on our services."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Local Expertise",
      description: "Born and raised in Bangalore, we understand the city's tech needs and provide personalized service to every customer."
    }
  ];

  const team = [
    {
      name: "Mohammad Shariff",
      role: "Founder & CEO",
      description: "Visionary tech founder with deep roots in entrepreneurship and innovation. With a decade of experience in solving real-world problems using technology, Mohammad is dedicated to transforming customer service and device repair with honesty, transparency, and speed.",
      image: "/md shariff photo.jpg"
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Founded in Bangalore",
      description: "Started with a vision to bring honest tech repair to Bangalore"
    },
    {
      year: "2023",
      title: "500+ Happy Customers",
      description: "Reached our first major milestone of satisfied customers"
    },
    {
      year: "2024",
      title: "Expanded Services",
      description: "Added refurbished devices and corporate services"
    },
    {
      year: "Now",
      title: "Growing Strong",
      description: "Continuing to serve Bangalore with quality and trust"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">UrbanTechFix</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're a Bangalore-based startup that believes technology should work for everyone. 
                Founded on the principles of honesty, quality, and convenience, we're here to fix 
                your devices with the care they deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat with Us</span>
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600"
                alt="UrbanTechFix team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
              <p>
                UrbanTechFix was born out of frustration with the tech repair industry in Bangalore. 
                As tech professionals ourselves, we experienced firsthand the pain of unclear pricing, 
                long wait times, and questionable repair quality.
              </p>
              <p>
                We decided to do things differently. Instead of waiting for customers to come to us, 
                we go to them. Instead of hiding costs, we show exactly what you're paying for. 
                Instead of rushing repairs, we take the time to do them right.
              </p>
              <p>
                Today, we're proud to serve hundreds of customers across Bangalore, from individual 
                professionals to startups and colleges. Our mission remains the same: honest, 
                convenient, and quality tech repair for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The visionary behind UrbanTechFix
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <img
                src={team[0].image}
                alt={team[0].name}
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{team[0].name}</h3>
              <p className="text-blue-600 font-medium mb-4">{team[0].role}</p>
              <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">{team[0].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Devices Repaired</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24hrs</div>
              <p className="text-gray-600">Average Repair Time</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9★</div>
              <p className="text-gray-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Bangalore Trusts Us
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We're not just another repair service. We're your neighbors, your local tech 
                support team, and your partners in keeping technology working smoothly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Transparent pricing with no hidden costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Doorstep service across all of Bangalore</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Quality repairs with warranty coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Local team with quick response times</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
              <p className="text-gray-300 mb-6">
                Join hundreds of satisfied customers who trust UrbanTechFix for their tech repair needs.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Start Your Repair Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
