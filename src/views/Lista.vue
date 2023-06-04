<template>
  <div>
    <h1>Tela Lista</h1>
    <p>a ZE DA MANGA</p>
    <MenuItem />
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
export default { name: "ListaTela", components: { MenuItem } };
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
  /* Outros estilos que você desejar */
}
</style>
