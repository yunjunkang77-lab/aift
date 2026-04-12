import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const mockPosts = [
    { id: 1, title: '2026 수능 대비 수학 공부법 공유', author: '수학의신', date: '2026-04-12' },
    { id: 2, title: '영어 단어장 추천받아요', author: '영어공부중', date: '2026-04-11' },
    { id: 3, title: '오늘 급식 레전드였다...', author: '배고픈고3', date: '2026-04-10' },
  ];

  return (
    <div className="container">
      <h2>전체 게시글</h2>
      <div style={{ marginTop: '20px' }}>
        {mockPosts.map(post => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <div className="card">
              <div className="post-title">{post.title}</div>
              <div className="post-meta">작성자: {post.author} | {post.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
