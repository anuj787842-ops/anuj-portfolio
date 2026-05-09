export const PERSONAL = {
  name: 'Anuj Sharma',
  tagline: 'Data Analyst · Python Developer · ML Engineer',
  email: 'anuj787842@gmail.com',
  github: 'https://github.com/Anuj7878',
  githubUser: 'Anuj7878',
  linkedin: 'https://linkedin.com/in/anuj-sharma-a8884a279',
  location: 'Jaipur, Rajasthan, India',
  resumeUrl: '/Anuj_Sharma_Resume.pdf',
bio: [
  "I build data-driven systems, ETL pipelines, and ML solutions focused on real-world impact.",
  "Passionate about Data Engineering, Analytics, and AI with hands-on experience in Python, SQL, Power BI, and cloud tools.",
],
}

export const TYPED_PHRASES = [
  'Data Engineer',
  'ML Engineer',
  'Python Developer',
  'AI Enthusiast',
]

export const STATS = [
  { value: '2+', label: 'Internships' },
  { value: 'Production-style Projects', label: 'Projects' },
  { value: '3+', label: 'Certifications' },
  { value: '2026', label: 'Graduating' },
]

export const SKILLS = [
  {
    category: 'Languages & DB',
    items: [
      { name: 'Python', pct: 90 },
      { name: 'SQL', pct: 85 },
      { name: 'PostgreSQL', pct: 80 },
      { name: 'MySQL', pct: 80 },
    ],
  },
  {
    category: 'Data & ML',
    items: [
      { name: 'Pandas / NumPy', pct: 88 },
      { name: 'Scikit-learn', pct: 80 },
      { name: 'EDA & Statistics', pct: 85 },
      { name: 'NLP / TF-IDF', pct: 75 },
    ],
  },
  {
    category: 'Tools & Cloud',
    items: [
      { name: 'Power BI', pct: 82 },
      { name: 'GCP', pct: 75 },
      { name: 'Git / GitHub', pct: 80 },
      { name: 'Streamlit', pct: 72 },
    ],
  },
]

export const EXTRA_TAGS = [
  'Matplotlib', 'Seaborn', 'Excel', 'Tableau', 'Jupyter',
  'Google Colab', 'ETL Pipelines', 'Data Wrangling', 'Google Sheets',
]

