# O que vem aqui?

Componentes a serem compartilhados por **TODA A APLICAÇÃO**.
Usou em mais de uma página? É Componente!!!

Componentes dessa pasta devem ter apenas props e estados (sem lógicas de chamada de API, redux, etc).
Um componente com lógica deve estar na pasta `pages`.

A ideia aqui é termos componentes reutilizáveis entre projetos, que sejam independentes e usados apenas pra interface.

_Exemplos_: botões, formulários, cards, ...
 

# E se eu precisar de um componente que só vai ser usado em uma página/tela?

Vamos supor que temos um componente ForgotPasswordModal que deve ser usado apenas na página de Authentication.
Nesse caso esse componente vai estar no folder de pages e vamos estruturar assim

```
pages
│
│
└───Authentication
    │   index.ts
    │   style.ts
    │
    └───ForgotPasswordModal
            index.ts
            style.ts

```
