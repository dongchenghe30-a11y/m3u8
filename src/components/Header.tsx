import { useTranslation } from 'react-i18next'
import { Globe, FileText } from 'lucide-react'

type Page = 'home' | 'privacy' | 'terms' | 'blog' | 'blog-post'

interface HeaderProps {
  navigateTo: (page: Page) => void
}

export function Header({ navigateTo }: HeaderProps) {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <header className="sticky top-0 z-50 h-14 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#3b82f6" strokeWidth="2" fill="none" />
              <path d="M13 11L22 16L13 21V11Z" fill="#3b82f6" />
            </svg>
            <span className="text-lg font-semibold text-gray-900">
              {t('hero.title')}
            </span>
          </a>
          
          <button 
            onClick={() => navigateTo('blog')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>{t('nav.blog')}</span>
          </button>
        </div>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Globe className="w-4 h-4" />
          <span>{i18n.language === 'en' ? '中文' : 'EN'}</span>
        </button>
      </div>
    </header>
  )
}
