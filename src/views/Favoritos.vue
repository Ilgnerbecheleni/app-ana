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
  data() {
    return {
      shouldDisplay: true,
    
    };
  
  }, };
</script>

<style scoped>

</style>
