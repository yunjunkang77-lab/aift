const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Neon DB 연결 설정
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// 1. 방명록 목록 가져오기
app.get('/api/guests', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM guests ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// 2. 방명록 쓰기
app.post('/api/guests', async (req, res) => {
  const { name } = req.body;
  try {
    await pool.query('INSERT INTO guests (name) VALUES ($1)', [name]);
    res.status(201).send('저장 성공!');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`서버 작동 중: port ${PORT}`));
