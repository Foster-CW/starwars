
## Visão Geral

Este aplicativo é uma aplicação React que consome a API SWAPI (Star Wars API) para exibir uma lista de personagens de Star Wars. O usuário pode filtrar personagens com base em seu planeta de origem e carregar mais personagens conforme necessário.

## Estrutura do Projeto

O projeto é dividido nos seguintes componentes principais:

-   **App**: O componente principal que gerencia o estado e coordena a renderização dos outros componentes.
-   **CharacterList**: Componente responsável por renderizar a lista de personagens.
-   **CharacterItem**: Componente que exibe os detalhes de um único personagem.
-   **FilterNavigation**: Componente que fornece a interface de filtro para selecionar personagens com base no planeta de origem.

## Configuração e Execução do Projeto

### Pré-requisitos

-   Node.js (v14 ou superior)
-   npm ou yarn

### Passos para Executar o Projeto

1.  **Clonar o Repositório**
    
    Copiar código
    
    `git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio` 
    
2.  **Instalar Dependências**
    
    Usando npm:
    
    Copiar código
    
    `npm install` 
    
    Ou usando yarn:
    
    Copiar código
    
    `yarn install` 
    
3.  **Executar o Aplicativo**
    
    Usando npm:
    
    Copiar código
    
    `npm start` 
    
    Ou usando yarn:
    
    Copiar código
    
    `yarn start` 
    
    O aplicativo estará disponível em `http://localhost:3000`.
    

### Executar Testes

Para executar os testes, use o comando:

Usando npm:

Copiar código

`npm test` 

Ou usando yarn:

Copiar código

`yarn test` 

### Descrição dos Componentes

#### App.js

O componente principal que gerencia o estado dos personagens e planetas. Faz a requisição inicial para a API SWAPI para buscar personagens e planetas.

#### CharacterList.js

Recebe uma lista de personagens e renderiza um `CharacterItem` para cada personagem.

#### CharacterItem.js

Renderiza os detalhes de um personagem específico. Faz uma requisição para buscar o nome do planeta de origem do personagem.

#### FilterNavigation.js

Renderiza um elemento de seleção que permite ao usuário filtrar personagens com base no planeta de origem.

## Detalhes da Implementação

### Gerenciamento de Estado

O estado é gerenciado no componente `App` usando o hook `useState`. Os dados são buscados da API SWAPI utilizando o hook `useEffect`.

### Mocking da API para Testes

Os testes utilizam `jest` para mockar as respostas da API SWAPI. Isso é feito para garantir que os testes sejam consistentes e não dependam da disponibilidade da API real.

## Deploy

[Desafio FrontEnd](https://starwars-nine-theta.vercel.app/)

## Conclusão

Este documento fornece uma visão geral de como o aplicativo Star Wars foi projetado, como configurá-lo, executá-lo e testar o código. Para contribuições ou problemas, sinta-se à vontade para abrir uma issue ou enviar um pull request no repositório do GitHub.
