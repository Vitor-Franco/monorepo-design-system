##### Módulo focado em MonoRepo.

## Mono Repo
Vários projetos dentro de um único repositório (mesma pasta). Utilizamos o monorepo quando os sub-projetos são dependentes entre si.

Quando criamos a pasta 'react' deste projeto, ela dependia totalmente do projeto de 'tokens' e para que não precisemos publicar o projeto de tokens no npm, depois baixar do npm e fazer isso em cada projeto, criamos um monorepo para que cada sub-projeto consiga visualizar um ao outro, sem a necessidade do npm.


## Design System

##### Definição
- É um padrão para toda uma identidade de um projeto. 
- É uma documentação do layout.

O conceito do design system, é utilizar elementos que podem ser compartilhados entre TODOS os projetos da empresa. Ou seja, não pode ser algo específico demais pra um projeto.
Se for específico demais não é um design system, é um UI-KIT.

Exemplos de itens que <ins>podem</ins> não fazer parte de um design system:
1. Cabeçalho
1. Rodapé
1. Sidebar


##### Por quê?
* Reutilização de componentes
* Reutilização de estilos
* Reutilização de funcionalidades
* Reutilização de testes
* Reutilização de documentação

#### Exemplos de Design System
* [Uber](https://baseweb.design/)
* [Apple](https://developer.apple.com/design/human-interface-guidelines/components/all-components)
* [Microsoft](https://www.microsoft.com/design/fluent/)

---
#### Características de um Design System
##### Tokens
Responsável por definir as cores, fontes, espaçamentos, etc. Por exemplo:
1. Cores
1. Tipografia
1. Tamanho de fonte
1. Espaçamento
1. Bordas
1. Sombra
1. Duração das animações
1. Efeitos
1. Opacidade

##### Componentes (core components)
Responsável por definir os componentes que serão utilizados em toda a aplicação. Por exemplo:

1. Botão
1. Input
2.1. Input com erro
2.2. Input com sucesso
2.3. Input desabilitado
2.4. Input com placeholder
2.5. Input com label
1. Checkbox
1. Select
1. Textos Heading (h1, h2, h3, h4, h5, h6)
1. Textos Body (p, span, small, etc)