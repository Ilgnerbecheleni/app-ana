<template>
  <div class="home">
    <Cabecalho1 />
    <h2 class="homeh2">vistos recentemente</h2>
    <section class="telaHome">
      <div v-for="item in cardItems" :key="item.price" class="wrapper">
        <router-link to="/produto" class="linkcard">
          <CardItem
            :image="item.image"
            :price="item.price"
            :description="item.description"
          />
        </router-link>
      </div>
    </section>
    <h2 class="homeh2">Recomendados</h2>
    <section class="recomendados">
      <router-link to="/produto" class="linkcard"></router-link>
    </section>

    <MenuItem
      :should-display="shouldDisplay"
      :homeDisplay="true"
      :favoritosDisplay="false"
      :perfilDisplay="false"
      :venderDisplay="false"
      :notificacoesDisplay="false"
    />
  </div>
</template>

<script>
import Cabecalho1 from "../components/Cabecalho1.vue";
import MenuItem from "../components/Menu.vue";
import CardItem from "@/components/CardItem.vue";
export default {
  name: "HomeTela",
  components: { MenuItem, Cabecalho1, CardItem },
  methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
    },
  },
  data() {
    return {
      shouldDisplay: true,
      cardItems: [
        {
          image: "1.jpg",
          price: "48,00 € ",
          description: "coelho e rena de peluche",
          heart: "icon coração on.png",
        },

        // Outros objetos com diferentes detalhes
        {
          image: "18.jpg",
          price: "20,00 € ",
          description: "peluche coelho",
          heart: "icon coração off.png",
        },
        {
          image: "2.jpg",
          price: "13,00 €",
          description: "urso de peluche cizento",
          heart: "icon coração off.png",
        },
        {
          image: "4.jpg",
          price: "17,00 €",
          description: "boneca de peluche",
          heart: "icon coração off.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  padding-top: 150px;
}
.telaHome {
  margin: 0;
  padding-left: 15px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  white-space: nowrap;
}
.wrapper {
  display: inline-flex;
  gap: 10px;
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
</style>
