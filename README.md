# ToDo List React + Vite

Aplicação de **Lista de Tarefas (ToDo List)** construída com **React + Vite**, utilizando **Redux** para estado global, **React Router** para rotas, **Tailwind CSS** para estilização e **Service Worker** para cache offline.
ToDo List React + Vite

Aplicação de Lista de Tarefas (ToDo List) construída com React + Vite, utilizando Redux para estado global, React Router para rotas, Tailwind CSS para estilização e Service Worker para cache offline.

A aplicação permite adicionar, editar, concluir e deletar tarefas, com prioridade e filtro de tarefas pendentes/concluídas.
🚀 Tecnologias

    React 18 + Vite

    Redux Toolkit

    React Router DOM

    Tailwind CSS

    Service Worker (cache offline)

    Vitest + Testing Library (testes unitários)

    Cypress (testes e2e)

⚡ Instalação

    Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

    Instale dependências:

npm install

    Configure o Tailwind CSS (já incluído no projeto):

/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

E importe no main.jsx:

import './index.css';

🏃 Rodando a aplicação
Desenvolvimento:

npm run dev

Abra no navegador: http://localhost:5173
Build para produção:

npm run build
npm run preview

🧩 Funcionalidades

    Adicionar nova tarefa com título, descrição e prioridade

    Editar tarefa existente

    Marcar tarefa como concluída

    Deletar tarefa

    Filtrar tarefas pendentes/concluídas

    Estado global com Redux Toolkit

    Rotas com React Router (/, /pendentes, /concluidas)

    Cache offline de tarefas com Service Worker

🧪 Testes
Testes Unitários

npm run test

    Executa todos os arquivos *.test.jsx em src/components

    Cobertura opcional:

npx vitest run --coverage

Testes E2E (Cypress)

    Instale o Cypress:

npm install --save-dev cypress

    Abra a interface do Cypress:

npx cypress open

    Execute todos os testes:

    Selecione task.cy.js e clique em Run all specs

    Ou em modo headless:

npx cypress run

📂 Estrutura do Projeto

src/
 ├─ components/
 │   ├─ TaskForm.jsx
 │   ├─ TaskItem.jsx
 │   └─ TaskList.jsx
 ├─ store/
 │   └─ tasksSlice.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
tests/
 ├─ TaskForm.test.jsx
 ├─ TaskItem.test.jsx
 └─ task.cy.js

🔧 Observações

    Redux gerencia o estado global das tarefas

    React Router permite navegação entre páginas de tarefas pendentes e concluídas

    Service Worker faz cache das tarefas para uso offline

    Tailwind CSS fornece estilização moderna e responsiva

A aplicação permite adicionar, editar, concluir e deletar tarefas, com prioridade e filtro de tarefas pendentes/concluídas.

---

## Tecnologias

* React 18 + Vite
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* Service Worker (cache offline)
* Vitest + Testing Library (testes unitários)
* Cypress (testes e2e)

---

## Instalação e Configuração

1. Clone o repositório.
2. Instale as dependências do projeto.
3. Certifique-se de que o Tailwind CSS está configurado:

No arquivo `src/index.css`:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

E importe no `main.jsx`:

```
import './index.css';
```

---

## Rodando a Aplicação

### Desenvolvimento

* Execute o servidor de desenvolvimento e abra a aplicação no navegador em `http://localhost:5173`.

### Build para Produção

* Crie a versão otimizada para produção e visualize com o servidor local de preview.

---

## Funcionalidades

1. Adicionar nova tarefa com título, descrição e prioridade.
2. Editar tarefa existente.
3. Marcar tarefa como concluída.
4. Deletar tarefa.
5. Filtrar tarefas pendentes/concluídas.
6. Estado global gerenciado com Redux Toolkit.
7. Rotas com React Router (`/`, `/pendentes`, `/concluidas`).
8. Cache offline de tarefas com Service Worker.

---

## Testes

### Testes Unitários

* Executa todos os arquivos `*.test.jsx` em `src/components`.
* Cobertura opcional disponível.

### Testes E2E (Cypress)

* Abra a interface do Cypress e execute `task.cy.js`.
* Ou execute todos os testes em modo headless.
* Cobrem fluxos: adicionar tarefa, editar, marcar concluída, deletar e filtrar.

---

## Estrutura do Projeto

```
src/
 ├─ components/
 │   ├─ TaskForm.jsx
 │   ├─ TaskItem.jsx
 │   └─ TaskList.jsx
 ├─ store/
 │   └─ tasksSlice.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
tests/
 ├─ TaskForm.test.jsx
 ├─ TaskItem.test.jsx
 └─ task.cy.js
```

---

## Observações

* **Redux** gerencia o estado global das tarefas.
* **React Router** permite navegação entre páginas de tarefas pendentes e concluídas.
* **Service Worker** faz cache das tarefas para uso offline.
* **Tailwind CSS** fornece estilização moderna e responsiva.
