import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="py-8 px-4 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-500 mb-2">
          {t('hero.badge')}
        </p>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('hero.subtitle')}
        </h1>
      </div>
    </section>
  )
}
