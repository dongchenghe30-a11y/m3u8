import { useTranslation } from 'react-i18next'

type Page = 'home' | 'privacy' | 'terms' | 'blog' | 'blog-post'

interface FooterProps {
  navigateTo: (page: Page) => void
}

export function Footer({ navigateTo }: FooterProps) {
  const { t } = useTranslation()

  return (
    <footer className="mt-auto py-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>{t('footer.copyright')}</span>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigateTo('blog')} 
              className="hover:text-gray-900 transition-colors"
            >
              {t('footer.blog')}
            </button>
            <button 
              onClick={() => navigateTo('privacy')} 
              className="hover:text-gray-900 transition-colors"
            >
              {t('footer.privacy')}
            </button>
            <button 
              onClick={() => navigateTo('terms')} 
              className="hover:text-gray-900 transition-colors"
            >
              {t('footer.terms')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
