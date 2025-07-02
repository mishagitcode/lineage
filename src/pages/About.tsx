import { Users, Heart, Target, Award } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Genealogy enthusiast with 15+ years of experience helping families discover their heritage.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Former software architect at major tech companies, passionate about making complex data accessible.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Johnson",
      role: "Head of Research",
      bio: "Professional historian specializing in genealogical research and historical record analysis.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Family First",
      description: "We believe every family story deserves to be told and preserved for future generations."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community Driven",
      description: "Our platform is built by genealogists, for genealogists, with input from our amazing community."
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Accuracy & Trust",
      description: "We're committed to providing accurate, verified information and protecting your family data."
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Innovation",
      description: "We continuously innovate to make family tree building easier and more accessible for everyone."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission: Connecting Families
              <span className="text-green-600"> Across Generations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about helping people discover their family history and preserve their heritage. 
              Our platform makes genealogy research accessible, collaborative, and meaningful for families worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  FamilyTree was born from a simple yet powerful idea: everyone deserves to know their family story. 
                  Founded in 2020 by genealogy enthusiast Sarah Chen, our platform started as a personal project 
                  to help her own family trace their roots.
                </p>
                <p>
                  What began as a small family project quickly grew into something much larger. As Sarah shared her 
                  tools with friends and fellow researchers, the demand for an intuitive, powerful genealogy platform 
                  became clear. Today, we serve over one million users worldwide.
                </p>
                <p>
                  Our team combines deep expertise in genealogy, technology, and user experience design to create 
                  tools that make family history research both powerful and accessible. We're proud to be helping 
                  families reconnect with their heritage every day.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and help us build the best possible experience for our users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our passionate team combines expertise in genealogy, technology, and user experience 
              to create the best family tree building platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Since our founding, we've helped millions of people discover their family heritage and connect with their roots.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-green-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-green-100">Family Trees</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-green-100">Family Connections</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-green-100">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions about our platform or want to share your family tree success story? 
            We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@familytree.com"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Join Our Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;