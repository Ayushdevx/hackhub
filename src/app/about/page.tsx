import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Award } from 'lucide-react';

const stats = [
  { number: '50,000+', label: 'Developers' },
  { number: '1,000+', label: 'Projects' },
  { number: '100+', label: 'Countries' },
  { number: '500+', label: 'Prizes Won' }
];

const values = [
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Community First',
    description: 'We believe in the power of collaboration and building together'
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Innovation',
    description: 'Pushing boundaries and creating solutions for tomorrow\'s challenges'
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Inclusivity',
    description: 'A welcoming space for developers of all backgrounds and skill levels'
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Excellence',
    description: 'Striving for quality in everything we do, from code to community'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-purple-400/30 text-purple-300">
            About HackHub
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Building the Future of
            <span className="block">Developer Communities</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            HackHub is more than just a platform—it's a movement. We're creating the world's most 
            innovative space where developers connect, collaborate, and compete to solve real-world challenges.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              To democratize innovation by providing developers with the tools, community, 
              and opportunities they need to create solutions that change the world.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the culture of our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 w-fit">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-200 transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12 border border-purple-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of a community that's shaping the future of technology. 
              Connect with like-minded developers and start building tomorrow, today.
            </p>
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
