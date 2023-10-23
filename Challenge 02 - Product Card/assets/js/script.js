document.addEventListener('DOMContentLoaded', function () {
  const turnImg = document.querySelector(".turn-img");
  const x = document.querySelector(".x");
  const Sofa = document.querySelector(".sofa");
  const spinningSofaGif = document.querySelector(".spinningsofa-gif");


  function startRotation() {
    turnImg.addEventListener('click', function () {

      turnImg.classList.toggle("cover")
      Sofa.classList.toggle("cover")
      spinningSofaGif.classList.toggle("cover")
      x.classList.toggle("cover")
    });
  }

  function stopRotation() {
    x.addEventListener('click', function () {

      x.classList.toggle("cover")
      spinningSofaGif.classList.toggle("cover")
      turnImg.classList.toggle("cover")
      Sofa.classList.toggle("cover")
    });
  }

  startRotation();
  stopRotation();
});