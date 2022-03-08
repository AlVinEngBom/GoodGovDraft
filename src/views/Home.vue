<template>
    <Carousel/>

    <div style="padding-top:50px;">
        <Tableau/>
    </div>

    <div style="padding-top:50px; text-align:center;">
        <h1>You are in the Home page</h1>
    </div>

</template>

<script>
import Carousel from '../components/Carousel.vue'
import Tableau from '../components/Tableau.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Tableau
  }
}
</script>