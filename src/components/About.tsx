import { useTranslation } from 'react-i18next'
import { Shield, FileText, ArrowRight } from 'lucide-react'

interface AboutProps {
  onNavigateToBlog?: () => void
}

export function About({ onNavigateToBlog }: AboutProps) {
  const { t } = useTranslation()

  return (
    <section className="py-10 px-4 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {t('about.title')}
        </h2>

        <div className="space-y-4">
          <p className="text-gray-600">
            {t('about.description')}
          </p>
          
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <Shield className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              {t('about.privacy')}
            </p>
          </div>

          <button 
            onClick={onNavigateToBlog}
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>{t('nav.blog')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
