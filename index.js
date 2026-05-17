const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'examinee-secret-key',
  resave: false,
  saveUninitialized: true
}));

// --- API Routes ---

// 1. 회원가입
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { username, password: hashedPassword }
    });
    res.json({ success: true, message: '회원가입 성공!' });
  } catch (error) {
    res.status(400).json({ success: false, message: '이미 존재하는 아이디입니다.' });
  }
});

// 2. 로그인
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user.id;
    req.session.username = user.username;
    res.json({ success: true, message: '로그인 성공!', username: user.username });
  } else {
    res.status(401).json({ success: false, message: '아이디 또는 비밀번호가 틀렸습니다.' });
  }
});

// 3. 로그아웃
app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

// 4. 세션 확인
app.get('/api/me', (req, res) => {
  if (req.session.userId) {
    res.json({ loggedIn: true, username: req.session.username });
  } else {
    res.json({ loggedIn: false });
  }
});

// 5. 게시글 목록 조회
app.get('/api/posts', async (req, res) => {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' }
  });
  res.json(posts);
});

// 6. 게시글 작성
app.post('/api/posts', async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: '로그인이 필요합니다.' });
  }
  const { title, content } = req.body;
  const post = await prisma.post.create({
    data: { title, content }
  });
  res.json(post);
});

// 7. 게시글 상세 조회 (조회수 증가 포함)
app.get('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.update({
    where: { id: parseInt(id) },
    data: { views: { increment: 1 } }
  });
  res.json(post);
});

// 8. 좋아요 기능
app.post('/api/posts/:id/like', async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.update({
    where: { id: parseInt(id) },
    data: { likes: { increment: 1 } }
  });
  res.json({ likes: post.likes });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
