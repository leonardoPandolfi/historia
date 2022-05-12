var nomePerso = prompt('Digite o nome do personagem principal: ')

var conteudoA = `<img src='imagens/b.jpg' /> <h2>Inicio</h2> <p>Um robo abandonado no meio do deserto chamado ${nomePerso} está em apuros. ${nomePerso} acordou no meio do deserto com pouca bateria, não se lembrava como foi parar ali, então levantou rapidamente e foi em direção ao sol, até chegar em uma cidade abandonada, e aproveitou para arrumar o seu braço com algumas sucatas que havia no local.</p> <button onclick='carregarConteudo(conteudoB1)'>História 1</button> <button onclick='carregarConteudo(conteudoB2)'>História 2</button>`;

var conteudoB1 = `<img src='imagens/i.jpg' /> <h2>Meio</h2>  <p>${nomePerso} estava passando pela cidade e viu um humano com um tipo de controle na mão, se aproximou em silencio e pegou o humano pelo pescoço e disse: </p> 
<p>- Oque aconteceu nessa cidade? Me fale agora! <br>
- Calma ${nomePerso}, onde você estava? <br>
- Como você sabe meu nome?<br>
- Eu te criei, meu nome é Rox. Estava tentando arrumar o seu controle, como isso é possivel? Você está se mexendo e pensando sozinho!<br>
- Eu acordei no meio do deserto e não me lembro de nada. Aliás, por que tem um gato aqui?<br>
- Esse é o Mike, meu gato. Ele não é um gato normal, ele era um humano a muito tempo atrás.</p>

<p> ${nomePerso} soltou Rox, pisou no controle e quebrou. <br><br>

- Eu não confio em você, vou seguir meu caminho sozinho.<br>
- ${nomePerso}, você tem uma marca de baixo do seu pé escrito Rox, confia em mim, precisamos derrotar Lex, ele acabou com essa cidade em um piscar de olhos, Mike me salvou com uma de suas funções, e você era o único robo aqui, por isso sobreviveu.<br><br>
    ${nomePerso} olhou para de baixo do seu pé, e estava escrito Rox.<br><br>
- Onde Lex está, e o que ele é?<br>
- Ele foi pra proxima cidade, ele é um robo independente, ninguem o criou, e ele não quer mais robos a não ser ele, por isso ele está matando todos que podem criar robos, essa cidade é famosa por ter os melhores cientistas, e ele acabou com todos.<br>
- Vamos atrrás dele, suba em mim.<br>
    Rox, Mike e ${nomePerso} foram correndo para a proxima cidade.<br><br>

Chegando perto avistaram Lex, parado em um circulo, flutuando em cima da cidade.</p>

<button onclick='carregarConteudo(conteudoC1)'>Final 1</button> <button onclick='carregarConteudo(conteudoC2)'>Final 2</button> <button onclick='carregarConteudo(conteudoA)'>Voltar</button>`;

var conteudoC1 = `<img src='imagens/e.png' /> <h2>Final</h2>
 <p>- ${nomePerso}, ele fez aquilo da última vez e acabou com a primeira cidade, faça alguma coisa. Disse Rox.<br><br>
 ${nomePerso} lançou um míssel em Lex, e parando o processo para acabar com a cidade.<br><br>
 Lex se virou e disse:<br><br>
 - ${nomePerso}, como você está vivo?<br>
 - Ele é o meu robo, não vai morrer fácil. Disse Rox.<br><br>
 Lex avançou sobre ${nomePerso}, com uma lâmina para acabar com a luta ali mesmo.<br><br>
 ${nomePerso} desviou e lançou outro míssel nele, e deu uma sequencia de socos e chutes.<br><br>
 Lex estava perdendo a luta, então recuou e deu um pulo muito alto, e lançou um bombardeio na cidade, acabando com todos os humanos e caindo no chão sem bateria.<br><br>
 - ${nomePerso}, corre, termine com ele! Disse Rox.<br><br>
 ${nomePerso} destruiu Lex.<br><br>
 -Muito obrigado por tudo ${nomePerso}, mas não posso te deixar viver, sua espécie acabou com duas cidades dos mais inteligentes seres humanos. Disse Rox.<br>
 - Oque? Eu te salvei. Disse ${nomePerso}, ficando fraco.<br>
 - Nunca confie em estranhos. Adeus! Disse Rox.</p> <br>

<button onclick='carregarConteudo(conteudoB1)'>Voltar</button>`;

var conteudoC2 = `<img src='imagens/d.jpg'/> <h2>Final</h2> 
<p>- ${nomePerso}, ele está fazendo um ritual para bombardear a cidade, vai pra cima dele! Disse Rox.<br><br>

${nomePerso} deixou Rox e Mike no chão e voou até Lex.<br><br>

- Pare agora Lex, você não vai destruir mais uma cidade, eu não vou deixar. Disse ${nomePerso}.<br>

- Como você está vivo? Disse Lex.<br>

- Eu não sei, mas vou te impedir! Disse ${nomePerso}.<br><br>

${nomePerso} ativou sua lâmina do braço e voou até Lex mirando em seu peito. Lex desviou do ataque, mas parou o processo para destruir a cidade.<br><br>

Os robos travaram uma luta que durou cerca de 30 minutos, e quando Lex ia dar o golpe final, Mike salvou ${nomePerso} fazendo uma espécie de aura mágica e dando forças para ele.<br><br>

${nomePerso} finalizou Lex, mas Mike se foi após usar aquele poder.<br><br>

A cidade inteira foi salva por ${nomePerso} e Mike.<br><br>

Rox consertou ${nomePerso} e se preparam para uma próxima visita de um robo estranho que quer dominar tudo!</p> 

<button onclick='carregarConteudo(conteudoB1)'>Voltar</button>`;

