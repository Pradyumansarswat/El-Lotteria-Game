# 🎮 El Lotteria Game

🚀 **A small lottery game inspired by the Mexican game El Lotteria, built with JavaScript.**  
🎮 Play Now: [Live Game Link](https://el-lotteria-game-1cxs.vercel.app/)

---

## 📌 Features
✅ **Multiplayer Gameplay** – Play with friends in real-time.  
✅ **Smooth Animations** – Fluid graphics and transitions.  
✅ **Secure Backend** – Powered by [Backend Tech].  
✅ **Mobile-Friendly** – Works on all devices.

---

## 🛠️ Tech Stack

### Frontend
- **@mui/material**: Material-UI components for building user interfaces.
- **axios**: Promise-based HTTP client for making API requests.
- **react-confetti**: Confetti animation for celebratory effects.

### Backend
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Loads environment variables from a `.env` file.
- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling tool for Node.js.

---

## 🚀 Getting Started

### 🔥 1. Clone the Repository

```sh
git clone https://github.com/Pradyumansarswat/El-Lotteria-Game.git
cd El-Lotteria-Game
```

### 🖥️ Running the Backend

#### 📌 Prerequisites
Make sure you have:
- Node.js installed
- MongoDB Atlas set up

#### ⚡ Steps to Run Backend

1️⃣ Navigate to the backend folder:
```sh
cd backend
```
2️⃣ Install dependencies:
```sh
npm install
```
3️⃣ Set up environment variables:
- Create a `.env` file in the backend folder.
- Add your credentials (example):
```ini
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```
4️⃣ Run the backend:
```sh
npm start  # or npm run dev (for nodemon)
```
The backend should now be running at `http://localhost:5000`

### 🎨 Running the Frontend

#### 📌 Prerequisites
- Ensure Node.js is installed.

#### ⚡ Steps to Run Frontend

1️⃣ Navigate to the frontend folder:
```sh
cd frontend
```
2️⃣ Install dependencies:
```sh
npm install
```
3️⃣ Set up environment variables:
- Create a `.env` file in the frontend folder.
- Add your API URL (example):
```ini
REACT_APP_API_URL=http://localhost:5000
```
4️⃣ Start the frontend:
```sh
npm start
```
The frontend should now be running at `http://localhost:3000`

### 🚀 Deployment

#### 🎭 Deploying Backend on Render

1. Push your latest code:
```sh
git add .
git commit -m "Deploy backend"
git push origin main
```
2. Go to Render and create a new web service.
3. Connect your GitHub repo and set:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add environment variables in Render's settings.

#### 🌍 Deploying Frontend on Vercel/Netlify

1. Push your latest frontend code:
```sh
git add .
git commit -m "Deploy frontend"
git push origin main
```
2. Deploy on Vercel or Netlify.
3. Set up environment variables in the settings.

### 🛠️ Troubleshooting

- **Backend not starting?** Check if your `.env` file is set up correctly.
- **Frontend API issues?** Make sure the backend URL is correctly set in `REACT_APP_API_URL`.
- **Database connection errors?** Ensure your MongoDB Atlas credentials are correct.

---

## ✨ Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to your fork (`git push origin feature-branch`).
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the terms specified in the repository.  
Feel free to use and modify it as needed! 🎮🚀

---

## 📞 Contact

For support, contact:
- 🐦 Twitter: [X](https://x.com/PradyumanCodes)
- 📌 GitHub: [GitHub](https://github.com/Pradyumansarswat)
