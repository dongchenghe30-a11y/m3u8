import { useTranslation } from 'react-i18next'
import { ArrowLeft, FileText } from 'lucide-react'

interface BlogProps {
  onBack: () => void
}

export function Blog({ onBack }: BlogProps) {
  const { t } = useTranslation()

  const articles = t('blog.articles', { returnObjects: true }) as Array<{
    slug: string
    title: string
    excerpt: string
  }>

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 h-14 bg-white border-b border-gray-200 flex items-center">
        <div className="max-w-3xl mx-auto w-full px-4 flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold text-gray-900">{t('blog.back')}</span>
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('blog.title')}</h1>
          <p className="text-gray-500">{t('blog.subtitle')}</p>
        </div>
        
        <div className="space-y-4">
          {articles.map((article, index) => (
            <a 
              key={index}
              href={`#blog-${article.slug}`}
              className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
