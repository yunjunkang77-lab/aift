import { getPostDetail, createComment } from "../../actions"
import { ArrowLeft, Share2, Eye, MessageSquare } from "lucide-react"
import Link from "next/link"
import ShareButton from "./ShareButton"

export default async function PostDetail({ params }: { params: { id: string } }) {
  const post = await getPostDetail(parseInt(params.id))

  async function handleCommentSubmit(formData: FormData) {
    'use server'
    const content = formData.get('content') as string
    await createComment(parseInt(params.id), content)
  }

  return (
    <div className="space-y-6">
      <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        뒤로가기
      </Link>

      <article className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <span className="flex items-center gap-1.5"><Eye className="w-4 h-4" /> {post.views}</span>
            <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4" /> {post.comments.length}</span>
            <span className="ml-4">{new Date(post.createdAt).toLocaleString('ko-KR')}</span>
          </div>
          <ShareButton />
        </div>
        <p className="text-lg text-slate-800 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>
      </article>

      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
          댓글 <span className="text-blue-600 font-bold">{post.comments.length}</span>
        </h3>
        
        <form action={handleCommentSubmit} className="mb-10 space-y-3">
          <textarea 
            name="content"
            placeholder="댓글을 남겨보세요."
            className="w-full min-h-[80px] p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 resize-none text-sm"
            required
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors float-right"
          >
            댓글 작성
          </button>
          <div className="clear-both" />
        </form>

        <div className="space-y-6 divide-y divide-slate-50">
          {post.comments.map((comment) => (
            <div key={comment.id} className="pt-6 first:pt-0">
              <p className="text-slate-700 text-sm leading-relaxed mb-2">{comment.content}</p>
              <span className="text-slate-300 text-xs">{new Date(comment.createdAt).toLocaleString('ko-KR')}</span>
            </div>
          ))}
          {post.comments.length === 0 && (
            <div className="text-center py-10 text-slate-300 text-sm">
              첫 댓글을 남겨보세요.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
