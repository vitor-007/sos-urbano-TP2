# SOS Urbano — Plataforma de Denúncias Comunitárias

Um sistema moderno desenvolvido em React + TypeScript integrado ao Firebase para autenticação, banco de dados e hospedagem.
A aplicação permite que moradores registrem denúncias de problemas urbanos como vazamentos, buracos em vias, iluminação pública, descarte irregular de lixo e outros incidentes da cidade.

📌 Índice

Descrição do Projeto

Tecnologias Utilizadas

Funcionalidades

Arquitetura da Aplicação

Instalação e Execução

Configuração do Firebase

Regras de Segurança (Firestore Rules)

Estrutura de Pastas

Próximos Passos / Melhorias Futuras

Autor

📝 Descrição do Projeto

O SOS Urbano é uma plataforma simples, rápida e responsiva para registrar denúncias sobre problemas na cidade.
O objetivo é proporcionar uma comunicação eficiente entre moradores e órgãos responsáveis, tornando mais fácil relatar e acompanhar solicitações.

O sistema possui autenticação, cadastro de denúncias, visualização em lista, modal de detalhes e gerenciamento via Firebase.

🛠 Tecnologias Utilizadas
Frontend

React

TypeScript

Vite

React Router DOM

CSS Modules / Tailwind (depende do seu setup)

Backend-as-a-Service

Firebase Authentication

Firebase Firestore

Firebase Hosting

⚙ Funcionalidades
👤 Autenticação

Login com email e senha

Registro de novos usuários

Controle de rotas privadas

🚨 Denúncias

Cadastro de nova denúncia

Seleção de categoria (ex: Buraco, Vazamento, Iluminação, Lixo, etc.)

Upload de imagem (se você usar Storage futuramente)

Salvar dados no Firestore com timestamp

📄 Lista de Ocorrências

Exibição de todas as denúncias registradas

Cards organizados mostrando título, descrição, status e data

🔍 Visualização Detalhada

Modal com todas as informações da denúncia

Possibilidade de expansão futura: adicionar comentários, fotos adicionais, atualização de status etc.

🧱 Arquitetura da Aplicação

React com componentes isolados

Firebase centralizado em /src/firebase/config.ts

Páginas separadas:

/login

/register

/dashboard

/denuncias

Hooks e services para abstrair Firestore e Auth

Responsividade para desktop e mobile

▶ Instalação e Execução
1. Clone o repositório
git clone https://github.com/SEU_USUARIO/sos-urbano.git
cd sos-urbano

2. Instale as dependências
npm install

3. Execute o projeto
npm run dev

🔥 Configuração do Firebase

Crie um arquivo em:

/src/firebase/config.ts


Com:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_KEY",
  authDomain: "SUA_APP.firebaseapp.com",
  projectId: "SUA_PROJECT_ID",
  storageBucket: "SUA_BUCKET.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

🔐 Regras de Segurança (Firestore Rules)
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // Permite que usuários autenticados leiam e escrevam somente seus próprios registros
    match /denuncias/{docId} {
      allow read, write: if request.auth != null;
    }

    // Bloqueia todo o restante
    match /{document=**} {
      allow read, write: if false;
    }
  }
}

📁 Estrutura de Pastas (simplificada)
src
 ├── components
 │    ├── FormDenuncia
 │    ├── ModalDetalhes
 │    └── CardDenuncia
 ├── pages
 │    ├── login
 │    ├── register
 │    ├── dashboard
 │    └── denuncias
 ├── firebase
 │    └── config.ts
 ├── hooks
 ├── services
 ├── styles
 └── App.tsx
