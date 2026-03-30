import { useTranslation } from 'react-i18next'

export function Terms() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 h-14 bg-white border-b border-gray-200 flex items-center">
        <div className="max-w-3xl mx-auto w-full px-4">
          <a href="/" className="text-lg font-semibold text-gray-900">← {t('terms.back')}</a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.title')}</h1>
        
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{t('terms.section1Title')}</h2>
            <p>{t('terms.section1Content')}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{t('terms.section2Title')}</h2>
            <p>{t('terms.section2Content')}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{t('terms.section3Title')}</h2>
            <p>{t('terms.section3Content')}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{t('terms.section4Title')}</h2>
            <p>{t('terms.section4Content')}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{t('terms.section5Title')}</h2>
            <p>{t('terms.section5Content')}</p>
          </section>

          <p className="text-sm text-gray-400 pt-4">{t('terms.lastUpdated')}</p>
        </div>
      </main>
    </div>
  )
}
