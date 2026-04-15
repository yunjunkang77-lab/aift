import { getPosts, createPost } from "./actions"
import Link from "next/link"
import { MessageSquare, Eye } from "lucide-react"

export default async function Home() {
  const posts = await getPosts()

  async function handleSubmit(formData: FormData) {
    'use server'
    const content = formData.get('content') as string
    await createPost(content)
  }

  return (
    <div className="space-y-8">
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="font-semibold text-lg mb-4">대나무숲에 글 남기기</h2>
        <form action={handleSubmit} className="space-y-4">
          <textarea 
            name="content"
            placeholder="오늘 하루는 어땠나요? 자유롭게 이야기를 남겨주세요."
            className="w-full min-h-[120px] p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
            required
          />
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors"
          >
            게시하기
          </button>
        </form>
      </section>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/post/${post.id}`}
            className="block bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
          >
            <p className="text-slate-700 line-clamp-3 mb-4 whitespace-pre-wrap leading-relaxed">
              {post.content}
            </p>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                <span>{post.views}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4" />
                <span>{post._count.comments}</span>
              </div>
              <span className="ml-auto text-slate-300">
                {new Date(post.createdAt).toLocaleDateString('ko-KR')}
              </span>
            </div>
          </Link>
        ))}
        {posts.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            아직 게시글이 없습니다. 첫 번째 글을 남겨보세요!
          </div>
        )}
      </div>
    </div>
  )
}
