function getCep(){
    fetch('https://viacep.com.br/ws/61631250/json/')
    .then(function(response) {
       return response.json();
    })
    .then(function(data){
     return console.log(data);
    })
}
// getCep();


let estado = document.getElementById("inputEstado").value;

function getEstado(){
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/distritos')
    .then(function(response) {
       return response.json();
    })
    .then(function(data){
     return console.log(data);
    })
}

 getEstado();