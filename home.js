// SLIDE DE FRASES INICIO

let carro1 = document.querySelectorAll('.subtituloinicio');
  let slider = 0;
    function avancarSlide1(){
      carro1[slider].style.display = 'none';
        slider++;
    if(slider >= carro1.length){
              slider = 0;
    }
      carro1[slider].style.display = 'block';
    }
    setInterval(avancarSlide1, 3500);
    avancarSlide1();

// LETRAS DIGITANDO ESPAÇO ONGS

let frase1 = 'Um projeto criado para ajestáSdo. Um projeto criado para ajestáSdo Um projeto criado para ajestáSdo';
      let f1 = document.querySelector('.teste');
      let contador = 0;
      function exibirLetra(){
        let letra = frase1[contador];
        f1.innerHTML += letra;
        contador++;
        if(contador >= frase1.length){
          clearInterval(intervalo);
          
          // f1.innerHTML = '';
          // contador = 0;
        
        }

      }
      let intervalo = setInterval(exibirLetra, 130);
      // clearInterval(intervalo);

// CONTROLE DE TIME CARROSSEL ONGS

$('.carousel').carousel({
  interval: 3500
});

// $(window).scroll(function () {
//   if ($(this).scrollTop() < 300) {
//       $('.navbar').css("background-color", "#red")
//   } else {
//       $('.navbar').css("background-color", "brown")
//   }
// });      


