@echo off
REM TrustLens Setup Script for Windows
REM This script will install dependencies and prepare the project for local development

echo.
echo 🚀 Starting TrustLens Setup...
echo.

REM Check if Node.js and npm are installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js version:
node -v
echo ✅ npm version:
npm -v
echo.

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)
echo ✅ Backend dependencies installed successfully
cd ..
echo.

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)
echo ✅ Frontend dependencies installed successfully
cd ..
echo.

echo ✅ Setup complete!
echo.
echo 🎯 Next steps:
echo.
echo 1. Start the backend server (in Terminal 1):
echo    cd backend ^&^& npm run dev
echo.
echo 2. Start the frontend server (in Terminal 2):
echo    cd frontend ^&^& npm run dev
echo.
echo 3. Open your browser and navigate to http://localhost:5173
echo.
pause
