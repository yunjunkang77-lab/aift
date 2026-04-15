'use client'

import { Share2 } from "lucide-react"

export default function ShareButton() {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('게시글 주소가 복사되었습니다!')
  }

  return (
    <button 
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-600 rounded-xl transition-all border border-transparent hover:border-blue-100"
    >
      <Share2 className="w-4 h-4" />
      <span className="text-sm font-medium">공유</span>
    </button>
  )
}
