var listaNomes = [];
var usuarios = document.querySelectorAll(".usuario");

for(var i=0; i<usuarios.length; i++){
   var usuario = usuarios[i];

   var tdNome = usuario.querySelector(".info-nome");
   var nome = tdNome.textContent;

   var tdSobrenome = usuario.querySelector(".info-sobrenome");
   var sobrenome = tdSobrenome.textContent;
   
   listaNomes.push(nome+sobrenome);
   listaNomes.sort();
}

console.log(listaNomes);
