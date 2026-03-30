export function AdPlaceholder() {
  return (
    <div className="py-3 px-4 bg-gray-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-center min-h-[60px]">
          <span className="text-gray-400 text-xs">{process.env.AD_LABEL || 'Advertisement'}</span>
        </div>
      </div>
    </div>
  )
}
