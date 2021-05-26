#Explorando o this.

O que é o this?

É um palavra-chave que vai referenciar o escopo atual de execução.
Sempre vai retornar um objeto que dependendo do escopo e das regras que se aplica no momento, muda.
No navegador, o this vai retorna o objeto window: Window {window: Window, self: Window, document: document, name: "", location: Location, …}.

O windows é o objeto que existe no escopo global da aplicação. Todos objetos, metodos e propriedades estão "pendurados".  Esse objeto varia de acordo com ambiente que a aplicação está sendo execudada. No nodejs é o global e no navegador é o objeto window que representa a janela do navegador.

 sobre var, vide exemplo 3 no js.index.

const e let não são inseridos no objeto window. Vide exemplo 4.

O valor do this dependendo contexto de invocação que está usando o this. O valor do this vai mudar dependendo de como a função é executada e não  do lugar que ela é declarada.

no exemplo 


