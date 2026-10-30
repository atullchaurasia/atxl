// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Atul Chaurasia',
  role: 'ai/ml engineer',
  bio: [
    "hey, i'm atul — an ai engineer who builds around llms, rag, agents and anything ml.",
    "apart from that, you'll find me lifting at the gym or deep in an online game.",
  ],
  github: 'atullchaurasia',
};

// start/end are "YYYY-MM"; leave end out for the current role.
export const experience = [
  { role: 'Data Scientist', company: 'BestPeers Infotech', start: '2026-02' },
  { role: 'AI/ML Engineer', company: 'Me.AI', start: '2025-09', end: '2026-02' },
  { role: 'ML Research Intern', company: 'ICAR National Soybean Research Institute', start: '2025-08', end: '2025-11' },
  { role: 'ML Intern', company: 'Supersourcing', start: '2024-03', end: '2024-07' },
];

export const education = [
  { title: 'Devi Ahilya Vishwavidyalaya, Indore', subtitle: 'M.Tech, Data Science', dates: '2024 – 2026' },
  { title: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore', subtitle: 'B.Tech, Computer Science', dates: '2020 – 2024' },
];

export const projects = [
  {
    title: 'Traffic-GNN: Spatio-Temporal Traffic Prediction',
    description: 'Graph neural network that predicts traffic and routes around congestion.',
    url: 'https://github.com/atullchaurasia/graph-neural-network',
  },
  {
    title: 'Deep Learning Architectures from Scratch',
    description: 'Transformer, BERT, LLaMA 2, ViT and more, built from scratch in PyTorch.',
    url: 'https://github.com/atullchaurasia/problem-solving',
  },
  {
    title: 'Airline Multi-Agent AI Assistant',
    description: 'Multi-agent assistant that handles airline bookings end to end.',
    url: 'https://github.com/atullchaurasia/airline-bot',
  },
  {
    title: 'YouTube Semantic Search Engine',
    description: 'Search 10,000+ YouTube transcripts by meaning, not keywords.',
    url: 'https://github.com/atullchaurasia/youtube-semantic-search',
  },
];

// icon is a devicon class name: https://devicon.dev
export const skills = [
  ['Python', 'devicon-python-plain'],
  ['SQL', 'devicon-azuresqldatabase-plain'],
  ['Machine Learning', 'devicon-python-plain'],
  ['Deep Learning', 'devicon-python-plain'],
  ['NLP', 'devicon-python-plain'],
  ['PyTorch', 'devicon-pytorch-original'],
  ['Transformers', 'devicon-python-plain'],
  ['Scikit-learn', 'devicon-scikitlearn-plain'],
  ['XGBoost', 'devicon-python-plain'],
  ['spaCy', 'devicon-python-plain'],
  ['LangChain', 'devicon-python-plain'],
  ['LangGraph', 'devicon-python-plain'],
  ['Google ADK', 'devicon-python-plain'],
  ['MCP', 'devicon-python-plain'],
  ['LangSmith', 'devicon-python-plain'],
  ['Temporal', 'devicon-python-plain'],
  ['RAG', 'devicon-python-plain'],
  ['FastAPI', 'devicon-fastapi-plain'],
  ['PostgreSQL', 'devicon-postgresql-plain'],
  ['pgvector', 'devicon-postgresql-plain'],
  ['MongoDB', 'devicon-mongodb-plain'],
  ['Pinecone', 'devicon-python-plain'],
  ['Neo4j', 'devicon-neo4j-plain'],
  ['AWS', 'devicon-amazonwebservices-plain-wordmark'],
  ['GCP', 'devicon-googlecloud-plain'],
  ['Docker', 'devicon-docker-plain'],
  ['Git', 'devicon-git-plain'],
];

export const certifications = [
  { title: 'Neural Networks and Deep Learning', subtitle: 'DeepLearning.AI • Coursera' },
  { title: 'Data Analytics and Visualization', subtitle: 'Accenture' },
];

export const contact = {
  email: 'atul.chaurasia38@gmail.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/atullchaurasia', icon: 'devicon-github-original' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/atul-chaurasia-77b5081b9/', icon: 'devicon-linkedin-plain' },
    { label: 'Resume', url: '/assets/Atul_Chaurasia_Resume.pdf', icon: 'devicon-readthedocs-original' },
  ],
};
