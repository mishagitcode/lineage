
import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('privacyPolicyTitle')}
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            {t('privacySubtitle')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('informationWeCollect')}</h2>
              <p className="text-gray-700 mb-4">
                {t('informationDesc')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('personalInfo')}</li>
                <li>{t('familyTreeData')}</li>
                <li>{t('profilePhotos')}</li>
                <li>{t('paymentInfo')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('howWeUse')}</h2>
              <p className="text-gray-700 mb-4">
                {t('howWeUseDesc')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('provideServices')}</li>
                <li>{t('processTransactions')}</li>
                <li>{t('sendNotices')}</li>
                <li>{t('communicate')}</li>
                <li>{t('improveServices')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('informationSharing')}</h2>
              <p className="text-gray-700 mb-4">
                {t('sharingDesc')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('withConsent')}</li>
                <li>{t('legalCompliance')}</li>
                <li>{t('protectRights')}</li>
                <li>{t('serviceProviders')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('dataSecurity')}</h2>
              <p className="text-gray-700 mb-4">
                {t('securityDesc')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('yourRights')}</h2>
              <p className="text-gray-700 mb-4">
                {t('yourRightsDesc')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('accessUpdate')}</li>
                <li>{t('deleteAccount')}</li>
                <li>{t('optOut')}</li>
                <li>{t('requestCopy')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contactUs')}</h2>
              <p className="text-gray-700">
                {t('privacyContact')}
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

export default Privacy;