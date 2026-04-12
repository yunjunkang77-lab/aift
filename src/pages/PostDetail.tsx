import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  
  // Mock data for display
  const post = {
    title: '2026 수능 대비 수학 공부법 공유',
    author: '수학의신',
    date: '2026-04-12',
    content: '수학은 개념이 가장 중요합니다. 기출 문제만 돌리지 말고 개념 원리를 완벽하게 이해할 때까지 반복하세요.\n\n제가 추천하는 교재는...',
    comments: [
      { id: 1, author: '열공하자', content: '좋은 팁 감사합니다!', date: '2026-04-12 14:20' },
      { id: 2, author: '의대가자', content: '교재 정보도 더 알려주실 수 있나요?', date: '2026-04-12 15:10' }
    ]
  };

  const handleShare = () => {
    alert('URL이 복사되었습니다. (Mock)');
  };

  const handleDelete = () => {
    const password = prompt('비밀번호를 입력하세요:');
    if (password) {
      alert('게시글이 삭제되었습니다. (Mock)');
    }
  };

  return (
    <div className="container">
      <div className="post-detail">
        <div className="post-title" style={{ fontSize: '24px' }}>{post.title}</div>
        <div className="post-meta">작성자: {post.author} | {post.date}</div>
        <div className="post-content">{post.content}</div>
        
        <div className="post-actions">
          <button className="btn-primary" onClick={handleShare}>공유하기</button>
          <Link to={`/edit/${id}`}><button style={{ backgroundColor: '#eee' }}>수정</button></Link>
          <button style={{ backgroundColor: '#ffcccc' }} onClick={handleDelete}>삭제</button>
        </div>

        <div className="comments-section">
          <h3>댓글 {post.comments.length}</h3>
          <div style={{ marginTop: '10px' }}>
            {post.comments.map(c => (
              <div key={c.id} className="comment">
                <div className="comment-meta">{c.author} | {c.date}</div>
                <div>{c.content}</div>
              </div>
            ))}
          </div>
          <div className="form-group" style={{ marginTop: '20px' }}>
            <textarea placeholder="댓글을 입력하세요..." style={{ height: '80px' }}></textarea>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <input type="password" placeholder="비밀번호" style={{ width: '150px' }} />
              <button className="btn-primary">댓글 등록</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
