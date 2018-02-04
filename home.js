let h4 = document.querySelectorAll('.subtituloinicio');
  let slider = 0;
    function avancarSlide(){
      h4[slider].style.display = 'none';
        slider++;
    if(slider >= h4.length){
              slider = 0;
    }
      h4[slider].style.display = 'block';
    }
    setInterval(avancarSlide, 3500);
    avancarSlide();


// let frase = '......';
//     let ponto = document.querySelector('.pontos');
//     let contador = 0;
//     function exibirLetra(){
//       let letra = frase[contador];
//       ponto.innerHTML += letra;
//       contador++;
//       if(contador >= frase.length){
//         clearInterval(intervalo);
//       } 
//     }
//     let intervalo = setInterval(exibirLetra, 400);

    
