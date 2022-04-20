
let matriz =  matrizMap() // tamanho matriz 10x10
let matrizTela = matrizMap();
let stringMatriz = '';

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
                        return false;
                }else {
                    y += direcao1[1]
                    if(y >= 0 && x <= 9 && matriz[x][y] === 0){
                        matriz[x][y] = embarcacao[i][2];
                    }else
                        return false;
                }
            }
        }
    }

    return true;
}
var cont = 0 ;
//posicionarEmbarcacoes(embarcacao);

while(true){
    //cont++
    //console.log(cont)
    if(!result)
        var result = posicionarEmbarcacoes(embarcacao);
    else{
        console.log(matriz);
        break;
    }
}
var pontErro = 0;
var pontAcerto = 0;
var flagAcho = false;

while(true){

    var x = Number(prompt('Digite o x de 0-9: '));
    var y = Number(prompt('Digite o y de 0-9: '));

    if(x === 'p' || y === 'p')
        break;

    for(let i = 0; i < embarcacao.length; i++){
        if(matriz[x][y] == embarcacao[i][2]){
            alert('if achou');
            matrizTela[x][y] = matriz[x][y];
            flagAcho = true;
        }
    }

    if(flagAcho){
        flagAcho = false;
        pontAcerto++
    }else    
        pontErro++

    for(let i = 0; i < matrizTela.length; i++){
        for(let j = 0; j < matrizTela[i].length; j++){
            stringMatriz += matrizTela[i][j];
        }
        stringMatriz += '\n';
    }

    alert(stringMatriz);
    alert(matrizTela);
    alert(matriz);
    alert(`erro ${pontErro}, acerto ${pontAcerto}`);
    stringMatriz = '';
}



