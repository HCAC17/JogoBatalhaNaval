
let matriz =  matrizMap() // tamanho matriz 10x10
let matrizTela = matrizMap();
let matrizTelaIA = matrizMap();


// embarcações 
// embarcação = [tamanho, quantidade]
let portaAvioes = [4,1,'p'];
let submarino = [3,3,'s'];
let destroier = [2,3,'d'];
let bote = [1,2,'b'];


let embarcacao = [
    [4,1,'p'],
    [3,3,'s'],
    [2,3,'d'],
    [1,2,'b'],  
]

var soma = 0;

for(let i = 0; i < embarcacao.length; i++){
    soma += embarcacao[i][0] * embarcacao[i][1];
    //console.log(soma)
}

// cria nosso mapa que é uma matriz
function matrizMap(){
    let montarMatriz = [];
    for(let x = 0; x < 10; x++){
        montarMatriz[x] = [];
        for(let y = 0; y < 10; y++){
            montarMatriz[x][y] = 0;
        }
    }
    
    return montarMatriz;
}

//console.log(matrizMap());

function numeroAleatorio(max){
    let random = Math.floor(Math.random() * max)
    return random;
}
//console.log(numeroAleatorio(4));

function direcao(){
    let numeroDirecao = [];
    let direcao = numeroAleatorio(4);

    if(direcao === 0 || direcao === 2)
        numeroDirecao[1] = -1;
    else if(direcao === 1 || direcao === 3)
        numeroDirecao[1] = 1
    if(direcao === 0 || direcao === 3)
        numeroDirecao[0] = 'x';
    else if(direcao === 1 || direcao === 2)
        numeroDirecao[0] = 'y';

    return numeroDirecao;
}
//console.log(direcao());

function posicionarEmbarcacoes(embarcacao){
    matriz = matrizMap();
    var retorno = []
    for(let i = 0; i < embarcacao.length; i++){
        for(let j = 0; j < embarcacao[i][1]; j++){
            var direcao1 = direcao()
            var x = numeroAleatorio(10);
            var y = numeroAleatorio(10);
    
            for(let k = 0; k < embarcacao[i][0]; k++ ){
               
                if(direcao1[0] === 'x'){
                    x += direcao1[1]
                    if(x >= 0 && x <= 9 && matriz[x][y] === 0){
                        matriz[x][y] = embarcacao[i][2];
                    }else
                        return retorno = [matriz, false];
                }else {
                    y += direcao1[1]
                    if(y >= 0 && x <= 9 && matriz[x][y] === 0){
                        matriz[x][y] = embarcacao[i][2];
                    }else
                        return retorno = [matriz, false];
                }
            }
        }
    }

    return retorno = [matriz, true];
}
var cont = 0 ;
//posicionarEmbarcacoes(embarcacao);
var result = posicionarEmbarcacoes(embarcacao);
while(true){
    //cont++
    //console.log(cont)
    if(!result[1])
        result = posicionarEmbarcacoes(embarcacao);
    else{
        break;
    }
}

var result1 = posicionarEmbarcacoes(embarcacao);
while(true){
    //cont++
    //console.log(cont)
    if(!result1[1])
        result1 = posicionarEmbarcacoes(embarcacao);
    else{
        break;
    }
}

var mapaJogador = result[0];
var mapaIA = result1[0];

//console.log(mapaJogador, mapaIA);

var pontErro = 0;
var pontAcerto = 0;
var flagAcho = false;

// variaveis de controle da ia
var pontErroIA = 0;
var pontAcertoIA = 0;
var flagAchoIA = false;

var funcao = function(x,y){
    console.log(x,y)

    for(let i = 0; i < embarcacao.length; i++){
        if(mapaJogador[x][y] == embarcacao[i][2]){
            matrizTela[x][y] = mapaJogador[x][y];
            flagAcho = true;
        }
    }

    if(flagAcho){
        flagAcho = false;
        pontAcerto++

        var txt = mapaJogador[x][y];
        console.log(txt)
        
        // muda a img no html
        divQuadrados.children[y].children[x].style.backgroundImage = 'url(./assets/img/acertojpg.png)'
        divQuadrados.children[y].children[x].innerHTML = txt

    }else{
        // muda a img no html para uma bomba
        divQuadrados.children[y].children[x].style.backgroundImage = 'url(./assets/img/bomb.png)'

        pontErro++
        
    }

    if(pontAcerto >= soma){
        clearInterval(interval)
        alert("GANHOU!!!!!!!!!!!!!!!!")
    }
}

setTimeout(function(){
    var x = numeroAleatorio(10);
    var y = numeroAleatorio(10);
    var acer = 0;

    var interval = setInterval(function(){
        
        
        
        y = numeroAleatorio(10);
        x = numeroAleatorio(10);
        
        for(let i = 0; i < embarcacao.length; i++){
            if(mapaIA[x][y] == embarcacao[i][2]){
                flagAchoIA = true;
            } 
        }
    
        if(flagAchoIA){
            flagAchoIA = false;

            pontAcertoIA++

            var txt = mapaIA[x][y];
            
            // muda a img no html
            divQuadradosIA.children[x].children[y].style.backgroundImage = 'url(./assets/img/acertojpg.png)'
            divQuadradosIA.children[x].children[y].innerHTML = txt
    
        }else{
            // muda a img no html para uma bomba
            divQuadradosIA.children[x].children[y].style.backgroundImage = 'url(./assets/img/bomb.png)'
    
            pontAcertoIA++
            
        }
    
    },500)
}, 1000);



