### Cuidados e atenções

É importante lembrar que um DesignSystem precisa ser agnóstico de tecnologia o <ins>máximo possível</ins> (varia com o caso, se for necessário pesquise por [SolidJS](https://www.solidjs.com/)).
Ou seja, devemos utilizar o máximo de recursos de um design system mesmo que estejamos trabalhando em frameworks distintos, como React, Angular ou Vue. 
Justamente por se tratarem de itens globais, como os tokens, que envolvem as cores, espaçamentos e etc. Devem estar disponíveis pra qualquer outra aplicação, indepedente da tecnologia.

### Tokens
Fica num pacote a parte, por se tratar de um item global, agnóstico de tecnologia.

### React
* Adicionamos o pacote <code>React</code> no projeto, todavia os pacotes precisam ser instalados como `devDependencies: []`.
  * Isso porque o usuário que utilizará nosso DesignSystem já terá o pacote React instalado nos seus arquivos, uma vez que estamos construindo os componentes para funcionarem com React.
  * Também para diminiuir o peso do pacote.