1. Utilizar versão do Node 16.17.1

### Projetos


#### Todos os projetos

* Adicionamos o typescript em todos os projetos
* tsup -> utilizado para compilar arquivos typescript
  * tsup é preferível pois compila o arquivo tanto para EcmaScript quanto para CommonJS.
  * criar um arquivo de definição de tipagens, arquivo que auxilia nas tipagens.
  * Mais performático

#### Packages
1. Adicionamos um <i>package.json</i> geral, para que possamos englobar os sub-projetos
1.1. `private: true` - pacote não é publicavel no npm
1.2. `workspaces: ['packages/*']` - onde estarão meus sub-repositórios do monorepo
1. adicionamos ao pacote 'react', a `devDependencies: [{ @travessia-ui/tokens: '*' }]` do sub-repositório 'tokens' em qualquer versão. 
2.1. Após isso, ao rodar o `npm i` conseguimos visualizar a pasta node_modules no módulo externo do pacote 'react'. 


##### Tokens
1. Para o projeto do token exportem seus recursos, precisamos indicar no <i>package.json</i> os seguintes itens: 
1.1 `main: dist/index.js` -> Arquivo principal de entrada.
1.2 `module: dist/index.mjs` -> para o uso EcmaScriptModules.
1.3 `types: dist/index.d.ts` -> exclusivamente para definição de tipos.

##### React
1. Para o projeto do token exportem seus recursos, precisamos indicar no <i>package.json</i> os seguintes itens: 
1.1 `main: dist/index.js` -> Arquivo principal de entrada.
1.2 `module: dist/index.mjs` -> para o uso EcmaScriptModules.
1.3 `types: dist/index.d.ts` -> exclusivamente para definição de tipos.
1. Adicionamos aos scripts <code>Build</code> e <code>Dev</code> a flag `--external react`, para que na hora de compilar não se preocupar com a dependencia do React, pois essa vem de fora 'da aplicação hospedeira' do nosso pacote.


##### TsConfig
Utilizado para reunir as configurações de typescript de todos os projetos

1. Após criar as configurações, adicionamos as `devDependencies` em cada sub-repo.
1.1 E adicionamos em cada sub-repo um <i>tsconfig.json</i> extendendo o tsConfig.


#### EslintConfig
Utilizado para reunir as configurações de ESLINT para todos os projetos

1. Após instalar as dependencias do ESLINT. Adicionamos o pacote nos outros sub-repo.
1. Adicionamos o arquivo de configuração do eslint em cada sub-repo e adicionamos a extensão do módulo EslintConfig
1. Adiciona o script `lint` em cada um dos sub-repo.

#### Docs
1. Iniciamos um projeto do storybook `npx sb init --builder @storybook/builder-vite --type react --use-npm`



MDX -> Markdown + JSx

### TurboRepo
1. Utilizamos quando trabalhamos com monorepo.
1.1. Executar scripts em todos os pacotes ao mesmo tempo
1.2. Turbo - Ajuda a acelerar o build da aplicação, em resumo ele faz um cache local e altera apenas o necessário.

#### Passo-a-passo
- Dentro de um arquivo turbo.json.
1. Adicionamos um script de dev no turboRepo e indicamos que ele não guarde cache.
1. Adicionamos um $schema, para o nosso json de configuração ficar com autocomplete.
- Adicionamos no `package.json` do D.S. um script `dev` para rodar o comando do turboRepo `turbo run dev`.
- Adicionamos um script de `build`, no mesmo padrão acima.
- Para configurar o script de build:
1. Adicionamos `outputs`, para indicar as saídas do build dos projetos.
1. Adicionamos `dependsOn`, para indicar que o build de algum dos projetos depende do build de outros projetos, ou seja, ele precisa primeiro executar os projetos que não tem dependência de outros builds.