
import { Users, Search, Share, TreePine, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <TreePine className="h-12 w-12 text-green-600" />,
      title: t('buildYourTree'),
      description: t('buildTreeDesc')
    },
    {
      icon: <Search className="h-12 w-12 text-green-600" />,
      title: t('discoverAncestors'),
      description: t('discoverDesc')
    },
    {
      icon: <Share className="h-12 w-12 text-green-600" />,
      title: t('shareCollaborate'),
      description: t('shareDesc')
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: t('sarahTestimonial'),
      rating: 5
    },
    {
      name: "Michael Chen",
      text: t('michaelTestimonial'),
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      text: t('emmaTestimonial'),
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('discoverFamily')}
              <span className="text-green-600"> {t('familyStory')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('homeSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                  {t('startBuildingFree')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-green-200 text-green-700 hover:bg-green-50 text-lg px-8 py-3">
                {t('learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('everythingYouNeed')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('powerfulTools')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-lg border border-green-100 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-green-100">{t('familyTreesCreated')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-green-100">{t('historicalRecords')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-green-100">{t('activeUsers')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-green-100">{t('countriesSupported')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whatUsersSay')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('usersSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('readyToStart')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('readySubtitle')}
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              {t('getStartedFree')}
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;