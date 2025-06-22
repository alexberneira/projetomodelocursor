# Projeto React Inicial - Stack Moderna

Este é um projeto React inicial configurado com uma stack moderna de desenvolvimento web, pronto para começar a desenvolver.

## 🚀 Tecnologias Utilizadas

- **React 18.2.0** - Framework principal
- **TypeScript** - Para tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Supabase** - Backend as a Service (BaaS)
- **Testing Library** - Para testes
- **Vercel** - Para deploy

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── hooks/         # Custom hooks
├── utils/         # Funções utilitárias
├── types/         # Definições de tipos TypeScript
├── lib/           # Configurações de bibliotecas
│   └── supabase.ts
├── App.tsx        # Componente principal
├── App.css        # Estilos do App
├── index.tsx      # Ponto de entrada
├── index.css      # Estilos globais
└── reportWebVitals.ts
```

## 🛠️ Scripts Disponíveis

### `npm start`

Executa o app em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm test`

Inicia o test runner em modo interativo.

### `npm run build`

Constrói o app para produção na pasta `build`.

### `npm run eject`

**Nota: operação irreversível!**

Remove o Create React App e copia todas as configurações para o projeto.

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
REACT_APP_SUPABASE_URL=sua_url_do_supabase
REACT_APP_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

### Supabase

1. Crie um projeto no [Supabase](https://supabase.com)
2. Execute o SQL do arquivo `supabase-setup.sql` no SQL Editor
3. Configure as variáveis de ambiente

## 🎨 Tailwind CSS

O projeto está configurado com Tailwind CSS. Use as classes utilitárias diretamente nos componentes:

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello Tailwind!
</div>
```

## 🧪 Testes

O projeto inclui Testing Library configurado. Execute os testes com:

```bash
npm test
```

## 🚀 Deploy

O projeto está configurado para deploy no Vercel. Basta conectar o repositório e fazer deploy automático.

## 📚 Próximos Passos

1. Configure as variáveis de ambiente do Supabase
2. Execute o SQL de setup no Supabase
3. Comece a desenvolver suas funcionalidades
4. Adicione novos componentes na pasta `components/`
5. Crie páginas na pasta `pages/`

## 🤝 Contribuição

Este é um projeto inicial. Sinta-se livre para modificar e adaptar conforme suas necessidades.

---

**Happy coding! 🎉**
