import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interest: '',
    availability: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    toast({
      title: "Thank you for volunteering!",
      description: "We'll contact you soon with next steps.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      interest: '',
      availability: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const opportunities = [
    {
      icon: '📚',
      title: 'Education Volunteer',
      description: 'Help teach children basic subjects, assist with homework, and provide learning support.',
      commitment: '4-6 hours/week'
    },
    {
      icon: '🏥',
      title: 'Health Awareness',
      description: 'Conduct health and hygiene awareness sessions in communities.',
      commitment: '2-4 hours/week'
    },
    {
      icon: '💻',
      title: 'Skill Development',
      description: 'Train youth and women in vocational skills and digital literacy.',
      commitment: '3-5 hours/week'
    },
    {
      icon: '📱',
      title: 'Social Media & Marketing',
      description: 'Help spread awareness about our programs through digital platforms.',
      commitment: '2-3 hours/week'
    },
    {
      icon: '📊',
      title: 'Event Organization',
      description: 'Plan and coordinate community events, fundraisers, and awareness campaigns.',
      commitment: 'Flexible'
    },
    {
      icon: '📋',
      title: 'Administrative Support',
      description: 'Help with documentation, data entry, and program coordination.',
      commitment: '3-4 hours/week'
    }
  ];

  return (
    <section id="volunteer" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Join Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be the change you want to see. Join our team of dedicated volunteers 
            and help create lasting impact in communities across the region.
          </p>
        </div>

        {/* Volunteer Opportunities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={index} 
              className="card-hover animate-scale-in border-0 shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{opportunity.icon}</div>
                <CardTitle className="text-xl text-gradient">
                  {opportunity.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  {opportunity.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-secondary px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4" />
                  {opportunity.commitment}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Volunteer Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-orange border-0 animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gradient mb-4">
                Volunteer Application
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get in touch with you soon!
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address *</label>
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 9876543210"
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">City *</label>
                    <Input
                      value={formData.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      placeholder="Your city name"
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Area of Interest *</label>
                    <Select onValueChange={(value) => handleChange('interest', value)}>
                      <SelectTrigger className="border-border focus:ring-primary">
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Education Volunteer</SelectItem>
                        <SelectItem value="health">Health Awareness</SelectItem>
                        <SelectItem value="skills">Skill Development</SelectItem>
                        <SelectItem value="marketing">Social Media & Marketing</SelectItem>
                        <SelectItem value="events">Event Organization</SelectItem>
                        <SelectItem value="admin">Administrative Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Availability *</label>
                    <Select onValueChange={(value) => handleChange('availability', value)}>
                      <SelectTrigger className="border-border focus:ring-primary">
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                        <SelectItem value="evenings">Evenings Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Why do you want to volunteer?</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your motivation and how you'd like to contribute..."
                    className="border-border focus:ring-primary min-h-[100px]"
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" className="btn-hero px-12 py-3 text-lg">
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;