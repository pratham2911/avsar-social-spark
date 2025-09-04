import { Heart, Users, Target, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Education First",
      description: "Believing education is the strongest tool for transformation and empowerment."
    },
    {
      icon: Users,
      title: "Equality & Inclusion",
      description: "Ensuring opportunities reach the most marginalized sections of society."
    },
    {
      icon: Heart,
      title: "Empathy & Humanity",
      description: "Serving with compassion, respect, and care for every life we touch."
    },
    {
      icon: Target,
      title: "Transparency & Integrity",
      description: "Building trust through honesty, accountability, and openness in all our actions."
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Avsar Social Foundation is committed to creating meaningful opportunities for 
              underprivileged children and communities by focusing on education, skill development, 
              health awareness, and social empowerment.
            </p>
          </div>
        </div>

        {/* Mission Points */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="space-y-6 animate-slide-up">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-lg">
                <strong>Provide free, quality education</strong> that nurtures knowledge, creativity, and character.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-lg">
                <strong>Equip youth and women</strong> with skills and training that enable them to become self-reliant and future-ready.
              </p>
            </div>
          </div>
          <div className="space-y-6 animate-slide-up">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-lg">
                <strong>Spread awareness</strong> on health, hygiene, and social issues, building healthier and more informed communities.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-lg">
                <strong>Bridge the gap</strong> between privilege and underprivilege by ensuring equal access to resources and opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            🤝 Core Values
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <Card key={index} className="card-hover animate-scale-in border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gradient">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Founder Message */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-center mb-8 text-muted-foreground italic">
              "Education is the most powerful weapon which you can use to change the world."
            </blockquote>
            <p className="text-center text-lg mb-8">— Nelson Mandela</p>
            
            <div className="space-y-6 text-lg">
              <p>
                Avsar Social Foundation represents my lifelong commitment to creating a society where 
                every child has access to education, every youth has opportunities to grow, and every 
                community can live with dignity.
              </p>
              <p>
                Leaving behind my service in the Border Security Force (BSF), I chose to dedicate myself 
                fully to this mission, guided by the belief that real change begins at the grassroots.
              </p>
              <p>
                Through Avsar, we aim to align our efforts with the Sustainable Development Goals (SDGs), 
                particularly SDG 4 (Quality Education), SDG 3 (Good Health & Well-Being), and SDG 10 
                (Reduced Inequalities).
              </p>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg font-semibold">— Shivam Singh Rajawat</p>
              <p className="text-muted-foreground">Founder, Avsar Social Foundation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;