import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with your family tree",
      features: [
        "Up to 50 family members",
        "Basic tree building tools",
        "Photo uploads",
        "Mobile app access",
        "Community support"
      ],
      limitations: [
        "Limited historical records access",
        "No collaboration features",
        "Basic export options"
      ],
      popular: false,
      cta: "Start Free"
    },
    {
      name: "Family",
      price: "$12.99",
      period: "per month",
      description: "Ideal for families actively building their tree",
      features: [
        "Unlimited family members",
        "Advanced tree building tools",
        "Photo & document storage",
        "Mobile app access",
        "Priority support",
        "Access to historical records",
        "Family collaboration",
        "Advanced search filters",
        "Export to multiple formats"
      ],
      limitations: [],
      popular: true,
      cta: "Start Family Plan"
    },
    {
      name: "Genealogist",
      price: "$24.99",
      period: "per month",
      description: "For serious researchers and genealogy professionals",
      features: [
        "Everything in Family plan",
        "Premium historical records",
        "DNA integration tools",
        "Advanced research hints",
        "Custom reports & charts",
        "API access",
        "Bulk import/export",
        "Professional templates",
        "White-label options"
      ],
      limitations: [],
      popular: false,
      cta: "Go Professional"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan for your family tree building journey. 
            All plans include our core features with different levels of access and support.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-green-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-green-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-2">/{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="flex items-start">
                              <X className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-500">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <Link to="/signup" className="block">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our pricing and features.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing adjustments.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial for paid plans?
              </h3>
              <p className="text-gray-600">
                All paid plans come with a 14-day free trial. You can cancel anytime during the trial 
                period without being charged.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. 
                All payments are processed securely.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I export my family tree data?
              </h3>
              <p className="text-gray-600">
                Yes! All plans include export functionality. Paid plans offer more export formats 
                including GEDCOM, PDF, and various image formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Building Your Family Tree?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of families who have discovered their heritage with our platform.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
