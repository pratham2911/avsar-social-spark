import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, QrCode, CreditCard, Heart } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState('');

  const donationAmounts = [
    { amount: 500, impact: 'Provides books and stationery for 1 child for a month' },
    { amount: 1000, impact: 'Supports educational materials for 2 children' },
    { amount: 2500, impact: 'Funds a health awareness program for a community' },
    { amount: 5000, impact: 'Sponsors skill development training for 5 youth' },
    { amount: 10000, impact: 'Supports complete education for 1 child for a year' },
  ];

  const handleDonateNow = () => {
    // Open Razorpay donation link in new tab
    window.open('https://rzp.io/rzp/donate-avsarsocialfoundation', '_blank');
  };

  return (
    <section id="donate" className="py-20 bg-gradient-orange-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Make a Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your contribution, no matter how small, can transform lives and create 
            lasting impact in communities. Every donation brings us closer to our 
            vision of equal opportunities for all.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Donation Impact */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-gradient">
              Your Impact
            </h3>
            <div className="space-y-4">
              {donationAmounts.map((item, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-300 border-2 card-hover ${
                    selectedAmount === item.amount.toString() 
                      ? 'border-primary shadow-orange' 
                      : 'border-transparent shadow-soft'
                  }`}
                  onClick={() => setSelectedAmount(item.amount.toString())}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-gradient">
                        ₹{item.amount.toLocaleString()}
                      </span>
                      <Heart className={`w-6 h-6 ${
                        selectedAmount === item.amount.toString() 
                          ? 'text-primary' 
                          : 'text-muted-foreground'
                      }`} />
                    </div>
                    <p className="text-muted-foreground">
                      {item.impact}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Donation Methods */}
          <div className="animate-slide-up">
            <Card className="shadow-orange border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gradient mb-4">
                  Choose Your Donation Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Primary Donation Button */}
                <Button 
                  onClick={handleDonateNow}
                  className="btn-hero w-full py-6 text-lg"
                >
                  <CreditCard className="w-6 h-6 mr-3" />
                  Donate Securely via Razorpay
                  <ExternalLink className="w-5 h-5 ml-3" />
                </Button>

                <div className="text-center text-muted-foreground">
                  <p>or scan the QR code to donate</p>
                </div>

                {/* QR Code Info */}
                <Card className="border border-border">
                  <CardContent className="p-6 text-center">
                    <QrCode className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Scan QR code or visit our Instagram post for donation options
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => window.open('https://www.instagram.com/p/DELRjqIMj5D/?igsh=bG11dWFjNmwxb3l1', '_blank')}
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      View QR Code
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Trust Indicators */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Secure payment processing
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      100% of your donation goes to programs
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Transparent use of funds
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      Regular updates on impact
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Ways to Help */}
            <Card className="mt-8 border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl text-gradient text-center">
                  Other Ways to Help
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Can't donate right now? You can still make a difference:
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">📢 Share our mission with friends and family</p>
                    <p className="text-sm">🤝 Volunteer your time and skills</p>
                    <p className="text-sm">📱 Follow us on social media</p>
                    <p className="text-sm">💡 Suggest ideas for programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-background rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Thank You for Your Support! 🙏
            </h3>
            <p className="text-muted-foreground">
              Every contribution brings hope to children and families in need. 
              Together, we're building a brighter future where education and 
              opportunities reach everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
