/**
 * Gerador de listas via JS, usando Scroll Infinito
 */
let list = document.getElementById("tweetlist")
let html = 
`<li>
<img src="./assets/user.png" />
<div>
  <h2>UserName <span>@twitterusername</span></h2>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Delectus tempora voluptates numquam esse!
  </p>
  <a href="">Ver mais no twitter</a>
</div>
</li>`

/**
 * Função para verificar o fim da página, gerando assim mais N listas.
 * Criada usando JQuery
 * Retorna null
 */
$(window).on("scroll", function() {
    let scrollHeight = $(document).height();
    let scrollPos = $(window).height() + $(window).scrollTop();

    if((scrollHeight - scrollPos) / scrollHeight < 0.05){
        for(let i = 0; i < 10; i++){
            list.innerHTML += html;
        }
    }
});