<template>
  <div >
    <Cabecalho1 />
    <h2 class="homeh2">vistos recentemente</h2>
<section class="telaHome">
<div class="wrapper">
  <router-link to="/produto" class="linkcard"><Card /></router-link>
    <Card />
    <Card />
    <Card />
</div>

  </section>
  <h2 class="homeh2">Recomendados</h2>
  <section class="recomendados">
    <router-link to="/produto" class="linkcard"><Card /></router-link>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
</section>

 
<MenuItem :should-display="shouldDisplay"  :active-image="explorarOnImage"/>
  </div>
</template>

<script>
import Cabecalho1 from "../components/Cabecalho1.vue";
import MenuItem from "../components/Menu.vue";
import Card from "@/components/Card.vue";
export default { name: "HomeTela", components: { MenuItem, Cabecalho1, Card },
methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
    },
  },
  data() {
    return {
      shouldDisplay: true,
      homeDisplay:true,
      favoritosDisplay:true,
      loginDisplay:true,
      venderDisplay:true,
    };
  },};
</script>

<style scoped>
.telaHome{
  margin: 0;
  padding-left: 15px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  white-space: nowrap;
}
.wrapper{
  display: inline-flex;
  gap: 10px; /* Espaçamento entre os cards */
}

.homeh2
{
  margin-left: 15px;
  text-align: start;
  font-family: 'Open Sans', sans-serif;
}
.recomendados{
  display: grid;
 grid-template-columns: 1fr 1fr;
 justify-content: space-evenly;
 align-items: center;
 margin-left:20px;
 gap:15px;
}
.linkcard{
  font-family: 'Open Sans', sans-serif;
text-decoration: none;
color: black;
}
</style>
