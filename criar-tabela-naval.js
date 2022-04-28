
var divQuadrados = document.getElementById('divQuadrados');

for(let j = 0; j < 10; j++){
    var coluna = document.createElement('div');
    divQuadrados.appendChild(coluna);
    coluna.setAttribute('id', `${j}`);
    for(let i = 0; i < 10; i++){
        var quadrado = document.createElement('div');
        //var coordenadas = document.createTextNode(`x:${i},y:${j}`)
        //console.log(i);

        quadrado.setAttribute('class', 'quadrado');
        quadrado.setAttribute('id', `${i}`);
        quadrado.setAttribute('onclick', `funcao(${i},${j})`)
        //quadrado.appendChild(coordenadas);
    
        coluna.appendChild(quadrado);
    }
    
}
//console.log(divQuadrados.children[0].children[0].innerHTML)


