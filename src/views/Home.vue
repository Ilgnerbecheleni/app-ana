<template>
  <div >
    <Cabecalho1 />
    <h2>vistos recentemente</h2>
<section class="telaHome">
<div class="wrapper">
  <Card />
    <Card />
    <Card />
</div>

  </section>
  <h3>Recomendados</h3>
  <section class="recomendados">
  <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
</section>

 
    <MenuItem />
  </div>
</template>

<script>
import Cabecalho1 from "../components/Cabecalho1.vue";
import MenuItem from "../components/Menu.vue";
import Card from "@/components/Card.vue";
export default { name: "HomeTela", components: { MenuItem, Cabecalho1, Card } };
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

.recomendados{
  display: grid;
 grid-template-columns: 1fr 1fr;
 justify-content: space-evenly;
 align-items: center;
 margin-left:20px;
 gap:15px;
}
</style>
