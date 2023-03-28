function getCep(e){
    let cep = e.value
    var url = `https://viacep.com.br/ws/${cep}/json/`
    console.log(url)
    
    fetch(url)
    .then(response => response.jason()) {
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