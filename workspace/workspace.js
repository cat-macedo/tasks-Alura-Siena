var imagemFade1 = document.getElementById('imagemFade-1');
var imagemFade2 = document.querySelector(".imagemFade-2");

var divFade = document.getElementById('divFade');
var divSla = document.querySelector(".divSla");

var segundoBotao = document.querySelector("#segundoBotao");
segundoBotao.classList.add("selecionado");

document.getElementById('primeiroBotao').onclick = function(){
    imagemFade1.classList.toggle('fade');
    divFade.classList.toggle('fade');
    var primeiroBotao = document.querySelector("#primeiroBotao");
    segundoBotao.classList.remove("selecionado");
    primeiroBotao.classList.add("selecionado");

    setTimeout(function(){
        imagemFade1.classList.add("esconder");
        imagemFade2.classList.remove("imagemFade-2");
        divFade.classList.add("esconder");
        divSla.classList.remove("divSla");
    },1000);
}

document.getElementById('segundoBotao').onclick = function(){
    imagemFade1.classList.toggle('fade');
    divFade.classList.toggle('fade');
    segundoBotao.classList.add("selecionado");
    primeiroBotao.classList.remove("selecionado");
    
    
    setTimeout(function(){
        imagemFade1.classList.remove("esconder");
        imagemFade2.classList.add("imagemFade-2");
        divFade.classList.remove("esconder");
        divSla.classList.add("divSla");
    },1000);
}