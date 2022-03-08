<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/chonk_1.webp" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Chonk 1</h5>
          <p>Here's a smiling chonk</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/chonk_2.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Chonk 2</h5>
          <p>Here's a white chonk</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/chonk_3.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Chonk's 3 and 4</h5>
          <p>Here's some wholesome chonks</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
}
</script>

<style scoped>

@media screen and (min-width: 700px){

  .carousel-inner > .carousel-item {
    height: 400px;
  }

  .carousel-inner > .carousel-item > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    margin: 0 auto;
  }
 
}
</style>