🌿 Mehendi Artist Website

A modern Full Stack Mehendi Artist Portfolio Website built using React (Vite), Node.js, Express, and MongoDB Atlas.
The website allows users to view mehendi designs and enables admin to upload new images dynamically.

🚀 Live Demo: https://mehendi-artist-website.onrender.com

📌 Features

✨ Beautiful responsive homepage UI
📷 Image upload functionality (Admin)
🗄 MongoDB Atlas database integration
⚡ Fast frontend built with Vite + React
🌐 REST API using Node.js & Express
📁 Image storage using Multer
🔗 Full stack deployment on Render
📱 Mobile responsive design

🛠 Tech Stack
Frontend
React.js (Vite)
HTML5
CSS3
JavaScript
Backend
Node.js
Express.js
MongoDB Atlas
Mongoose
Multer (file upload)
Deployment
Render (Backend + Frontend)
GitHub (Version Control)
📂 Project Structure
Mehendi-Artist-website
│
├── backend
│   ├── server.js
│   ├── uploads
│   └── package.json
│
├── src
│   ├── components
│   ├── pages
│   └── App.jsx
│
├── public
│
├── dist (generated after build)
│
├── index.html
├── package.json
└── vite.config.js
⚙️ Installation (Run Locally)
1️⃣ Clone repository
git clone https://github.com/websuraj-prog/Mehendi-Artist-website.git
2️⃣ Install dependencies
npm install
cd backend
npm install
3️⃣ Create .env file inside backend folder
MONGODB_URI=your_mongodb_connection_string
PORT=5000
4️⃣ Run frontend
npm run dev
5️⃣ Run backend
cd backend
npm start

Frontend runs on:

http://localhost:5173

Backend runs on:

http://localhost:5000
🚀 Deployment

Project is deployed using Render.

Build Command
npm install && npm run build
Start Command
cd backend && npm start
📡 API Endpoint
Upload Image
POST /upload

Form Data:

key: image
value: select file

Response:

{
  "message": "Image uploaded",
  "url": "image link"
}
📷 Screenshots
<img width="1917" height="876" alt="image" src="https://github.com/user-attachments/assets/6ec1804e-a88f-415c-b0ec-bbc8f7c27edd" />
<img width="1919" height="867" alt="image" src="https://github.com/user-attachments/assets/2c52535e-c94a-4717-b665-78a7a6ac7168" />
<img width="1919" height="870" alt="image" src="https://github.com/user-attachments/assets/19bb75e8-2afc-40e7-aa63-1eb3b24f9a69" />


Modern responsive design for Mehendi Artist portfolio.

👨‍💻 Author

Suraj Vishwakarma

Full Stack Web Developer

GitHub:
https://github.com/websuraj-prog

📜 License

This project is open-source and available under the MIT License.
