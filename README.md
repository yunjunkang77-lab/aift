# 수험생 대나무숲 (Exam Community)

익명 수험생들을 위한 정보 공유 및 소통 커뮤니티입니다.

## 🚀 시작하기

### 1. 데이터베이스 설정 (Neon)
1. [Neon.tech](https://neon.tech)에 가입하고 새 프로젝트를 생성합니다.
2. 생성된 PostgreSQL 연결 문자열(Connection String)을 복사합니다.
3. 프로젝트 루트 폴더에 `.env` 파일을 만들고 아래 내용을 입력합니다:
   ```env
   DATABASE_URL="복사한_연결_문자열"
   ```

### 2. 로컬 실행
```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```
이제 `http://localhost:3000`에서 확인하실 수 있습니다.

## 🌐 배포하기

### 1. GitHub 업로드
1. GitHub에서 새로운 레포지토리를 생성합니다.
2. 아래 명령어를 터미널(폴더 안)에 입력합니다:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/사용자이름/레포지토리이름.git
   git push -u origin main
   ```

### 2. Render 배포
1. [Render.com](https://render.com)에 로그인합니다.
2. **New +** -> **Web Service**를 선택합니다.
3. 생성한 GitHub 레포지토리를 연결합니다.
4. 설정값:
   - **Build Command**: `npm install && npx prisma generate && npx prisma db push && npm run build`
   - **Start Command**: `npm run start`
5. **Environment Variables**에 `DATABASE_URL`을 추가하고 Neon의 연결 문자열을 넣습니다.
6. 배포가 완료될 때까지 기다립니다.

## 🛠 기능
- **글 게시**: 회원가입 없이 익명으로 글 작성
- **조회수**: 게시글 열람 시 자동 증가
- **댓글**: 게시글에 익명 댓글 작성
- **공유**: 게시글 URL 복사 기능
