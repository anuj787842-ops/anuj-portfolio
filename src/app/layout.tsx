import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anuj Sharma | Data Analyst & ML Engineer',
  description: 'Data Analyst and ML Engineer specializing in Python, SQL, Power BI, and GCP. Building end-to-end ETL pipelines, ML systems, and analytics dashboards.',
  keywords: ['Data Analyst', 'ML Engineer', 'Python', 'SQL', 'Power BI', 'GCP', 'ETL', 'NLP', 'Jaipur', 'Anuj Sharma'],
  authors: [{ name: 'Anuj Sharma' }],
  openGraph: {
    title: 'Anuj Sharma | Data Analyst & ML Engineer',
    description: 'Building intelligent data systems with Python, SQL, and AI.',
    url: 'https://anuj-sharma.dev',
    siteName: 'Anuj Sharma Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anuj Sharma | Data Analyst',
    description: 'Building intelligent data systems with Python, SQL, and AI.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
