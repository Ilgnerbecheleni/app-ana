<template>
  <div>
    <H2>VENDER</H2>
    <H2>VENDER</H2>
    <H2>VENDER</H2>
    <H2>VENDER</H2>
    <H2>VENDER</H2>
    <H2>VENDER</H2>
    <H2>VENDER</H2>
    <H2>VENDER</H2>
    <H2>VENDER</H2>
    <H2>VENDER</H2>
    <H2>VENDER</H2>
    <H2>VENDER</H2>
    <H2>VENDER</H2>
    <H2>VENDER</H2>

    <MenuItem
      :should-display="shouldDisplay"
      :homeDisplay="false"
      :favoritosDisplay="false"
      :perfilDisplay="false"
      :venderDisplay="true"
    />
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
export default {
  name: "VenderTela",
  components: { MenuItem },
  data() {
    return {
      shouldDisplay: true,
    };
  },
};
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
  /* Outros estilos que você desejarrrr */
}
</style>
