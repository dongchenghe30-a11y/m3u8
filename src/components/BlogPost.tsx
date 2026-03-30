import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'

interface BlogPostProps {
  slug: string
  onBack: () => void
}

export function BlogPost({ slug, onBack }: BlogPostProps) {
  const { t } = useTranslation()
  
  const content = t(`blog.posts.${slug}`, { returnObjects: true }) as {
    title: string
    content: string[]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 h-14 bg-white border-b border-gray-200 flex items-center">
        <div className="max-w-3xl mx-auto w-full px-4 flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold text-gray-900">{t('blog.allArticles')}</span>
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <article className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {content.title}
          </h1>
          
          <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
            {content.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}
