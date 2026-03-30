import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Download, Loader2, CheckCircle, AlertCircle, FileDown } from 'lucide-react'

export function Converter() {
  const { t } = useTranslation()
  const [url, setUrl] = useState('')
  const [filename, setFilename] = useState('')
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState('')
  const [videoData, setVideoData] = useState<{ blob: Blob; url: string } | null>(null)

  const abortRef = useRef(false)

  const handleConvert = async () => {
    if (!url.trim()) {
      setError(t('player.invalidUrl'))
      return
    }

    setError('')
    setIsConverting(true)
    setProgress(0)
    setIsComplete(false)
    abortRef.current = false

    try {
      for (let i = 0; i <= 100; i += 5) {
        if (abortRef.current) return
        await new Promise(r => setTimeout(r, 200))
        setProgress(i)
      }

      const response = await fetch(url)
      const blob = await response.blob()
      
      setVideoData({
        blob,
        url: URL.createObjectURL(blob)
      })
      setIsComplete(true)
    } catch (err) {
      setError(t('converter.error'))
    } finally {
      setIsConverting(false)
    }
  }

  const handleDownload = () => {
    if (!videoData) return
    
    const a = document.createElement('a')
    a.href = videoData.url
    a.download = filename || 'video.mp4'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  useEffect(() => {
    return () => {
      abortRef.current = true
      if (videoData?.url) {
        URL.revokeObjectURL(videoData.url)
      }
    }
  }, [])

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
        <FileDown className="w-5 h-5 text-emerald-500" />
        <h2 className="font-semibold text-gray-900">{t('converter.title')}</h2>
      </div>
      
      <div className="p-4 space-y-4">
        <div>
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value)
              setError('')
              setIsComplete(false)
            }}
            placeholder={t('converter.placeholder')}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder={t('converter.filename')}
          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
        />

        {error && (
          <div className="flex items-center gap-1.5 text-red-500 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}

        {!isComplete ? (
          <button
            onClick={handleConvert}
            disabled={isConverting}
            className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {isConverting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {t('converter.converting')}
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                {t('converter.convert')}
              </>
            )}
          </button>
        ) : (
          <button
            onClick={handleDownload}
            className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            {t('converter.download')}
          </button>
        )}

        {isConverting && (
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{t('converter.progress')}</span>
              <span className="text-emerald-600 font-medium">{progress}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {isComplete && (
          <div className="flex items-center justify-center gap-1.5 text-emerald-600 text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>{t('converter.complete')}</span>
          </div>
        )}
      </div>
    </div>
  )
}
