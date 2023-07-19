// var usuarios = document.querySelectorAll(".usuario");
// var botaoTabela = document.querySelector(".botao-tabela");
//botaoTabela.addEventListener("click", function(){
    
//     for(var i=0; i<usuarios.length; i++){
//         var usuario = usuarios[i];
            
//         var inputTabela = usuario.querySelector(".input-tabela");
//         var botaoTabela = usuario.querySelector(".botao-tabela");
    
//         botaoTabela.onclick = function(){
//             inputTabela.classList.add("esconder");
//             botaoTabela.classList.add("esconder");
//             var cep = usuario.querySelector(".info-endereco");
//             cep.textContent = "teste";
            
//         }
//     } 
//});

window.onload = function (){
    var botaoTabela = Array.prototype.slice.call(document.querySelectorAll('.botao-tabela'));
    var inputTabela = Array.prototype.slice.call(document.querySelectorAll('.input-tabela'));
    var campoCEP = Array.prototype.slice.call(document.querySelectorAll('.info-endereco'));
    
    botaoTabela.forEach(function(botao, i){
        botao.addEventListener("click", function(){
            inputTabela[i].classList.add("esconder");
            botaoTabela[i].classList.add("esconder");

            // inputTabela.classList.add("fade-in") = "teste"; //fazer um fade-in com o texto
           
            // alert("oi?");
            // campoCEP[i].textContent = "oi?";
            campoCEP[i].textContent = inputTabela[i].value;

        })
        
    });
}