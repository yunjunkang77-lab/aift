# 수험생 커뮤니티 프로젝트 🎓

이 프로젝트는 Node.js(Express)와 Neon(PostgreSQL)을 사용한 간단한 커뮤니티 첫 페이지입니다.

## 🚀 시작하기 전 준비사항

1. **Node.js 설치**: [nodejs.org](https://nodejs.org/)에서 설치하세요.
2. **Neon 계정 생성**: [neon.tech](https://neon.tech/)에서 데이터베이스를 만들고 `DATABASE_URL`을 복사하세요.
3. **VS Code 설치**: 코드를 수정하기 위해 설치하는 것을 추천합니다.

## 🛠️ 로컬에서 실행하기

1. 바탕화면의 `examinee-community` 폴더에서 터미널(또는 CMD)을 엽니다.
2. 라이브러리를 설치합니다:
   ```bash
   npm install
   ```
3. `.env` 파일을 열고 `DATABASE_URL`에 Neon에서 복사한 주소를 넣습니다.
4. 데이터베이스 구조를 동기화합니다:
   ```bash
   npx prisma db push
   ```
5. 서버를 실행합니다:
   ```bash
   npm start
   ```
6. 웹 브라우저에서 `http://localhost:3000` 접속!

## 🌐 배포하기 (Render)

1. 이 폴더를 본인의 **GitHub** 저장소(Repository)에 올립니다.
2. **Render.com**에 로그인하고 `New > Web Service`를 선택합니다.
3. GitHub 저장소를 연결합니다.
4. `Environment Variables` 설정에서 `DATABASE_URL`을 추가합니다.
5. `Deploy` 버튼을 누르면 끝!

## ✨ 주요 기능
- **로그인/회원가입**: bcrypt를 사용한 안전한 비밀번호 저장
- **조회수**: 페이지 접속 시 자동 증가
- **좋아요**: 하트 버튼 클릭 시 실시간 반영
