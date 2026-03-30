import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { VideoPlayer } from './components/VideoPlayer'
import { Converter } from './components/Converter'
import { About } from './components/About'
import { Privacy } from './components/Privacy'
import { Terms } from './components/Terms'
import { Blog } from './components/Blog'
import { BlogPost } from './components/BlogPost'

type Page = 'home' | 'privacy' | 'terms' | 'blog' | 'blog-post'

function App() {
  const [page, setPage] = useState<Page>('home')
  const [blogSlug, setBlogSlug] = useState<string>('')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash === 'privacy') {
      setPage('privacy')
    } else if (hash === 'terms') {
      setPage('terms')
    } else if (hash === 'blog') {
      setPage('blog')
    } else if (hash.startsWith('blog-')) {
      setPage('blog-post')
      setBlogSlug(hash.replace('blog-', ''))
    } else {
      setPage('home')
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '')
      if (newHash === 'privacy') {
        setPage('privacy')
      } else if (newHash === 'terms') {
        setPage('terms')
      } else if (newHash === 'blog') {
        setPage('blog')
      } else if (newHash.startsWith('blog-')) {
        setPage('blog-post')
        setBlogSlug(newHash.replace('blog-', ''))
      } else {
        setPage('home')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateTo = (targetPage: Page, slug?: string) => {
    setPage(targetPage)
    if (targetPage === 'blog') {
      window.location.hash = 'blog'
    } else if (targetPage === 'blog-post' && slug) {
      window.location.hash = `blog-${slug}`
    } else if (targetPage === 'home') {
      window.location.hash = ''
    } else if (targetPage !== 'blog-post') {
      window.location.hash = targetPage
    }
    window.scrollTo(0, 0)
  }

  const openBlogPost = (slug: string) => {
    setPage('blog-post')
    setBlogSlug(slug)
    window.location.hash = `blog-${slug}`
    window.scrollTo(0, 0)
  }

  const goHome = () => {
    setPage('home')
    window.location.hash = ''
    window.scrollTo(0, 0)
  }

  if (page === 'privacy') {
    return <Privacy />
  }

  if (page === 'terms') {
    return <Terms />
  }

  if (page === 'blog') {
    return <Blog onBack={goHome} />
  }

  if (page === 'blog-post') {
    return <BlogPost slug={blogSlug} onBack={() => navigateTo('blog')} />
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header navigateTo={navigateTo} />
      
      <main className="flex-1">
        <Hero />
        
        {/* Main Tools Section */}
        <section className="py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <VideoPlayer />
              <Converter />
            </div>
          </div>
        </section>
        
        <About onNavigateToBlog={() => navigateTo('blog')} />
      </main>
      
      <Footer navigateTo={navigateTo} />
    </div>
  )
}

export default App
