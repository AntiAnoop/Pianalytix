
import { InternshipConfig, ProjectItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: '300+ Solved Projects', path: '/projects' },
  { name: 'Tech Talks', path: '/blogs' },
  { name: 'Digital Solutions', path: '/digital-solutions' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'Contact Us', path: '/contact' },
];

export const TRUST_LOGOS = [
  'Wipro', 'Dell', 'TCS', 'Google Developers', 'PwC'
];

export const ML_INTERNSHIP: InternshipConfig = {
  id: 'ml',
  title: 'Machine Learning Online Course and Global Internship Program',
  subtitle: 'Master AI and Machine Learning through hands-on industry projects.',
  rating: 4.6,
  reviews: 2136,
  duration: '8 Weeks',
  priceInr: 159,
  priceUsd: 159,
  instructor: {
    name: 'S. Singhal',
    role: 'Machine Learning Engineer',
    credentials: 'Masters from IIT Bombay',
    experience: 'Over 5 years in development and deployment of ML/DL algorithms.',
    stack: 'Python, ML, Deep Learning, NLP, Java, Scala, AWS, HDFS.'
  },
  projects: [
    'Walmart Sales Prediction',
    'Zomato Restaurant Ratings',
    'Diabetes Prediction',
    'Bangalore House Price Prediction'
  ],
  syllabus: [
    { title: 'Intro to Python', description: 'Basics of Python, datatypes, operators, control flow.' },
    { title: 'Advanced Python', description: 'Functions, lambda, list comprehension, exception handling.' },
    { title: 'Data Analysis', description: 'Manipulation and analysis using Numpy and Pandas.' },
    { title: 'Data Visualization', description: 'Charting and visualization using Matplotlib.' },
    { title: 'Statistics for ML', description: 'Mean, median, mode, variability, covariance, correlation.' },
    { title: 'Supervised ML', description: 'Linear regression, Naive Bayes, KNN, Decision Trees, Random Forests.' },
    { title: 'Unsupervised ML', description: 'Clustering use cases and K-means clustering.' }
  ]
};

export const DS_INTERNSHIP: InternshipConfig = {
    id: 'ds',
    title: 'Data Science Project Based Internship Program',
    subtitle: 'Solve real-world business challenges using advanced data analytics.',
    rating: 4.5,
    reviews: 1840,
    duration: '8 Weeks',
    priceInr: 4720, // 4000 + 18% GST
    priceUsd: 59, // ~50 + 18%
    instructor: {
      name: 'S. Singhal',
      role: 'Data Science Expert',
      credentials: 'Masters from IIT Bombay',
      experience: 'Expert in translating raw data into business intelligence.',
      stack: 'Python, SQL, Tableau, Power BI, Statistics.'
    },
    projects: [
      'Walmart Sales Prediction',
      'Diabetes Prediction',
      'Liver Disease Prediction',
      'Flight Fare Prediction',
      'Sentiment Analysis App',
      'Face Detection App'
    ],
    syllabus: [
        { title: 'Data Extraction', description: 'SQL for data science and web scraping.' },
        { title: 'Data Wrangling', description: 'Advanced cleaning techniques with Pandas.' },
        { title: 'Exploratory Data Analysis', description: 'Statistical visualization and insight generation.' },
        { title: 'Business Analytics', description: 'Translating data into actionable business reports.' }
    ]
};

export const PROJECTS_LIST: ProjectItem[] = [
  { id: 1, title: 'Walmart Sales Prediction', description: 'Predict future sales for multiple Walmart stores.', category: 'ML', image: 'https://picsum.photos/seed/walmart/400/300' },
  { id: 2, title: 'Zomato Ratings Predictor', description: 'Analyze restaurant factors influencing ratings.', category: 'DS', image: 'https://picsum.photos/seed/zomato/400/300' },
  { id: 3, title: 'Face Detection App', description: 'Real-time face detection using OpenCV.', category: 'Web', image: 'https://picsum.photos/seed/face/400/300' },
  { id: 4, title: 'Diabetes Prediction', description: 'Health risk assessment using SVM models.', category: 'ML', image: 'https://picsum.photos/seed/health/400/300' },
  { id: 5, title: 'Sentiment Analysis', description: 'Analyze social media trends via NLP.', category: 'ML', image: 'https://picsum.photos/seed/sent/400/300' },
  { id: 6, title: 'Customer Revenue Prediction', description: 'Identify high-value customers using regression.', category: 'DS', image: 'https://picsum.photos/seed/rev/400/300' },
];
