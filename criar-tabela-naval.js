
var divQuadrados = document.getElementById('divQuadrados');
var divQuadradosIA = document.getElementById('divQuadradosIA');


for(let j = 0; j < 10; j++){
    var coluna = document.createElement('div');
    var colunaIA = document.createElement('div');
    coluna.setAttribute('id', `${j}`);
    divQuadrados.appendChild(coluna);
    divQuadradosIA.appendChild(colunaIA);
    for(let i = 0; i < 10; i++){
        var quadrado = document.createElement('div');
        var quadradoIA = document.createElement('div');
        //var coordenadas = document.createTextNode(`x:${i},y:${j}`)
        //console.log(i);

        quadrado.setAttribute('class', 'quadrado');
        quadrado.setAttribute('id', `${i}`);
        quadrado.setAttribute('onclick', `funcao(${i},${j})`)
        //quadrado.appendChild(coordenadas);
        // quadrados da ia
        quadradoIA.setAttribute('class', 'quadrado');
        quadradoIA.setAttribute('id', `${i}`);
       //quadradoIA.setAttribute('onclick', `funcaoIA(${i},${j})`)
    
        coluna.appendChild(quadrado);
        colunaIA.appendChild(quadradoIA);
        
    }
    
}
//console.log(divQuadrados.children[0].children[0].innerHTML)


