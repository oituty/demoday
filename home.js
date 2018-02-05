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


// let carro2 = document.querySelectorAll('.carro2');
//     let slider = 0;
//       function avancarSlide2(){
//         carro2[slider].style.display = 'none';
//           slider++;
//       if(slider >= carro2.length){
//                 slider = 0;
//       }
//         carro2[slider].style.display = 'block';
//       }
//       setInterval(avancarSlide2, 3500);
//       avancarSlide2();


let frase1 = 'Um projeto criado para ajestáSei lá  ajudando o mundo. Sei lá criado para estáajudando o mundo. Sei lá.projeto criasasa  asasa doparuem já estáajudando o mundo. Sei unto.';
      let f1 = document.querySelector('.teste');
      let contador = 0;
      function exibirLetra(){
        let letra = frase1[contador];
        f1.innerHTML += letra;
        contador++;
        if(contador >= frase1.length){
          clearInterval(intervalo);
        }
      }
      let intervalo = setInterval(exibirLetra, 130);

// $('.carousel').carousel({
//   interval: 3000
// })
      

