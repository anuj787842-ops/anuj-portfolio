# Anuj Sharma Portfolio

Premium futuristic portfolio built with **Next.js 14 + Tailwind CSS + Framer Motion**.

## 🚀 Quick Start

```bash
# 1. Unzip the project folder
# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev

# 4. Open http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # SEO metadata + root layout
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Global styles + Tailwind
├── components/
│   ├── sections/         # Hero, About, Skills, Projects, Experience, GitHub, Certifications, Contact
│   └── ui/               # Navbar, Footer, Loader, CustomCursor, ParticleBackground, ScrollProgress
├── hooks/
│   ├── useTyped.ts       # Typing animation hook
│   └── useScrollProgress.ts
└── lib/
    ├── data.ts           # All your content (edit here!)
    └── utils.ts          # cn() utility
```

## ✏️ How to Update Content

All your personal data is in **`src/lib/data.ts`**.

- **Name / bio / links** → `PERSONAL` object
- **Projects** → `PROJECTS` array (add image to `public/images/`)
- **Skills** → `SKILLS` array (adjust % values)
- **Experience** → `EXPERIENCE` array
- **Certifications** → `CERTIFICATIONS` array

## 🖼️ Adding Project Images

1. Add your project screenshots to `public/images/`
2. Name them: `fake-news.png`, `pipeline.png`, `spam.png`
3. They'll auto-appear in project cards

## 📄 Adding Your Resume

1. Put your PDF in `public/` folder
2. Name it: `Anuj_Sharma_Resume.pdf`
3. Resume download button will work automatically

## 🚢 Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or just push to GitHub and connect to vercel.com
```

## 🔧 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **TypeScript** (type safety)
- **Lucide React** (icons)
