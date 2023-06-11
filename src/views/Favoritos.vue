<template>
  <div class="favoritos-view">
    <CabecalhoFavoritos />
    <section v-for="item in  cardsFavoritos" :key="item.price" class="recomendados">
      <router-link to="/produto" class="linkcard">
        <CardItem
            :image="item.image"
            :price="item.price"
            :description="item.description"
          />
      </router-link>

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
import CardItem from "@/components/CardItem.vue";
export default {
  name: "FavoritosTela",
  components: { MenuItem, CabecalhoFavoritos, CardItem },
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
      cardsFavoritos: [
        {
          image: "1.jpg",
          price: "43,00",
          description: "Urso Peluche",
        },
    ]};
  },
};
</script>

<style scoped>

.favoritos-view{
  
  padding-top: 150px;
}

.linkcard {
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  color: black;
}
.recomendados {
  background: #fcfaf8;
}
</style>
