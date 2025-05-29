const images = document.querySelectorAll('.img');

const containerImage = document.querySelector('.container-img');

const imageContainer = document.querySelector('.img-show');

const copy = document.querySelector('.copy');

const closeModal = document.querySelector ('.bx.bx-x');

images.forEach(image =>{
  image.addEventListener('click',()=>{
    // alert("diste click") esto solo es una prueba 
    // containerImage.classList.toggle('move') bmover de lugar para la const addImage después de escribir  addImage de abajo

    addImage(image.getAttribute('src'),
    image.getAttribute ('alt'))
  })

})

const addImage = (srcImage,altImage)=>{ /*Agregar srcImage al finaL*/
  containerImage.classList.toggle('move');
  imageContainer.classList.toggle('show'); /*Agregar al final*/


  imageContainer.src = srcImage;

  copy.innerHTML =altImage; /*Para agregar el alt de HTML*/

}
/*Da click para entrar al lightbox y salir */
/*Cambiar en containerImage a closeModal pa que cierre con la X */

closeModal.addEventListener('click',()=>{
  containerImage.classList.toggle('move');
  imageContainer.classList.toggle('show'); /*Agregar al final*/


})

