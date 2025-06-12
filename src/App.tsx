import React from 'react';
import Navigation from './components/Navigation';
import Section from './components/Section';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Section id="home" title="Minimalist Fashion" background="dark">
        <div className="relative">
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-light max-w-3xl mx-auto leading-relaxed">
            Discover the art of simplicity with Arsenic's carefully curated collection. 
            Where less becomes more, and every piece tells a story of refined elegance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-700 hover:scale-105">
              <h3 className="text-lg font-light mb-4 tracking-wide">Timeless Design</h3>
              <p className="opacity-80 text-sm leading-relaxed">Pieces that transcend seasons and trends, crafted for the modern minimalist.</p>
            </div>
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-700 hover:scale-105">
              <h3 className="text-lg font-light mb-4 tracking-wide">Premium Quality</h3>
              <p className="opacity-80 text-sm leading-relaxed">Ethically sourced materials and meticulous craftsmanship in every garment.</p>
            </div>
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-700 hover:scale-105">
              <h3 className="text-lg font-light mb-4 tracking-wide">Conscious Fashion</h3>
              <p className="opacity-80 text-sm leading-relaxed">Sustainable practices that honor both style and environmental responsibility.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="Our Philosophy" background="light">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-12 text-lg font-light leading-relaxed">
            At Arsenic, we believe that true style lies in the power of restraint. Our philosophy 
            centers on creating garments that speak through their silence, where every cut, every 
            fabric choice, and every detail serves a purpose beyond mere decoration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-16">
            <div className="group">
              <div className="h-64 mb-6 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Craftsmanship - Hands working on fabric"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-light mb-4 text-black tracking-wide">Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed">Every piece is thoughtfully constructed by skilled artisans who understand the beauty of precision.</p>
            </div>
            <div className="group">
              <div className="h-64 mb-6 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg" 
                  alt="Sustainability - Organic cotton and natural materials"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-light mb-4 text-black tracking-wide">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">We're committed to responsible fashion that respects both people and planet.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Collection Section */}
      <Section id="collection" title="Latest Collection" background="soft">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { 
              name: 'Essential Tee', 
              price: '₹3,200', 
              category: 'Basics',
              image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
            { 
              name: 'Minimal Blazer', 
              price: '₹12,800', 
              category: 'Outerwear',
              image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
            { 
              name: 'Soft Knit', 
              price: '₹6,000', 
              category: 'Knitwear',
              image: 'https://images.pexels.com/photos/7679471/pexels-photo-7679471.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
            { 
              name: 'Classic Trousers', 
              price: '₹8,500', 
              category: 'Bottoms',
              image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
            { 
              name: 'Linen Shirt', 
              price: '₹6,800', 
              category: 'Shirts',
              image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=600'
            },
            { 
              name: 'Wool Coat', 
              price: '₹18,000', 
              category: 'Outerwear',
              image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] mb-4 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1 tracking-wider uppercase">{item.category}</p>
                <h4 className="font-light text-black mb-2 tracking-wide">{item.name}</h4>
                <p className="text-gray-600 font-light">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Shop Section */}
      <Section id="shop" title="Experience Arsenic" background="cream">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-16 text-gray-700 font-light leading-relaxed">
            Visit our carefully curated spaces where you can touch, feel, and experience 
            the quality that defines Arsenic. Each location reflects our commitment to 
            minimalist beauty and conscious consumption.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center group">
              <div className="h-48 mb-6 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Flagship Store Interior"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
              <h3 className="text-lg font-light mb-3 text-black tracking-wide">Flagship Store</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                123 Fashion Street<br />
                Mumbai, MH 400001<br />
                Mon-Sat 10AM-8PM
              </p>
            </div>
            <div className="text-center group">
              <div className="h-48 mb-6 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Online Shopping Experience"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
              <h3 className="text-lg font-light mb-3 text-black tracking-wide">Online Studio</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Shop our complete collection<br />
                Free shipping across India<br />
                30-day returns
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Connect With Us" background="dark">
        <div className="max-w-2xl mx-auto">
          <p className="text-xl mb-16 opacity-90 font-light leading-relaxed">
            We'd love to hear from you. Whether you have questions about our pieces, 
            need styling advice, or want to learn more about our philosophy.
          </p>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/80 transition-all duration-500 font-light"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/80 transition-all duration-500 font-light"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/80 transition-all duration-500 resize-none font-light"
              />
              <button
                type="submit"
                className="w-full bg-transparent border border-white/30 text-white font-light py-4 tracking-wider hover:bg-white hover:text-black transition-all duration-500 uppercase text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;