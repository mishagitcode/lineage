
import { useLanguage } from '@/contexts/LanguageContext';

const Cookies = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('cookieTitle')}
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            {t('cookieSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>{t('lastUpdated')}</strong> January 1, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('whatAreCookies')}</h2>
              <p className="text-gray-700 mb-4">
                {t('cookiesDesc')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('howWeUseCookies')}</h2>
              <p className="text-gray-700 mb-4">
                {t('cookieUsageDesc')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>{t('essentialCookies')}</strong></li>
                <li><strong>{t('performanceCookies')}</strong></li>
                <li><strong>{t('functionalityCookies')}</strong></li>
                <li><strong>{t('marketingCookies')}</strong></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('typesOfCookies')}</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('essentialCookiesTitle')}</h3>
                <p className="text-gray-700 mb-2">
                  {t('essentialDesc')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>{t('authCookies')}</li>
                  <li>{t('securityCookies')}</li>
                  <li>{t('sessionCookies')}</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('analyticsCookiesTitle')}</h3>
                <p className="text-gray-700 mb-2">
                  {t('analyticsDesc')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>{t('googleAnalytics')}</li>
                  <li>{t('performanceMonitoring')}</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('marketingCookiesTitle')}</h3>
                <p className="text-gray-700 mb-2">
                  {t('marketingDesc')}
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>{t('socialCookies')}</li>
                  <li>{t('advertisingCookies')}</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('thirdPartyCookies')}</h2>
              <p className="text-gray-700 mb-4">
                {t('thirdPartyDesc')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>{t('googleAnalyticsService')}</strong></li>
                <li><strong>{t('socialMedia')}</strong></li>
                <li><strong>{t('paymentProcessors')}</strong></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('managingCookies')}</h2>
              <p className="text-gray-700 mb-4">
                {t('managingDesc')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('browserSettings')}</li>
                <li>{t('notifications')}</li>
                <li>{t('optOutAnalytics')}</li>
                <li>{t('industryOptOut')}</li>
              </ul>
              <p className="text-gray-700 mt-4">
                {t('disablingNote')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('updatesPolicy')}</h2>
              <p className="text-gray-700 mb-4">
                {t('updatesDesc')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contactUs')}</h2>
              <p className="text-gray-700">
                {t('cookieContact')}
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