<template>
  <div>
    <h1>Tela Favoritos</h1>

    <MenuItem :should-display="shouldDisplay" />
  </div>
</template>

<script>
import MenuItem from "../components/Menu.vue";
export default { name: "FavoritosTela", components: { MenuItem } ,
methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
    },
  },
  data(){
    return {
      activeImage: "../assets/menu/icon favoritos on.png",
      shouldDisplay: true,
    };
  }, };
</script>

<style scoped>

</style>
