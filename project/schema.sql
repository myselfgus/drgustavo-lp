-- Dr. Gustavo Mendes e Silva - Database Schema
-- D1 SQLite Database

-- Blog posts (alternativa ao Content Collections para conteúdo dinâmico)
CREATE TABLE IF NOT EXISTS blog_posts (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  published_at INTEGER NOT NULL,
  updated_at INTEGER,
  image_url TEXT,
  image_alt TEXT,
  tags TEXT, -- JSON array: '["TDAH","Canabidiol"]'
  draft INTEGER DEFAULT 0,
  view_count INTEGER DEFAULT 0,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_draft ON blog_posts(draft);

-- Depoimentos de pacientes (com aprovação)
CREATE TABLE IF NOT EXISTS testimonials (
  id TEXT PRIMARY KEY,
  patient_name TEXT,
  patient_initials TEXT NOT NULL, -- "J.S.", "M.A."
  testimonial TEXT NOT NULL,
  rating INTEGER CHECK(rating >= 1 AND rating <= 5),
  treatment_type TEXT, -- "TDAH", "Ansiedade", "Autismo", "Canabidiol"
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  approved INTEGER DEFAULT 0,
  approved_at INTEGER,
  approved_by TEXT
);

CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved, created_at DESC);

-- Submissões de contato e agendamento
CREATE TABLE IF NOT EXISTS contact_submissions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  source TEXT, -- 'cal', 'whatsapp', 'form', 'chatbot'
  metadata TEXT, -- JSON: '{"cal_event_id":"abc123","user_agent":"..."}'
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
  processed INTEGER DEFAULT 0,
  processed_at INTEGER,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_contacts_processed ON contact_submissions(processed, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_source ON contact_submissions(source);

-- Analytics simplificado (page views)
CREATE TABLE IF NOT EXISTS page_views (
  id TEXT PRIMARY KEY,
  page_path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  country TEXT,
  city TEXT,
  device_type TEXT, -- 'desktop', 'mobile', 'tablet'
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(page_path, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_date ON page_views(created_at DESC);

-- Chat sessions (histórico de conversas do chatbot)
CREATE TABLE IF NOT EXISTS chat_sessions (
  id TEXT PRIMARY KEY,
  session_id TEXT NOT NULL,
  user_message TEXT NOT NULL,
  assistant_response TEXT NOT NULL,
  model TEXT DEFAULT '@cf/meta/llama-3-8b-instruct',
  tokens_used INTEGER,
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_chat_sessions_id ON chat_sessions(session_id, created_at);

-- Search queries (para analytics de busca)
CREATE TABLE IF NOT EXISTS search_queries (
  id TEXT PRIMARY KEY,
  query TEXT NOT NULL,
  results_count INTEGER,
  clicked_result TEXT, -- slug do post clicado
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_search_queries ON search_queries(query, created_at DESC);
