# Boas vindas ao repositório do projeto Arte com Pixels!

---

## Requisitos do projeto
---
### 👀

* implementará um editor de arte com pixels.

**Ou seja, dada uma paleta de cores e um quadro composto por pixels, você vai permitir que quem usa consiga pintar o que quiser no quadro!** 👩‍🎨



###  - A página deve possuir uma paleta de quatro cores distintas.

##### As seguintes verificações serão feitas:

- A paleta de cores deve ser um elemento com `id` denominado `color-palette`, ao passo que cada cor individual da paleta de cores deve possuir a `classe` `color`;

- A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca.**;

- Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

- A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores";

- A paleta de cores não deve conter cores repetidas.

### 3 - A cor **preta** deve ser a primeira na paleta de cores.

##### As seguintes verificações serão feitas:

- As demais cores podem ser escolhidas livremente.

### 4 - A página deve possuir um quadro de pixels, com 25 pixels.

##### As seguintes verificações serão feitas:

- O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

- O quadro de "pixels" deve possuir o `id` denominado `pixel-board`, ao passo que cada "pixel" individual dentro do quadro deve possuir a `classe` denominada `pixel`;

- A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;

-  O quadro de "pixels" deve aparecer abaixo da paleta de cores.

### 5 - Cada elemento do quadro de pixels deve possuir 40 _pixels_ de largura e 40 _pixels_ de altura e ser delimitado por uma borda preta de 1 pixel.

##### As seguintes verificações serão feitas:

- O quadro de pixels tem altura e comprimento de 5 elementos;

- 40 pixels deve ser o tamanho total do elemento, incluindo seu conteúdo e excluindo a borda preta, que deve ser criada à parte.

### 6 - Ao carregar a página, a cor **preta** da paleta já deve estar selecionada para pintar os pixels.

##### As seguintes verificações serão feitas:

- O elemento da cor preta deve possuir, inicialmente, a `classe` `selected`;

- Note que o elemento que deverá receber a classe `selected` deve ser um dos elementos que possuem a classe `color`, como especificado no **requisito 2**.

### 7 - Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.

##### As seguintes verificações serão feitas:

- A `classe` `selected` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

- Somente uma das cores da paleta deve ter a `classe` `selected` de cada vez;

- Note que os elementos que deverão receber a classe `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

### 8 - Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.

##### As seguintes verificações serão feitas:

- Ao carregar a página deve ser possível pintar os pixels de preto;

- Após selecionar uma outra cor na paleta, deve ser possível pintar os pixels com essa cor;

- Somente o pixel que foi clicado deverá ser preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.

### 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

##### As seguintes verificações serão feitas:

- O botão deve ter o `id` denominado `clear-board`;

- O botão deve estar posicionado entre a paleta de cores e o quadro de pixels;

- O texto do botão deve ser **"Limpar"**.

## Requisitos Bônus:

### 10 - Faça o quadro de pixels ter seu tamanho definido pelo usuário.

##### As seguintes verificações serão feitas:

- Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de **N** pixels de largura e **N** pixels de altura, onde **N** é o número inserido no input;

 - Ou seja, se o valor passado para o input for 7, ao clicar no botão, vai ser gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);

- O input deve ter o `id` denominado `board-size` e o botão deve ter o `id` denominado `generate-board`;

- O input só deve aceitar número maiores que zero. Essa restrição **deve** ser feita usando os atributos do elemento `input`;

- O botão deve conter o texto "VQV";

- O input deve estar posicionado entre a paleta de cores e o quadro de pixels;

- O botão deve estar posicionado ao lado do input;

- Se nenhum valor for colocado no input ao clicar no botão, mostre um `alert` com o texto: "Board inválido!";

- O novo quadro deve ter todos os pixels preenchidos com a cor branca.

### 11 - Limite o tamanho do mínimo e máximo do board.

##### As seguintes verificações serão feitas:

- Caso o valor digitado no input `board-size` fuja do intervalo de 5 a 50, faça:

  - Valor menor que 5, considerar 5 como padrão;

  - Valor maior que 50, considerar 50 como padrão.

### 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.

##### As seguintes verificações serão feitas:

- A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.

---

## Dicas

- Você pode pesquisar sobre a propriedade `display` do CSS, [especificamente sobre as opções `table`, `table-row` e `table-cell`](https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css) para te ajudar a posicionar os elementos;

- [Que tal](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/) usar um _loop_ para adicionar o mesmo evento em vários elementos? [Ou então](https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/) a técnica de _event bubbling_ combinada com `classList`?

- Se precisar consultar os valores do _CSS_ de um elemento a partir do _JavaScript_, [dê uma olhada aqui](https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp).

- Para alterar alguma propriedade do _CSS_ de um elemento através do _JavaScript_, dê uma olhada no [atributo `style`](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp) do elemento.

- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta `/projetos/pixels-art`.

---

#VQV 🚀
