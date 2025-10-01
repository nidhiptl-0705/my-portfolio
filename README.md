# 🚀 Nidhi's Portfolio Website

A modern, responsive portfolio website built with React.js, Express.js, MongoDB, and Bootstrap 5. Features animated UI components, CV download functionality, and a contact form that saves messages to a database.

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with Bootstrap 5
- **Smooth Animations**: Framer Motion animations throughout the interface
- **CV Download**: Direct CV download functionality
- **Contact Form**: Backend API integration with MongoDB storage
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Interactive Projects**: Filterable project showcase
- **Skills Visualization**: Animated skill progress bars
- **Professional Layout**: Modern card-based design

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI framework
- **Bootstrap 5** - CSS framework for responsive design
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx        # Main app component
│   │   └── App.css        # Custom styles
│   └── index.html         # HTML template
├── server/                 # Express backend
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   └── server.js      # Main server file
│   ├── public/            # Static files (CV, etc.)
│   └── .env               # Environment variables
└── package.json           # Root package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` in the server directory
   - Update MongoDB connection string and other variables

4. **Start MongoDB**
   - Ensure MongoDB is running locally or update the connection string in `.env`

5. **Run the development servers**
   ```bash
   npm run dev
   ```

This will start both the backend server (port 5000) and frontend development server (port 5173).

## 📝 Available Scripts

### Root Level
- `npm run dev` - Start both client and server in development mode
- `npm run server:dev` - Start only the backend server
- `npm run client:dev` - Start only the frontend development server
- `npm run install:all` - Install dependencies for all packages

### Server
- `npm run dev` - Start server with nodemon (development)
- `npm start` - Start server in production mode

### Client
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/contact` - Submit contact form
- `GET /api/cv` - Download CV file

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `client/src/components/Home.jsx` - Hero section and skills
- `client/src/components/About.jsx` - Personal details and education
- `client/src/components/Projects.jsx` - Project showcase
- `client/src/components/Contact.jsx` - Contact information

### Styling
- Modify `client/src/App.css` for custom styles
- Update Bootstrap theme colors in CSS variables
- Customize animations in component files

### CV Download
- Place your CV file in `server/public/CV.pdf`
- Update the filename in the download route if needed

## 🔧 Configuration

### Environment Variables (.env)
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio_db
```

### MongoDB Setup
1. Install MongoDB locally or use MongoDB Atlas
2. Create a database named `portfolio_db`
3. The application will automatically create the `contactmessages` collection

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the client: `npm run client:build`
2. Deploy the `dist` folder to your hosting platform

### Backend (Heroku/Railway)
1. Set environment variables in your hosting platform
2. Deploy the server directory
3. Update the API base URL in the frontend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Nidhi** - Information Technology Student

## 🙏 Acknowledgments

- Bootstrap team for the amazing CSS framework
- Framer Motion for smooth animations
- React team for the powerful frontend library
- Express.js team for the robust backend framework

---

**Happy Coding! 🎉**
