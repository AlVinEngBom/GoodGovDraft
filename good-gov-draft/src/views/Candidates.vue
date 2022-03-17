<template>
    <div>
      <div v-for="carousel in carousels" :key="carousel.id">
        <!-- <img
              :src="`http://localhost:1337${carousel.attributes.image.data.attributes.url}`"
              :alt="`${carousel.attributes.description}`"
              :width="`${carousel.attributes.image.data.attributes.width}`"
              :height="`${carousel.attributes.image.data.attributes.height}`"
            /> -->
        <div>
          <h1>
            {{ carousel.attributes.title }}
          </h1>
          <p>
            {{ carousel.attributes.description }}
          </p>
        </div>
      </div>

        <div style="padding-top:50px; text-align:center;">
            <h1>You are in the Candidates page</h1>
        </div>
    </div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      carousels: [],
    };
  },
  async mounted() {
    const res = await axios.get("http://localhost:1337/api/carousels?populate=*");
    this.carousels = res.data.data;
  },
}
</script>