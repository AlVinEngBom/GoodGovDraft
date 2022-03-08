<template>
    <Carousel/>

    <div style="padding-top: 20px;">
        <Countdown
            :year="2022"
            :month="3"
            :date="1"
            :hour="19"
            :minute="30"
            :second="32"
            :millisecond="31"
        />
    </div>

    <div style="padding-top:50px;">
        <Tableau/>
    </div>

    <div style="padding-top:50px; text-align:center;">
        <h1>You are in the Home page</h1>
    </div>

</template>

<script>
import Countdown from '../components/Countdown.vue'
import Carousel from '../components/Carousel.vue'
import Tableau from '../components/Tableau.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Tableau,
    Countdown
  }
}
</script>