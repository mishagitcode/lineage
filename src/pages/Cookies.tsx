const Cookies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cookie Policy
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Learn about how we use cookies and similar technologies on our website.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 1, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                Lineage uses cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> These remember your preferences and personalize your experience</li>
                <li><strong>Marketing Cookies:</strong> These are used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are strictly necessary to provide you with services available through our website.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Authentication cookies to keep you logged in</li>
                  <li>Security cookies to protect against fraud</li>
                  <li>Session cookies to maintain your preferences during your visit</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-700 mb-2">
                  We use analytics cookies to understand how our website is being used.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Google Analytics to track website usage</li>
                  <li>Performance monitoring to identify and fix issues</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies track your online activity to help advertisers deliver more relevant advertising.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Social media cookies for sharing content</li>
                  <li>Advertising cookies to show relevant ads</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                Some cookies on our site are set by third-party services that appear on our pages. We use the following third-party services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Most browsers allow you to refuse cookies or delete certain cookies</li>
                <li>You can set your browser to notify you when cookies are being set</li>
                <li>You can opt out of analytics cookies through our cookie preference center</li>
                <li>Some advertising cookies can be managed through industry opt-out programs</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Please note that disabling certain cookies may impact the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                Email: privacy@lineage.com<br />
                Address: 123 Heritage Lane, Family City, FC 12345
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;