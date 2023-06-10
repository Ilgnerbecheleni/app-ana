<template>
  <div>
    <h1>Tela Notificacoes</h1>
    <MenuItem />
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
export default { name: "NotificacoesTela", components: { MenuItem } };
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
