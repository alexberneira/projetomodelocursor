import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Projeto React Inicial</h1>
        <p className="text-lg text-gray-600">Stack moderna pronta para desenvolvimento</p>
      </header>
      <main className="App-main">
        <div className="container">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Bem-vindo ao seu novo projeto!</h2>
          <p className="text-gray-700 mb-6">Este projeto está configurado com:</p>
          <ul className="space-y-2 text-left max-w-md mx-auto">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              React 18.2.0
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              TypeScript
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Tailwind CSS
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Supabase
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Testing Library
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
