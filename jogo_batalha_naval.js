
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

var memoriaErro = [];
var memoriaAcerto = [];
var direcao2 = [];
//var memoriaAcertoRecente = [];
var tentativas = 0;
var naoAchouCord = true;
var verificaCord = 0;

var marcarAcertoNoMapa = function(PosX,PosY){
    var txt = mapaIA[PosX][PosY];
    divQuadradosIA.children[PosX].children[PosY].style.backgroundImage = 'url(./assets/img/acertojpg.png)'
    //console.log(PosX,PosY)
    divQuadradosIA.children[PosX].children[PosY].innerHTML = txt
}

var verificaNasMemorias = function(PosX,PosY){
    var cordLocal = true
    while(cordLocal && (verificaCord < memoriaAcerto.length || verificaCord < memoriaErro.length)){
        
        if(verificaCord < memoriaAcerto.length){
            if(memoriaAcerto[verificaCord][0] == PosX && memoriaAcerto[verificaCord][1] == PosY){
                //console.log("suuu")
                cordLocal = false
                return false;
            }
        }
        if(verificaCord < memoriaErro.length){
            if(memoriaErro[verificaCord][0] == PosX && memoriaErro[verificaCord][1] == PosY){
                //console.log("suuu")
                cordLocal = false
                return false;
            }
        }
        
        verificaCord++;
        //console.log(`hi ${verificaCord}`)
    }
    
    verificaCord = 0;
    return true
}

var jogarNovamente = function(PosX,PosY){
    direcao2 = direcao()

    if(direcao2[0] === 'x'){
        if(PosX + direcao2[1] >= 0 && PosX + direcao2[1] <= 9){
            naoAchouCord = verificaNasMemorias(PosX + direcao2[1], PosY)
            verificaSeAcertouOuNao(naoAchouCord, PosX + direcao2[1], PosY)
            //console.log(PosX + direcao2[1])
        }
    }else{
        if(PosY + direcao2[1] >= 0 && PosY + direcao2[1] <= 9){
            naoAchouCord = verificaNasMemorias(PosX, PosY + direcao2[1])
            verificaSeAcertouOuNao(naoAchouCord, PosX,PosY + direcao2[1])
            //console.log(PosY + direcao2[1])
        }
    }
}

var verificaSeTemBarco = function(PosX, PosY){
    for(let i = 0; i < embarcacao.length; i++){
        if(mapaIA[PosX][PosY] == embarcacao[i][2]){
            return true;
        } 
    }
}

var verificaSeAcertouOuNao = function(naoAchouCord, PosX,PosY){
    console.log(PosX, PosY)
    if(naoAchouCord){

        flagAchoIA = verificaSeTemBarco(PosX,PosY) || false
        
        if(flagAchoIA){
            var cordenaA = [PosX,PosY]
            memoriaAcerto.push(cordenaA)
            // muda a img no html
            marcarAcertoNoMapa(PosX,PosY)

            jogarNovamente(PosX,PosY)
            
            flagAchoIA = false
            //pontAcertoIA++
            tentativas++
        }else{
            var cordenaE = [PosX,PosY]
            memoriaErro.push(cordenaE)
            // muda a img no html para uma bomba
            divQuadradosIA.children[PosX].children[PosY].style.backgroundImage = 'url(./assets/img/bomb.png)'
            //pontAcertoIA++
            //console.log(memoriaErro)
            //tentativas++
        }
    }
    //naoAchouCord = true;
}

setTimeout(function(){
    var x = numeroAleatorio(10);
    var y = numeroAleatorio(10);

    var interval = setInterval(function(){

        x = numeroAleatorio(10);
        y = numeroAleatorio(10);
        
        //console.log(x,y)
        naoAchouCord = verificaNasMemorias(x,y) || true

        verificaSeAcertouOuNao(naoAchouCord,x,y)
        
        //console.log(memoriaAcerto,memoriaErro)

    },500)
}, 1000);



