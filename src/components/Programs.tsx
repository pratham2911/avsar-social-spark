import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Heart, Lightbulb, Award, Globe } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Free Education Program",
      description: "Providing quality education to underprivileged children with books, stationery, and personalized learning support.",
      impact: "500+ children educated",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Skill Development Training",
      description: "Empowering youth and women with vocational training and skills that enable them to become self-reliant.",
      impact: "200+ trained",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "Health & Hygiene Awareness",
      description: "Conducting health awareness programs, building healthier and more informed communities.",
      impact: "50+ sessions conducted",
      color: "text-red-600"
    },
    {
      icon: Lightbulb,
      title: "Government Scheme Awareness",
      description: "Helping families access government benefits and schemes they rightfully deserve.",
      impact: "100+ families helped",
      color: "text-yellow-600"
    },
    {
      icon: Award,
      title: "Character Development",
      description: "Nurturing creativity, character, and leadership skills alongside academic education.",
      impact: "Ongoing program",
      color: "text-purple-600"
    },
    {
      icon: Globe,
      title: "Community Empowerment",
      description: "Working at grassroots level to create sustainable impact and stronger communities.",
      impact: "8+ communities served",
      color: "text-indigo-600"
    }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We focus on comprehensive development through education, skill building, 
            health awareness, and community empowerment initiatives that create lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="card-hover animate-scale-in border-0 shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-orange-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <program.icon className={`w-8 h-8 ${program.color}`} />
                </div>
                <CardTitle className="text-xl text-gradient">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  {program.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-secondary px-3 py-1 rounded-full">
                  <Award className="w-4 h-4" />
                  {program.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SDG Alignment */}
        <div className="mt-20 text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-gradient">
            Aligned with UN Sustainable Development Goals
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-gradient-orange-soft rounded-xl p-6">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="font-semibold mb-2">SDG 4</h4>
              <p className="text-sm text-muted-foreground">Quality Education</p>
            </div>
            <div className="bg-gradient-orange-soft rounded-xl p-6">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="font-semibold mb-2">SDG 3</h4>
              <p className="text-sm text-muted-foreground">Good Health & Well-Being</p>
            </div>
            <div className="bg-gradient-orange-soft rounded-xl p-6">
              <div className="text-3xl mb-3">⚖️</div>
              <h4 className="font-semibold mb-2">SDG 10</h4>
              <p className="text-sm text-muted-foreground">Reduced Inequalities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;