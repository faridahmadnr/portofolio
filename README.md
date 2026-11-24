# Farid Ahmad - Developer Portfolio

Modern, lightweight developer portfolio built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

## Project Structure

```text
portfolio/
├── public/
│   ├── images/
│   ├── favicon.svg
│   └── cv.pdf
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── data/
│   │   └── portfolio.ts
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
The output will be placed in the `dist/` directory, ready to be served by Nginx.
