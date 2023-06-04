<template>
  <div>
    <h1>Tela Lista</h1>
    <p>
      a long established fact that a reader will be distracted by the readable
      content of a page when looking at its layout. The point of using Lorem
      Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
    </p>
    <MenuItem/>
  </div>
  
</template>

<script>
import MenuItem from "../components/Menu.vue";
export default {name:"ListaTela" ,components: { MenuItem } };
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