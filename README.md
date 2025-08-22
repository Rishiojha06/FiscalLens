# FiscalLens - AI-Powered Expense Tracker

**FiscalLens** brings clarity to your finances. It's a full-stack app that tracks expenses, provides insightful analytics with interactive charts, and delivers AI-powered summaries and personalized suggestions to help you manage your money effectively.

**Tech Stack:** React, NestJS, PostgreSQL, OpenAI API.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![NestJS](https://img.shields.io/badge/backend-NestJS-ea2845?logo=nestjs)
![React](https://img.shields.io/badge/frontend-React-61dafb?logo=react)

---

## ✨ Features

*   **📊 Smart Expense Tracking:** Add, categorize, and manage your income and expenses with an intuitive interface.
*   **🤖 AI-Powered Financial Analysis:** Get a plain-English summary of your spending habits powered by the OpenAI API.
*   **💡 Personalized Suggestions:** Receive actionable, AI-generated advice on how to optimize your spending.
*   **📈 Interactive Data Visualization:** Explore your financial data through beautiful and interactive charts and graphs.
*   **🎯 Goal Setting & Monitoring:** Set custom financial goals and track your progress.
*   **🔐 Secure & Private:** JWT authentication and password hashing to keep your data safe.

## 🛠️ Tech Stack

**Frontend:**
*   React.js
*   Chart.js / Recharts
*   Tailwind CSS

**Backend:**
*   **NestJS**
*   Prisma (ORM)
*   PostgreSQL
*   JWT for Authentication
*   Class-validator & Class-transformer

**AI/ML:**
*   OpenAI API

**Development:**
*   Docker (optional for containerization)

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn
*   PostgreSQL
*   Docker (optional)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Rishiojha06/FiscalLens.git
    cd FiscalLens
    ```

2.  **Install backend dependencies**
    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies**
    ```bash
    cd ../frontend
    npm install
    ```

4.  **Environment Setup**
    *   Copy the `.env.example` file in the `backend` directory to `.env`.
    *   Configure your database connection (`DATABASE_URL`), JWT secret (`JWT_SECRET`), and OpenAI API key (`OPENAI_API_KEY`).

5.  **Database Setup**
    *   Generate and run Prisma migrations:
    ```bash
    cd backend
    npx prisma generate
    npx prisma migrate dev
    ```

6.  **Run the application**
    *   Start the NestJS backend server (from `/backend`):
    ```bash
    # development
    npm run start

    # watch mode
    npm run start:dev
    ```
    *   In a new terminal, start the React frontend (from `/frontend`):
    ```bash
    npm start
    ```

7.  **Open your browser**
    *   Frontend: `http://localhost:3000`
    *   Backend API: `http://localhost:5000` (or your configured port)

## 📁 Project Structure (NestJS Focus)

```
FiscalLens/
├── backend/                 # NestJS Application
│   ├── src/
│   │   ├── auth/           # Authentication module (JWT)
│   │   ├── expenses/       # Expenses CRUD and logic
│   │   ├── ai/             # AI service and controller
│   │   ├── user/           # User management
│   │   ├── prisma/         # Prisma schema and client
│   │   └── app.module.ts   # Root module
│   ├── prisma/
│   │   └── schema.prisma   # Database schema
│   └── .env
├── frontend/                # React.js application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service calls
│   │   └── hooks/          # Custom React hooks
│   └── package.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an Issue or a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
