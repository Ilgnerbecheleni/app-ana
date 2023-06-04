<template>
  <div>
    <h1>Tela Login</h1>
    <p>
      a long established fact that a reader will be distracted by the readable
    </p>
    <MenuItem />
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
export default { name: "LoginTela", components: { MenuItem } };
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
