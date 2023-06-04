<template>
  <div>
    <Cabecalho1 />

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

<style scoped></style>
