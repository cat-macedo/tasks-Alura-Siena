var campoBusca = document.querySelector(".input-buscar");

campoBusca.addEventListener("input", function(){
    
    var usuarios = document.querySelectorAll(".usuario");
    
    if(campoBusca.value.length > 0){
        for(i = 0; i<usuarios.length; i++){
            var linhaUsuario = usuarios[i];
            var tdNome = linhaUsuario.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = RegExp(campoBusca.value, "i");
    
            if(!expressao.test(nome)){
                linhaUsuario.classList.add("esconder");
            }else{
                linhaUsuario.classList.remove("esconder");
            }
        } 
    }else{
        for(i=0; i<usuarios.length; i++){
            var linhaUsuario = usuarios[i];
            linhaUsuario.classList.remove("esconder");
        }
    }
    
})