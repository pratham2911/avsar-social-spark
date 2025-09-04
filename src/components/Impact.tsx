import { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, Award, Heart } from 'lucide-react';

const Impact = () => {
  const [counters, setCounters] = useState({
    children: 0,
    programs: 0,
    volunteers: 0,
    communities: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetValues = {
    children: 500,
    programs: 15,
    volunteers: 50,
    communities: 8
  };

  const impactData = [
    {
      icon: Users,
      label: "Children Educated",
      value: counters.children,
      suffix: "+",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      label: "Active Programs",
      value: counters.programs,
      suffix: "+",
      color: "text-accent"
    },
    {
      icon: Heart,
      label: "Volunteers",
      value: counters.volunteers,
      suffix: "+",
      color: "text-primary"
    },
    {
      icon: Award,
      label: "Communities Served",
      value: counters.communities,
      suffix: "+",
      color: "text-accent"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const intervals: NodeJS.Timeout[] = [];

    Object.entries(targetValues).forEach(([key, target]) => {
      const increment = target / (duration / 50);
      let current = 0;
      
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 50);
      
      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section id="impact" className="py-20 bg-gradient-orange-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Together, we're creating lasting change in communities across the region. 
            Every number represents a life touched, a dream nurtured, and hope restored.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <item.icon className={`w-10 h-10 ${item.color}`} />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient animate-counter">
                {item.value}{item.suffix}
              </div>
              <p className="text-lg font-medium text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background rounded-2xl p-8 shadow-soft card-hover animate-fade-in">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-3 text-gradient">
              Free Education Program
            </h3>
            <p className="text-muted-foreground">
              Providing quality education to underprivileged children, including books, 
              stationery, and personalized learning support.
            </p>
          </div>
          
          <div className="bg-background rounded-2xl p-8 shadow-soft card-hover animate-fade-in">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-3 text-gradient">
              Skill Development
            </h3>
            <p className="text-muted-foreground">
              Empowering youth and women with vocational training and skills that 
              enable them to become self-reliant and future-ready.
            </p>
          </div>
          
          <div className="bg-background rounded-2xl p-8 shadow-soft card-hover animate-fade-in">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold mb-3 text-gradient">
              Health Awareness
            </h3>
            <p className="text-muted-foreground">
              Conducting health and hygiene awareness programs, building healthier 
              and more informed communities across rural areas.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <h3 className="text-2xl font-bold mb-4 text-gradient">
            ✨ Avsar Social Foundation – Giving children hope, education & a brighter future.
          </h3>
          <p className="text-xl mb-6 text-muted-foreground">
            Your support can change lives. Join us today! 💙
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;