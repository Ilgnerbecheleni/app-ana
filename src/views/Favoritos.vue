<template>
  <div class="favoritos-view">
    <CabecalhoFavoritos />
    <section
      v-for="item in cardsFavoritos"
      :key="item.price"
      class="recomendados"
    >
      <router-link to="/produto" class="linkcard">
        <CardItem
          :image="item.image"
          :price="item.price"
          :description="item.description"
          :heart="item.heart"
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
          price: "48,00 €",
          description: "coelho e rena",
          heart: "icon coração on.png",
        },
        {
          image: "18.jpg",
          price: "20,00 € ",
          description: "peluche coelho",
          heart: "icon coração on.png",
        },
        {
          image: "2.jpg",
          price: "13,00 €",
          description: "urso de peluche cizento",
          heart: "icon coração on.png",
        },
        {
          image: "4.jpg",
          price: "17,00 €",
          description: "boneca de peluche",
          heart: "icon coração on.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.favoritos-view {
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
