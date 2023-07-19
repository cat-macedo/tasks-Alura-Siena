function buscaCep(){
    var cep = document.getElementById('cep').value;
    if(cep != ""){
        var url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function(){
            if(req.status === 200){
                var endereco = JSON.parse(req.response);
                document.getElementById('rua').value = endereco.street;
                document.getElementById('cidade').value = endereco.city;
                document.getElementById('estado').value = endereco.state;
            }
            else if(req.status === 404){
                alert("CEP inválido!");
            }
            else{
                alert("Erro ao fazer a requisição!");
            }
        }
    }
}

var txtCep = document.getElementById('cep');
txtCep.addEventListener("blur", buscaCep);


function regEx(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
      
var msgErro = document.querySelector(".msg-erro");

function validaEmail(email){
    var email = document.getElementById('email').value;

    if(email != ""){
        if(!regEx(email)){
            msgErro.innerHTML = "O email está inválido! Ele precisa conter um '@' e um '.'";
            msgErro.classList.remove("invisivel");
            var teste = document.querySelector(".teste");
            teste.classList.add("label-erro");
            campoEmail.classList.add("campo-erro");
        } else{
            msgErro.classList.add("invisivel");
            campoEmail.classList.remove("campo-erro");
        }
    } else {
        msgErro.innerHTML = "O campo de email não pode estar vazio!";
        msgErro.classList.remove("invisivel");
        var teste = document.querySelector(".teste");
        teste.classList.add("label-erro");
        campoEmail.classList.add("campo-erro");
    }
}

var campoEmail = document.getElementById('email');
campoEmail.addEventListener("blur", validaEmail);