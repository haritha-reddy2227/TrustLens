# TrustLens Local Setup Guide

Complete guide to get TrustLens running on your local machine.

## Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

## Quick Start (Automated)

### On macOS/Linux:
```bash
chmod +x setup.sh
./setup.sh
```

### On Windows:
```bash
setup.bat
```

These scripts will automatically install all dependencies for you.

---

## Manual Setup (Step-by-Step)

### Step 1: Clone the Repository
```bash
git clone https://github.com/haritha-reddy2227/TrustLens.git
cd TrustLens
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 3: Install Frontend Dependencies
```bash
cd frontend
npm install
```

### Step 4: Start Backend Server
Open a new terminal and run:
```bash
cd backend
npm run dev
```

Expected output:
```
Server running on http://localhost:4000
```

### Step 5: Start Frontend Server
Open another new terminal and run:
```bash
cd frontend
npm run dev
```

Expected output:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  press h + enter to show help
```

### Step 6: Open in Browser
Navigate to **http://localhost:5173** in your web browser.

---

## Project Structure

```
TrustLens/
├── frontend/              # Vite + React application
│   ├── package.json
│   ├── src/
│   └── vite.config.js
├── backend/               # Express API server
│   ├── package.json
│   ├── src/
│   │   └── server.js
│   └── .env              # Environment variables (create this)
├── extension/             # Browser extension
│   ├── manifest.json
│   ├── background.js
│   └── content.js
├── database/              # Database schema
│   └── schema.sql
└── README.md
```

---

## Environment Variables

### Backend (.env file)
Create a `.env` file in the `backend/` directory:

```env
PORT=4000
NODE_ENV=development
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=trustlens
CORS_ORIGIN=http://localhost:5173
```

---

## Troubleshooting

### Issue: `npm: command not found`
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Port 4000 or 5173 already in use
**Backend**: Modify the PORT in backend/package.json dev script
**Frontend**: Vite will automatically use the next available port

### Issue: Dependencies won't install
**Solution**: Clear npm cache and try again
```bash
npm cache clean --force
npm install
```

### Issue: CORS errors
Make sure the backend is running on `http://localhost:4000` and frontend on `http://localhost:5173`

---

## Development Commands

### Backend
```bash
cd backend
npm run dev        # Start development server with auto-reload
npm start          # Start production server
```

### Frontend
```bash
cd frontend
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

---

## Database Setup

If you need to set up the database:

1. Install MySQL (if not already installed)
2. Create a database:
```bash
mysql -u root -p
CREATE DATABASE trustlens;
```

3. Import the schema:
```bash
mysql -u root -p trustlens < database/schema.sql
```

4. Update `.env` in backend with your database credentials

---

## API Endpoints

The frontend proxies all `/api` requests to the backend at `http://localhost:4000`.

Example API call from frontend:
```javascript
fetch('/api/endpoint')
  .then(res => res.json())
  .then(data => console.log(data))
```

---

## Browser Extension Setup (Optional)

To load the extension in Chrome/Brave:

1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `extension/` folder

---

## Need Help?

Check the main [README.md](./README.md) or create an issue on GitHub.
