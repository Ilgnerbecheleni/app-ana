<template>
  <div>
    <CabeçalhoFavoritos />
    <section class="recomendados">
      <router-link to="/produto" class="linkcard"><Card /></router-link>
      <Card />
      <Card />
      <Card />
    </section>

    <MenuItem :should-display="shouldDisplay" />
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
<<<<<<< HEAD
import Card from "@/components/Card.vue";
import CabecalhoFavoritos from "../components/CabecalhoFavoritos.vue";
export default {
  name: "HomeTela",
};
</script>

<style scoped>
.wrapper {
  display: inline-flex;
  gap: 10px; /* Espaçamento entre os cards */
}

.homeh2 {
  margin-left: 15px;
  text-align: start;
  font-family: "Open Sans", sans-serif;
}
.recomendados {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 20px;
  gap: 15px;
}
.linkcard {
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  color: black;
}
=======
export default { name: "FavoritosTela", components: { MenuItem } ,
methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
    },
  },
  data(){
    return {
      activeImage: "../assets/menu/icon favoritos on.png",
      shouldDisplay: true,
    };
  }, };
</script>

<style scoped>

>>>>>>> 548d2704548e68903093fc8bb8335d25db8fea48
</style>
