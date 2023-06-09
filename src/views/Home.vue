<template>
  <div >
    <Cabecalho1 />
    <h2>vistos recentemente</h2>
<section class="telaHome">
  <Card />
    <Card />
    <Card />
  </section>
    <Card />
    <Card />
    <Card />

 
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

</style>
