import { Heart, Youtube, Instagram, Facebook, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@ekpahal2024?si=YHfV0qPXULFDna3J',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/avsarsocialfoundation',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/avsarsocialfoundationofficial',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/avsar-social-foundation',
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Our Impact', href: '#impact' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-orange rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">AVSAR</h3>
                <p className="text-gray-300 text-sm">Social Foundation</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              A Vision for Social Awareness and Reform - Creating meaningful opportunities 
              through education, empowerment, and community development.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Working across communities in India</span>
            </div>
            
            <Button 
              onClick={() => window.open('https://maps.app.goo.gl/qd5biZT1qssTjPop9', '_blank')}
              variant="outline"
              className="border-white/20 text-white hover:bg-white hover:text-foreground"
            >
              Visit Us
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Connect With Us</h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => window.open(social.url, '_blank')}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>{social.name}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-8">
              <Button 
                onClick={() => window.open('https://rzp.io/rzp/donate-avsarsocialfoundation', '_blank')}
                className="btn-hero w-full"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              <p>© 2024 AVSAR Social Foundation. All rights reserved.</p>
              <p className="mt-1">Founder: Shivam Singh Rajawat</p>
            </div>
            
            <div className="text-gray-300 text-sm text-center md:text-right">
              <p className="mb-1">✨ Giving children hope, education & a brighter future</p>
              <p>Your support can change lives. Join us today! 💙</p>
            </div>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center mt-8 pt-4 border-t border-white/10">
          <p className="text-gray-400 text-xs">
            "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;