import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Youtube, 
  Instagram, 
  Facebook, 
  Linkedin 
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const socialLinks = [
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@ekpahal2024?si=YHfV0qPXULFDna3J',
      color: 'text-red-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/avsarsocialfoundation',
      color: 'text-pink-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/avsarsocialfoundationofficial',
      color: 'text-blue-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/avsar-social-foundation',
      color: 'text-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, ideas, or want to collaborate? We'd love to hear from you. 
            Reach out and let's work together to create positive change.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-gradient">
              Contact Information
            </h3>
            
            <div className="space-y-8">
              {/* Location */}
              <Card className="border-0 shadow-soft card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
                      <p className="text-muted-foreground mb-3">
                        We're always happy to meet with supporters, volunteers, and community members.
                      </p>
                      <Button 
                        variant="outline"
                        onClick={() => window.open('https://maps.app.goo.gl/qd5biZT1qssTjPop9', '_blank')}
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        View Location
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Contact */}
              <Card className="border-0 shadow-soft card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">WhatsApp</h4>
                      <p className="text-muted-foreground mb-3">
                        Get in touch with us directly via WhatsApp for quick responses.
                      </p>
                      <Button 
                        variant="outline"
                        onClick={() => window.open('https://wa.me/p/8892970007457009/918959444059', '_blank')}
                        className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                      >
                        Message on WhatsApp
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl text-gradient">
                    Follow & Support Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Stay updated with our latest programs, success stories, and ways to get involved.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        onClick={() => window.open(social.url, '_blank')}
                        className="flex items-center justify-center gap-2 p-4 h-auto hover:shadow-soft transition-all duration-300"
                      >
                        <social.icon className={`w-5 h-5 ${social.color}`} />
                        <span className="text-sm font-medium">{social.name}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="shadow-orange border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient text-center">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject *</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="What would you like to discuss?"
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us more about your inquiry, ideas, or how you'd like to get involved..."
                      required
                      className="border-border focus:ring-primary min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full py-3 text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <div className="mt-6 text-center">
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 inline mr-2" />
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-orange-soft rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Let's Create Change Together
            </h3>
            <p className="text-muted-foreground text-lg">
              Whether you're interested in volunteering, have program suggestions, 
              or want to partner with us, we welcome every idea and collaboration 
              that can help us take this mission further.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;