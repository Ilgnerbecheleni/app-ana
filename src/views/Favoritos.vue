<template>
  <div class="favoritos-view">
    <CabecalhoFavoritos />
    <main class="content">
      <router-link to="/produto" class="linkcard">
        <CardItem
            image="produto.jpg"
            price="48,00 € "
            description="coelho e rena de peluche"
            heart="icon coração on.png"
          />
      </router-link>
      <section
        v-for="item in cardsFavoritos"
        :key="item.price"
        class="recomendados"
      >
      
          <CardItem
            :image="item.image"
            :price="item.price"
            :description="item.description"
            :heart="item.heart"
          />
      
      </section>

      <MenuItem
        :should-display="shouldDisplay"
        :homeDisplay="false"
        :favoritosDisplay="true"
        :loginDisplay="false"
        :venderDisplay="false"
        :notificacoesDisplay="false"
      />
    </main>
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
import CabecalhoFavoritos from "../components/CabecalhoFavoritos.vue";
import CardItem from "@/components/CardItem.vue";
import mocks from "@/mocks/mock";
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
      cardsFavoritos:mocks.cardsFavoritos,
    
    };
  },
};
</script>

<style scoped>
.favoritos-view {
  padding-top: 210px;

}

.linkcard {
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  color: black;
}

.content {
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  align-items: center;
}
</style>
