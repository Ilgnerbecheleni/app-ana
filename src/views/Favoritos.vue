<template>
  <div>
    <CabecalhoFavoritos />
    <section class="recomendados">
      <router-link to="/produto" class="linkcard"><Card /></router-link>
      <Cardfavoritos />
      <Cardfavoritos />
      <Cardfavoritos />
    </section>

   <MenuItem :should-display="shouldDisplay" />
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
import CabecalhoFavoritos from "../components/CabecalhoFavoritos.vue";
import Cardfavoritos from "../components/CardFavoritos.vue";
export default { name: "FavoritosTela", components: { MenuItem ,CabecalhoFavoritos,Cardfavoritos} ,
methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
    },
  },
  data() {
    return {
      shouldDisplay: true,
    
    };
  
  }, };
</script>

<style scoped>

</style>
