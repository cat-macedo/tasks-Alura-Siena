var botaoAdicionar = document.querySelector(".botao");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector(".form-adiciona");

    // var usuario = obtemDadosDoForm(form); 
    
    var nome = form.nome.value;
    var sobrenome = form.sobrenome.value;
    var email = form.email.value;
    var cep = form.cep.value;

    // var usuarioTr = montaTr(usuario);

    if(nome.length == 0){
        var ul = document.querySelector(".mensagens-erro");
        var li = document.createElement("li");
        li.textContent = "O nome é obrigatório!";
        ul.appendChild(li);
    }

    if(sobrenome.length == 0){
        var ul = document.querySelector(".mensagens-erro");
        var li = document.createElement("li");
        li.textContent = "O sobrenome é obrigatório!";
        ul.appendChild(li);
    }

    if(email.length == 0){
        var ul = document.querySelector(".mensagens-erro");
        var li = document.createElement("li");
        li.textContent = "O email é obrigatório!";
        ul.appendChild(li);
    }

    if(cep.length == 0){
        var ul = document.querySelector(".mensagens-erro");
        var li = document.createElement("li");
        li.textContent = "O CEP é obrigatório!";
        ul.appendChild(li);
        return;
    }
    
    var nomeTd = document.createElement("td");
    nomeTd.textContent = nome;
    nomeTd.classList.add("info-nome");
    letras1 = nomeTd.textContent.length;

    var sobrenomeTd = document.createElement("td");
    sobrenomeTd.textContent = sobrenome;
    sobrenomeTd.classList.add("info-sobrenome");
    letras2 = sobrenomeTd.textContent.length;

    var emailTd = document.createElement("td");
    emailTd.textContent = email;
    emailTd.classList.add("info-email");

    var tdLetras = document.createElement("td");
    tdLetras.textContent = calculaLetras(letras1, letras2);
    tdLetras.classList.add("info-letras"); 

    var tdEndereco = document.createElement("td");
    tdEndereco.textContent = cep;
    tdEndereco.classList.add("info-endereco");

    var usuarioTr = document.createElement("tr");
    usuarioTr.classList.add("usuario");
    usuarioTr.appendChild(tdLetras);
    usuarioTr.appendChild(nomeTd);
    usuarioTr.appendChild(sobrenomeTd);
    usuarioTr.appendChild(emailTd);
    usuarioTr.appendChild(tdEndereco);

    var tabela = document.querySelector(".tabela");
    tabela.appendChild(usuarioTr);

    form.reset();

    var mensagensErro = document.querySelector(".mensagens-erro");
    mensagensErro.innerHTML = "";

});



// function exibeMensagens (listaErros){
//     var ul = document.querySelector(".mesagens-erro")

//     listaErros.forEach(function(erro){
//         var li = document.createElement("li");
//         li.textContent = erro;
//         ul.appendChild(li);
//     });
// }

// function obtemDadosDoForm(form){
//     var usuario = {
//         nome: form.nome.value,
//         sobrenome: form.sobrenome.value,
//         email: form.email.value
//     }
// } return usuario;


// function montaTr(usuario){
//     var usuarioTr = document.createElement("tr");
//     usuarioTr.classList.add("usuario");

//     var nomeTd = document.createElement("td");
//     nomeTd.classList.add("info-nome");

//     var sobrenomeTd = document.createElement("td");
//     sobrenomeTd.classList.add("info-sobrenome");

//     var emailTd = document.createElement("td");
//     emailTd.classList.add("info-email");

//     var letrasTd = document.createElement("td");
//     letrasTd.classList.add("info-letras");

//     nomeTd.textContent = usuario.nome;
//     var letras1 = nomeTd.textContent.length;

//     sobrenomeTd.textContent = usuario.sobrenome;
//     var letras2 = sobrenomeTd.textContent.length;

//     emailTd.textContent = usuario.email;
    
//     letrasTd.textContent = calculaLetras(letras1, letras2);

//     usuarioTr.appendChild(nomeTd);
//     usuarioTr.appendChild(sobrenomeTd);
//     usuarioTr.appendChild(emailTd);
//     usuarioTr.appendChild(letrasTd);

//     return usuarioTr;
// }
