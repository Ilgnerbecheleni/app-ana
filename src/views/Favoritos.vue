<template>
  <div class="favoritos-view">
    <CabecalhoFavoritos />
    <section class="recomendados">
      <router-link to="/produto" class="linkcard"><Card /></router-link>
      <Cardfavoritos />
      <Cardfavoritos />
      <Cardfavoritos />
    </section>

    <MenuItem
      :should-display="shouldDisplay"
      :homeDisplay="false"
      :favoritosDisplay="true"
      :loginDisplay="false"
      :venderDisplay="false"
      :notificacoesDisplay="false"
    />
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
import CabecalhoFavoritos from "../components/CabecalhoFavoritos.vue";
import Cardfavoritos from "../components/CardFavoritos.vue";
export default {
  name: "FavoritosTela",
  components: { MenuItem, CabecalhoFavoritos, Cardfavoritos },
  methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
    },
  },
  data() {
    return {
      shouldDisplay: true,
      homeDisplay: true,
      favoritosDisplay: true,
      loginDisplay: true,
      venderDisplay: true,
      perfilDisplay: true,
    };
  },
};
</script>

<style scoped>
.favoritos-view{
  padding-top: 150px;
}
</style>
