var usuarios = document.querySelectorAll(".usuario");

for(var i=0; i<usuarios.length; i++){
    var usuario = usuarios[i];

    var primeiroNome = usuario.querySelector(".info-nome");
    var nome = primeiroNome.textContent;
    var letras1 = nome.length;

    var segundoNome = usuario.querySelector(".info-sobrenome");
    var sobrenome = segundoNome.textContent;
    var letras2 = sobrenome.length;

    var totalLetras = calculaLetras(letras1, letras2);
    // console.log(totalLetras);

    var tdLetras = usuario.querySelector(".info-letras");
    tdLetras.innerHTML = totalLetras;
    
}

function calculaLetras(letras1, letras2){
    var totalLetras = 0;
    totalLetras = letras1 + letras2;
    return totalLetras;
}
