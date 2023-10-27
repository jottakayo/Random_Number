<h1>Projeto Random Game 🚀</h1>
<br>

Este é o projeto Front e Back-End de um jogo que gera números aleatórios entre 1 e 50, onde os usuários podem dar **Palpites**, bem como ter a resposta do seu **palpite** em formato de pista para que acerte o numero.
<br>

O projeto foi desenvolvido com funcionalidades de manipulação do **DOM**(Modelo de Objeto de Documento), que é a estruturada de um documento HTML e o JavaScript pode manipular de forma dinâmica, utilizado para acessar e modificar elementos HTML, permitindo interações do usuário com a página.

<h2>Conteúdo</h2>

<h3>Front-end</h3>

* [HTML5](#HTML5)🖌️
* [CSS4](#CSS4)📝

<h3>Back-end</h3>

* [JavaScript](#JavaScript)

<h2>HTML5</h2>

O projeto utiliza linguagem de marcação HTML5 para definir elementos como titulo,parágrafos, input para a interação com o usuário, imagens e outros tipos de conteúdo. O navegador interpreta o arquivo **index.html**  para exibir o conteúdo da pagina web para outros usuários.
Aqui você pode ver melhor o uso das regras HTML [W3school](https://www.w3schools.com/html/) e meu código utilizando a linguagem de marcação HTML5 [index.html](https://github.com/jottakayo/Random_Number/blob/main/RandomNumber/index.html).

<h2>CSS4</h2>

Em meu projeto o **CSS** cria um layout flexível com um contêiner principal que contém um botão e um **input** nele. O botão e o **input** são estilizados com cores e formas. As imagens dentro do contêiner são dimensionadas para caber na largura e na altura do contêiner que criei. As informações dentro do contêiner são estilizadas com um texto azul e um título. Os títulos e subtítulos são estilizados com fontes diferentes.


<h2>JavaScript</h2>

O back-end do projeto é composto pela a alteração do DOM do HTML, que utiliza de **SCRIPTS** javascript para isso, que responde ao numero escolhido pelo usuário e responde-o com uma dica de como acertar o **numero** **aleatório**.

<h3>Técnicas utilizadas</h3>

* **Declaração de variáveis globais:** As variáveis <code>listNumber</code>, <code>attempts</code> e <code>secretNumber</code> são declaradas globalmente para que possam ser acessadas por todas as funções.

* **Funções:** As funções <code>printText()</code>, <code>checkKick()</code>, <code>generateSecretNumber()</code>, <code>startMessageGame()</code>, <code>cleanKick()</code> e <code>reloadGame()</code> são usadas para dividir o código em blocos de código reutilizáveis.

* **querySelector:** A função <code>querySelector()</code> é usada para encontrar o elemento HTML com o seletor CSS especificado.

* **innerHTML:** A propriedade <code>innerHTML</code> é usada para alterar o conteúdo HTML de um elemento.

* **Math.random():** A função <code>Math.random()</code> é usada para gerar um número aleatório.

* **parseInt():** A função <code>parseInt()</code> é usada para converter uma string em um número inteiro.

* **includes:** O método <code>includes()</code> é usado para verificar se um determinado valor está na lista de um array.

* **push:** O método <code>push()</code> é usado para adicionar um elemento na lista de um array.