export const PROJECTS = [
  {
    id: 'fake-news',
    number: '01',
    featured: true,
    title: 'Fake News Detection System',
    shortDesc: 'ML-based web app to classify news as Real or Fake using NLP. Achieved 94%+ accuracy with TF-IDF vectorization.',
    fullDesc: 'An ML-based web application that classifies news articles as Real or Fake using Natural Language Processing. Built with a complete data pipeline from raw text to live predictions with an interactive Streamlit interface.',
    image: '/images/fake-news.png',
    metrics: [
      { label: 'Accuracy', value: '94%+' },
      { label: 'Models Compared', value: '3' },
      { label: 'Tech Stack', value: '5 tools' },
    ],
    highlights: [
      'Achieved 94%+ classification accuracy using ensemble approach',
      'Trained and compared Logistic Regression, Naive Bayes, and Random Forest',
      'Applied TF-IDF vectorization for feature extraction from raw text',
      'Deployed interactive Streamlit interface with real-time predictions',
      'Complete text preprocessing pipeline including tokenization and stopword removal',
    ],
    tech: ['Python', 'NLP', 'Scikit-learn', 'Streamlit', 'TF-IDF', 'Pandas'],
    github: 'https://github.com/Anuj7878/fake-news-detection-system',
    live: '',
  },
  {
    id: 'pipeline',
    number: '02',
    featured: false,
    title: 'Job Data Pipeline – Skill Demand Analysis',
    shortDesc: 'End-to-end ETL pipeline analyzing 1,000+ job listings. PostgreSQL + Power BI dashboards for skill trends.',
    fullDesc: 'A complete end-to-end ETL pipeline that extracts, transforms, and loads job posting data to analyze in-demand technical skills across the data industry.',
    image: '/images/pipeline.png',
    metrics: [
      { label: 'Jobs Analyzed', value: '1000+' },
      { label: 'Pipeline Stages', value: '3 ETL' },
      { label: 'Dashboards', value: 'Power BI' },
    ],
    highlights: [
      'Built full ETL: extraction → Pandas cleaning → PostgreSQL storage',
      'Analyzed 1,000+ job listings using advanced SQL queries',
      'Surfaced top in-demand skills with frequency and trend mapping',
      'Created Power BI dashboards with interactive skill demand visualizations',
      'Identified Python, SQL, and Power BI as top 3 skills in data roles',
    ],
    tech: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'Power BI', 'ETL'],
    github: 'https://github.com/Anuj7878',
    live: '',
  },
  {
    id: 'spam',
    number: '03',
    featured: false,
    title: 'Spam Mail Detection System',
    shortDesc: 'Email classification pipeline with TF-IDF vectorization and ML model comparison based on precision-recall.',
    fullDesc: 'A complete spam email classification pipeline built from scratch — from raw text preprocessing to a trained and evaluated machine learning classifier optimized for minimal false positives.',
    image: '/images/spam.png',
    metrics: [
      { label: 'Pipeline', value: 'End-to-end' },
      { label: 'Vectorization', value: 'TF-IDF' },
      { label: 'Optimization', value: 'Precision-Recall' },
    ],
    highlights: [
      'Built text preprocessing pipeline: cleaning, tokenization, stopword removal',
      'Applied TF-IDF vectorization to convert raw text into ML-ready features',
      'Trained multiple classifiers and selected best based on precision-recall tradeoff',
      'Minimized false positives in spam detection through threshold optimization',
      'Clean, modular code structure designed for easy extension',
    ],
    tech: ['Python', 'NLP', 'Scikit-learn', 'TF-IDF', 'Pandas', 'NumPy'],
    github: 'https://github.com/Anuj7878',
    live: '',
  },
  {
  id: 'diwali',
  number: '04',
  featured: false,
  title: 'Diwali Sales Analysis',
  shortDesc: 'Exploratory data analysis project uncovering customer purchasing behavior and festive sales trends.',
  fullDesc: 'Comprehensive Diwali sales analytics project using Python, Pandas, and visualization libraries to identify customer trends, top-performing products, and revenue-driving demographics.',
  image: '/images/diwali.png',

  metrics: [
    { label: 'Records', value: '15K+' },
    { label: 'Insights', value: 'Customer' },
    { label: 'Analysis', value: 'Trend-Based' },
  ],

  highlights: [
    'Performed data cleaning and preprocessing on raw retail sales datasets',
    'Analyzed customer purchasing patterns across age, gender, and state',
    'Identified top-selling product categories during festive season',
    'Created visualizations for revenue trends and customer segmentation',
    'Generated business insights to improve marketing and sales strategy',
  ],

  tech: ['Python', 'Pandas', 'Matplotlib', 'EDA'],

  github: 'https://github.com/Anuj7878/Diwali-Sales-Analysis',

  live: '',
},]

export const EXPERIENCE = [
  {
    date: 'May 2025 – Aug 2025',
    company: 'Vaishnav Technologies',
    role: 'Data Science Intern',
    location: 'Remote',
    color: 'cyan',
    desc: 'Performed end-to-end EDA on 10+ structured datasets using Python, Pandas, and NumPy. Cleaned and preprocessed data — reducing downstream errors by ~30% and accelerating reporting turnaround by 20%.',
  },
  {
    date: 'May 2024 – June 2024',
    company: 'Axis India Machine Learning',
    role: 'R&D Intern',
    location: 'Remote',
    color: 'purple',
    desc: 'Validated, cleaned, and transformed datasets to support ML research across 5+ experimental pipelines. Contributed to analysis, interpretation of results, and research documentation.',
  },
  {
    date: '2022 – 2026 (Completed)',
    company: 'Poornima University',
    role: 'B.Tech CSE – AI & Data Science',
    location: 'Jaipur, India',
    color: 'blue',
    desc: 'Specializing in AI and Data Science. Building real-world projects in ML, NLP, and data engineering with active GitHub contributions and hands-on focus on production-grade solutions.',
  },
]

export const CERTIFICATIONS = [
  {
    icon: '☁️',
    title: 'Google Cloud Career Launchpad – Data Analytics Track',
    issuer: 'Google Cloud Learning Services',
    date: 'Feb 2026',
    id: 'ID: 9EGTSDFN',
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'Microsoft & LinkedIn Learning',
    date: 'Career Essentials Series',
    id: null,
  },
  {
    icon: '✨',
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn Learning',
    date: 'GenAI Track',
    id: null,
  },
]
