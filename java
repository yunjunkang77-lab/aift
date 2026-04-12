import { createPost } from './actions'
import { neon } from '@neondatabase/serverless';

export default async function Page() {
  const sql = neon(process.env.DATABASE_URL);
  const posts = await sql`SELECT * FROM posts ORDER BY created_at DESC`;

  return (
    <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🎓 수험생 커뮤니티</h1>
      
      {/* 글쓰기 폼 */}
      <form action={createPost} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input name="title" placeholder="제목" required />
        <select name="category">
          <option value="자유">자유게시판</option>
          <option value="공부인증">오늘의 열공</option>
          <option value="질문">질문있어요</option>
        </select>
        <textarea name="content" placeholder="고민을 나눠보세요" required />
        <button type="submit">글 올리기</button>
      </form>

      <hr />

      {/* 게시글 목록 */}
      <div>
        {posts.map((post) => (
          <div key={post.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <h3>[{post.category}] {post.title}</h3>
            <p>{post.content}</p>
            <small>{new Date(post.created_at).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </main>
  )
}
