<template>
  <div>
    <h1>Tela Favoritos</h1>

    <p>teste.</p>
    <MenuItem />
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
export default { name: "FavoritosTela", components: { MenuItem } };
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
