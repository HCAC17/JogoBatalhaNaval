
let matriz = [] // tamanho matriz 10x10

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
    for(let x = 0; x < 10; x++){
        matriz[x] = [];
        for(let y = 0; y < 10; y++){
            matriz[x][y] = 0;
        }
    }
    
    return matriz
}

//console.log(matrizMap());

function numeroAleatorio(max){
    let randon = Math.floor(Math.random() * max)
    return randon;
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
    matrizMap();

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

var cont = 0;

while(true){
    //cont++
    //console.log(cont)
    if(!result)
        var result = posicionarEmbarcacoes(embarcacao);
    else{
        console.log(matriz, result);
        break;
    }
}

for(var i = 0; i < embarcacao.length; i++){
    console.log(embarcacao[i][0])
}

//console.log(posicionarEmbarcacoes(portaAvioes))
//console.log(posicionarEmbarcacoes(submarino))
//console.log(posicionarEmbarcacoes(destroier))
//console.log(posicionarEmbarcacoes(bote))


