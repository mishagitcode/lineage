
import { useLanguage } from '@/contexts/LanguageContext';

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('termsTitle')}
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            {t('termsSubtitle')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('acceptanceTerms')}</h2>
              <p className="text-gray-700 mb-4">
                {t('acceptanceDesc')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('useLicense')}</h2>
              <p className="text-gray-700 mb-4">
                {t('licenseDesc')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('modifyMaterials')}</li>
                <li>{t('commercialUse')}</li>
                <li>{t('reverseEngineer')}</li>
                <li>{t('removeNotices')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('userAccounts')}</h2>
              <p className="text-gray-700 mb-4">
                {t('accountsDesc')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('userContent')}</h2>
              <p className="text-gray-700 mb-4">
                {t('contentDesc')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('paymentTerms')}</h2>
              <p className="text-gray-700 mb-4">
                {t('paymentDesc')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('prohibitedUses')}</h2>
              <p className="text-gray-700 mb-4">
                {t('prohibitedDesc')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('unlawfulPurpose')}</li>
                <li>{t('violateRegulations')}</li>
                <li>{t('infringeRights')}</li>
                <li>{t('harass')}</li>
                <li>{t('falseInfo')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('disclaimer')}</h2>
              <p className="text-gray-700 mb-4">
                {t('disclaimerDesc')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('limitations')}</h2>
              <p className="text-gray-700 mb-4">
                {t('limitationsDesc')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contactInfo')}</h2>
              <p className="text-gray-700">
                {t('termsContact')}
              </p>
              <p className="text-gray-700 mt-2">
                Email: legal@lineage.com<br />
                Address: 123 Heritage Lane, Family City, FC 12345
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;