<template>
  <div class="home">
    <Cabecalho1 />
    <h2 class="homeh2">vistos recentemente</h2>
    <section class="telaHome">
      <router-link to="/produto" class="linkcard">
        <CardItem
          image="produto.jpg"
          price="48,00 € "
          description="coelho e rena de peluche"
          heart="icon coração on.png"
        />
      </router-link>
      <div v-for="item in cardItems" :key="item.price" class="wrapper">
        <CardItem
          :image="item.image"
          :price="item.price"
          :description="item.description"
          :heart="item.heart"
        />
      </div>
    </section>
    <h2 class="homeh2">Recomendados</h2>
    <section class="recomendados">
      <router-link to="/produto" class="linkcard">
        <CardItem
          image="3.jpg"
          price="48,00 € "
          description="coelho e rena de peluche"
          heart="icon coração on.png"
        />
      </router-link>
      <div
        v-for="recomendado in recomendados"
        :key="recomendado.price"
        class="wrapper"
      >
        <CardItem
          :image="recomendado.image"
          :price="recomendado.price"
          :description="recomendado.description"
          :heart="recomendado.heart"
        />
      </div>
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
import mocks from "@/mocks/mock";
import Cabecalho1 from "@/components/Cabecalho1.vue";
import MenuItem from "@/components/Menu.vue";
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
      cardItems: mocks.cardItems,
      recomendados: mocks.listRecomendados,
    };
  },
};
</script>

<style scoped>
.home {
  padding-top: 210px;
  height: 122vh;
}
.telaHome {
  margin: 0;

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

  gap: 15px;
}
.linkcard {
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  color: black;
}
</style>