var conteudoB2 = `<img src='imagens/a.jpg' /> <h2>Meio</h2>  

<p>${nomePerso} avistou um controle jogado no chão no meio de uma casa e aproximou-se. No controle estava escrito ROX, e tinha uma figura de um robo sinalizando em vermelho o braço danificado. <br><br>
${nomePerso} lembrou de seu criador, Rox, que andava com um gato chamado Mike. Guardou o controle e foi à procura dos seus amigos.<br><br>
A cidade estava deserta, a cidade dos cientistas mais renomados do mundo. Então ${nomePerso} foi para a próxima cidade.<br><br>


${nomePerso} chegou na cidade e um robo estava com Mike e Rox nas costas desacordado, no topo  da cidade parado.<br><br>
${nomePerso} foi até ele e perguntou quem ele era.<br><br>

- Meu nome é Lex, e eu sou um robo sem dono, e estou na minha missão de acabar com todos os humanos que fazem robos.<br>

- Porque você quer isso? Disse ${nomePerso}.<br>

- Como você está se mexendo sem Rox estar te controlando? Isso é impossivel. Disse Lex.<br><br>

${nomePerso} correu até Lex e pegou em suas pernas, girou ele e jogou longe, e atirou 2 mísseis em seu peito. Resgatou seus amigos que estavam desacordados.<br><br>

- Você não morreu na explosão? Disse Lex muito fraco.<br>

- Não, acho que o Mike me protegeu, e protegeu Rox ao mesmo tempo. Disse ${nomePerso}.<br>

- Oque esse gato é? Disse Lex.<br>

- Ele é exatamente isso, um guardião dos robos.</p> 

<button onclick='carregarConteudo(conteudoC3)'>Final 1</button> <button onclick='carregarConteudo(conteudoC4)'>Final 2</button> </button> <button onclick='carregarConteudo(conteudoA)'>Voltar</button>` ;

var conteudoC3 = `<img src='imagens/h.jpg'/> <h2>Final</h2> 
<p> ${nomePerso} foi andando lentamente até Lex, apontou seu braço para ele e abriu uma lâmina. <br><br>

- Esse é o seu fim. Disse ${nomePerso}.<br>

- Não faça isso irmão! Disse Lex.<br>

- Você não me deu escolha. Disse ${nomePerso} finalizando Lex.<br><br>

${nomePerso} correu para ver seus amigos, e levou Rox para o hospital mais próximo, mas infelizmente seu companheiro não resistiu.<br><br>

Mike sobreviveu e se juntou ao interior de ${nomePerso}, que agora seria um Robo independente, sem controles e que preza à vida dos humanos.<br><br>
Ele virou um tipo de mascote da cidade, que procura ajudar a todos!</p>

<button onclick='carregarConteudo(conteudoB2)'>Voltar</button>`;

var conteudoC4 =  `<img src='imagens/g.jpg'/> <h2>Final</h2> 

<p>Lex se recuperou rapidamente dos ataques de ${nomePerso} e disparou fumaça em ${nomePerso}, voou até Mike e finalizou o gato, guardião dos robos.<br><br>

Rox gritou desesperado e ${nomePerso} saiu da fumaça rapidamente bombardeando Lex pelas costas com 5 mísseis. Lex ficou ajoelhado no chão de costas para ${nomePerso}.<br><br>

- Esse é o seu fim. Disse ${nomePerso}.<br>

- Pelo menos eu levei dois comigo. Disse Lex.<br>

- Oque você quer dizer com isso? Desse ${nomePerso}.<br>

- Adeus Rox! Disse Lex.<br><br>

Lex colocou uma bomba em Rox e ativou, matando Rox e morrendo logo em seguida.<br><br>

${nomePerso} ficou muito mal por ter perdido seus amigos naquele dia, depois de alguns dias sem Rox, ele ficou em um lugar escondido onde passaria o resto dos seus dias, já que o único que sabia fazer com que ele funcionasse era Rox.<br><br>

Ele ficou completamente descarregado e está escondido até os dias de hoje!</p>

<button onclick='carregarConteudo(conteudoB2)'>Voltar</button>`;

var elemento = document.getElementById("conteudo");


function carregarConteudo(conteudo) {
    elemento.innerHTML = conteudo;
}

function mudarEstilos() {
    //Dentro dessa função, escreva o codigo para alterar o estilo do elemento com o id "text". 
    //A cor do texto deve ser verde, o tamanho do texto deve ser 15px e a fonte escolhida deve ser Arial;
    //Escreva sua resposta no espaço abaixo.  
    //Um exemplo de alteração de estilos por javascript: text.style.fontFamily = "Comic Sans MS";
    // font-family: banana;

    text.style.fontFamily = "Arial";
    text.style.color = "green";
    text.style.padding = "20";
    text.style.fontSize = "15px";
    text.style.backgroundColor = "#333";

}

carregarConteudo(conteudoA)

var btn = document.getElementById("btn");

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})