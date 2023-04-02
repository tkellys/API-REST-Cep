async function getCep() {

    let cep = document.getElementById('inputCep');
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
          
        }
        var cidade = document.getElementById('inputLocalidade');
        var logradouro = document.getElementById('inputLogradouro');
        var bairro = document.getElementById('inputBairro');
        var UF = document.getElementById('inputEstado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        bairro.value = consultaCEPConvertida.bairro;
        UF.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;

    } catch (erro) {
        
    }
}

async function getEstado(){
    var listaUF = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
    var listaUFConvertida = await listaUF.json();
    let estado = document.getElementById("inputEstado");
    let siglas = "";
    listaUFConvertida.forEach(municipio => {
        siglas = siglas + `<option>${municipio.sigla}</option>`;        
    });
    estado.innerHTML = siglas;
}



getEstado();// vou deixar pq a pagina ja inicia com a lista carregada.

// getCep(); // nao precisa chamar pq vai ser chamado via html com o metodo onblur() quando eu inserir o cep e tirar o clique




// //focusout - evento de clique fora do campo pelo javascript
// cep.addEventListener('focusout', () => getCep(cep.value));