# Projeto de Automação com Cypress - Ambientes de Teste

Este repositório contém meus estudos de automação de testes utilizando **Cypress**. O foco atual é a configuração de múltiplos ambientes (local, dev, prd) e o gerenciamento de variáveis de ambiente.

## 🛠️ Tecnologias Utilizadas
* **Cypress** (Automação de testes E2E)
* **JavaScript** (Lógica dos testes)
* **Node.js** (Ambiente de execução)

## 📁 Estrutura do Projeto
* `cypress/e2e`: Testes organizados por cenários.
* `cypress/fixtures`: Dados estáticos para testes (JSON por ambiente).
* `cypress.env.json`: Configuração de variáveis de ambiente locais.

## 🚀 Como rodar os testes
1. Instale as dependências: `npm install`
2. Abra o Cypress: `npx cypress open`
