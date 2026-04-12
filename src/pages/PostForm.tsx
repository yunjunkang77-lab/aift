import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`게시글이 ${isEdit ? '수정' : '작성'}되었습니다. (Mock)`);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="post-detail">
        <h2>{isEdit ? '게시글 수정' : '새 게시글 작성'}</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <div className="form-group">
            <label>제목</label>
            <input type="text" placeholder="제목을 입력하세요" required />
          </div>
          <div className="form-group">
            <label>작성자</label>
            <input type="text" placeholder="작성자 이름을 입력하세요" required />
          </div>
          <div className="form-group">
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호 (수정/삭제용)" required />
          </div>
          <div className="form-group">
            <label>내용</label>
            <textarea placeholder="내용을 입력하세요" required></textarea>
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button type="submit" className="btn-primary" style={{ flex: 1 }}>{isEdit ? '수정 완료' : '등록하기'}</button>
            <button type="button" onClick={() => navigate(-1)} style={{ backgroundColor: '#eee', flex: 0.3 }}>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
