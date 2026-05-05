# Dynamics Validations

Suite de testes de automação E2E para validação de funcionalidades dinâmicas em aplicações web. Desenvolvido com Cypress para garantir cobertura de testes robusta e confiável em múltiplos ambientes.

## Visão Geral

Este projeto implementa testes end-to-end automatizados para validar comportamentos complexos e cenários de negócio críticos. A arquitetura suporta execução em diferentes ambientes (local, desenvolvimento, produção) com gerenciamento centralizado de configurações e dados de teste.

## Stack Tecnológico

- **Cypress** `^13.17.0` - Framework de automação E2E
- **JavaScript** - Linguagem base para implementação dos testes
- **Node.js** - Runtime para execução
- **Puppeteer** `^21.9.0` - Suporte a operações avançadas do navegador
- **dotenv** `^17.3.1` - Gerenciamento de variáveis de ambiente

## Estrutura do Projeto

```
Dynamics_validations/
├── cypress/
│   ├── e2e/              # Casos de teste organizados por funcionalidade
│   ├── fixtures/         # Dados estáticos para testes (JSON por ambiente)
│   ├── support/
│   │   ├── actions/      # Utilitários de ação reutilizáveis
│   │   ├── pages/        # Page Objects para manutenção escalável
│   │   ├── utils/        # Funções auxiliares e helpers
│   │   ├── commands.js   # Comandos customizados do Cypress
│   │   └── e2e.js        # Configuração global dos testes E2E
│   └── ...
├── cypress.config.js     # Configuração principal do Cypress
├── cypress.env.json      # Variáveis de ambiente locais
├── package.json          # Dependências do projeto
└── README.md             # Esta documentação
```

## Instalação

### Pré-requisitos

- Node.js versão 14.x ou superior
- npm ou yarn

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Pedro001979/Dynamics_validations.git
   cd Dynamics_validations
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   
   Copie o arquivo `cypress.env.json` e ajuste conforme necessário:
   ```json
   {
     "MY_ENV": "local"
   }
   ```

## Uso

### Executar Testes

**Modo interativo (ideal para desenvolvimento):**
```bash
npm run test
# ou
npx cypress open
```

**Modo headless (ideal para CI/CD):**
```bash
npx cypress run
```

### Definir Ambiente de Execução

Os testes podem ser executados em diferentes ambientes através de variáveis de ambiente:

#### Shell (Linux, macOS, Git Bash no Windows)

```bash
# Inline
CYPRESS_MY_ENV=hml npx cypress open

# Exportar e executar
export CYPRESS_MY_ENV=hml
npx cypress open
```

#### Command Prompt (Windows)

```cmd
set CYPRESS_MY_ENV=hml
npx cypress open
```

#### PowerShell (Windows)

```powershell
$env:CYPRESS_MY_ENV="hml"
npx cypress open
```

#### Com flag `--env`

```bash
npx cypress open --env MY_ENV="homolog"
```

### Especificar Ambiente na Execução Headless

```bash
MY_ENV=prd npx cypress run
```

## Configuração

### cypress.config.js

O arquivo `cypress.config.js` centraliza as configurações do framework:

- **baseUrl**: URL base da aplicação sob teste (configurada para EBAC Store)
- **setupNodeEvents**: Hook para eventos do navegador e tasks customizadas
- **env**: Variáveis de ambiente globais para os testes

### Variáveis de Ambiente

As variáveis de ambiente podem ser definidas em:

1. **cypress.env.json** - Configuração local (não versionada)
2. **process.env** - Variáveis do sistema operacional
3. **Flag --env** - Passadas na linha de comando
4. **cypress.config.js** - Definidas no arquivo de configuração

## Estrutura de Testes

### Page Objects

Utilizamos o padrão Page Object Model para manutenibilidade e reutilização de código. Cada página ou componente principal deve ter um arquivo correspondente em `cypress/support/pages/`.

```javascript
// Exemplo de uso
import { HomePage } from '../support/pages/HomePage';

describe('Home Page', () => {
  it('Deve validar elementos na página inicial', () => {
    HomePage.visit();
    HomePage.validateTitle();
  });
});
```

### Actions

Ações reutilizáveis são centralizadas em `cypress/support/actions/` para promover código limpo e DRY (Don't Repeat Yourself).

### Fixtures

Dados de teste são armazenados em arquivos JSON dentro de `cypress/fixtures/`, organizados por ambiente quando necessário:

```
fixtures/
├── users.json
├── products.json
└── scenarios/
    └── checkout.json
```

## Desenvolvimento

### Adicionar Novo Teste

1. Crie um arquivo em `cypress/e2e/` com sufixo `.spec.cy.js`
2. Implemente o teste utilizando Page Objects e Actions
3. Utilize fixtures para dados de teste

### Adicionar Comando Customizado

Editando `cypress/support/commands.js`:

```javascript
Cypress.Commands.add('customCommand', (param) => {
  // Implementação
});
```

### Debug

Para debugging durante execução:

```javascript
cy.pause(); // Pausa a execução
cy.debug(); // Imprime informações no console
```

Ou utilize `npx cypress open` para debug interativo com visualização em tempo real.

## Integração Contínua

Este projeto está pronto para integração com pipelines CI/CD. Execute:

```bash
npx cypress run --headless --spec "cypress/e2e/**/*.spec.cy.js"
```

## Troubleshooting

### Variáveis de Ambiente não Carregam

Verifique se:
- O arquivo `.env` existe na raiz do projeto
- As variáveis estão sendo exportadas corretamente
- O formato do comando está correto para seu shell

### Testes Instáveis

- Revise timeouts em `cypress.config.js`
- Aumente o tempo de espera em comandos específicos: `cy.get(selector, { timeout: 10000 })`
- Verifique se os seletores CSS/XPath são únicos e estáveis

### Problemas com Tab Navigation

Este projeto inclui utilitário especializado para navegação entre abas. Consulte `cypress/support/utils/tabNavigation.js` para detalhes.

## Contribuição

Para contribuir com melhorias:

1. Crie uma branch para sua feature (`git checkout -b feature/descricao`)
2. Commit suas mudanças (`git commit -am 'Descrição da mudança'`)
3. Push para a branch (`git push origin feature/descricao`)
4. Abra um Pull Request

## Autor

**Pedro Ricardo**

## Licença

ISC

## Recursos Adicionais

- [Documentação Cypress](https://docs.cypress.io)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Page Object Model Pattern](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)

---

**Última atualização:** Maio de 2026
