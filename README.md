# Rapid Resolve

Rapid Resolve is a polished, security-first productivity experience designed to help users organize work with clarity, confidence, and a modern interface. The project combines a React frontend, a Django REST API, and a secure authentication flow with OTP-based email verification.

## Why this project exists

This project was built as a full-stack demo that feels more like a production-ready product than a basic prototype. It focuses on three core goals:

- Deliver a clean and modern user experience for task planning.
- Demonstrate strong backend security practices for real-world applications.
- Show how a simple product idea can scale into a structured multi-page web app.

## Key features

- Modern landing experience with guided onboarding pages.
- Secure sign-up and login experience.
- OTP verification for email-based account creation.
- Protected task APIs scoped to the authenticated user.
- Strong password validation and hardened security settings.
- Responsive frontend built with React and React Router.

## System architecture

Rapid Resolve follows a simple but effective three-layer architecture:

1. Frontend layer
   - Built with React and Vite.
   - Uses React Router for page navigation.
   - Provides the public-facing experience and interactive auth flow.

2. API layer
   - Built with Django and Django REST Framework.
   - Exposes endpoints for authentication, session management, and task operations.
   - Uses session-based authentication for a straightforward and secure flow.

3. Data layer
   - Uses SQLite for local development.
   - Stores users, OTP verification data, and task records.
   - Task records are linked to the authenticated user for ownership and isolation.

## Technology stack

### Frontend
- React 19
- Vite
- React Router DOM
- CSS-based styling for a modern UI

### Backend
- Python
- Django 6
- Django REST Framework
- Django CORS headers
- Argon2 password hashing

### Dev tools and practices
- Git and GitHub for version control
- Environment-based configuration for secrets and email settings
- Strong password validators and throttling for login protection

## Project structure

```text
rapid-resolve/
├── frontend/              # React + Vite application
│   └── src/
│       ├── components/    # Shared UI pieces such as navigation
│       ├── pages/         # Home, signup, login, verification, dashboard, guided usage
│       └── App.jsx        # Route configuration
├── backend/               # Django REST API
│   ├── rapidresolve/      # Django project settings and URLs
│   ├── tasks/             # Authentication, task model, serializer, and views
│   └── templates/         # Email templates
└── README.md
```

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/Prashant0826v/Rapid-Resolve.git
cd Rapid-Resolve
```

### 2. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on http://localhost:5173.

### 3. Set up the backend

```bash
cd ../backend
python -m venv .venv
source .venv/bin/activate   # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

The API will run on http://127.0.0.1:8000.

## Authentication flow

1. A user signs up with a username, email, and password.
2. The backend generates a one-time password and sends it by email.
3. The user enters the code on the verification screen.
4. The account is created and the user is logged in.

## Task system

Each task belongs to a specific authenticated user. This ensures that task data is scoped to the right account and can be managed securely without cross-user leakage.

## Security highlights

- Password strength enforcement
- Argon2-based password hashing
- Rate limiting for authentication attempts
- Session-based authentication for protected endpoints
- CSRF and security headers configured in Django settings

## Future improvements

- Add real SMTP email delivery for production use.
- Add dashboards and analytics for progress tracking.
- Introduce deployment support with Docker and cloud hosting.
- Expand test coverage for auth and task workflows.

## Demo intent

Rapid Resolve is designed to impress judges by combining a polished UX, a realistic full-stack architecture, and a thoughtful security posture in a compact but complete product experience.
