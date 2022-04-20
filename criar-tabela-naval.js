var objTabela = document.getElementById('tabela');

var elThead = document.createElement('thead');
var elTr = document.createElement('tr');

objTabela.appendChild(elThead)

for(let i = 0; i < 10; i++){
    elThead.appendChild(elTr);
}