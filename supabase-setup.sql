-- Estrutura básica do banco de dados Supabase
-- Execute este SQL no SQL Editor do Supabase

-- Criar tabela de exemplo
CREATE TABLE IF NOT EXISTS example_table (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE example_table ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir todas as operações (para desenvolvimento)
-- Em produção, você pode querer políticas mais restritivas
CREATE POLICY "Allow all operations on example_table" ON example_table
  FOR ALL USING (true);

-- Inserir dados de exemplo (opcional)
INSERT INTO example_table (name, description) VALUES
  ('Exemplo 1', 'Primeiro item de exemplo'),
  ('Exemplo 2', 'Segundo item de exemplo')
ON CONFLICT DO NOTHING;

-- IMPORTANTE: Criar bucket de storage para upload de arquivos (se necessário)
-- Execute no SQL Editor do Supabase:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('app-storage', 'app-storage', true); 