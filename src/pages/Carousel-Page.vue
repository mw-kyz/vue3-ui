<template>
  <div class="carousel-wrap">
    <carousel class="carousel"
      :autoplay="true"
      :duration="3000"
      :initial="0"
      :hasDot="true"
      :hasDirector="true"
      dotBgColor="#fd8f8f"
    >
      <car-item
        v-for="(item, index) of carData"
        :key="item.img_name"
        :index="index"
      >
        <img class="img-item" :src="require(`@/assets/imgs/${ item.img_name }`)" alt="折木*千反田">
      </car-item>
    </carousel>
  </div>
</template>

<script>
import carData from '@/data/carousel'

export default {
  name: 'Carousel-Page',
  setup () {
    return {
      carData
    }
  }
}
</script>

<style lang="scss">
.carousel-wrap {
  display: flex;
  justify-content: center;
  margin-top: 100px;

  .carousel {
    width: 960px;
    height: 540px;
  }
}
</style>
