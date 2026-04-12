import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <div className="header-content">
          <Link to="/" className="logo">Comm</Link>
          <div className="search-bar">
            <input type="text" placeholder="게시글 검색..." />
          </div>
          <Link to="/create">
            <button className="btn-primary">글쓰기</button>
          </Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{ textAlign: 'center', padding: '40px 0', color: '#888', fontSize: '14px' }}>
        &copy; 2026 수험생 커뮤니티 Comm. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
