// index.js (기존 코드 상단 부분에 추가)
const express = require('express');
const path = require('path'); // 추가
// ... 기존 코드 ...

app.use(express.json());
app.use(express.static('public')); // 추가: public 폴더를 메인으로 사용

// ... 나머지 API 코드 (app.post, app.get 등) ...
