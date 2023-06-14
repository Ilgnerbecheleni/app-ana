<template>
  <div class="vender-container">
    <Vender />

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
import Vender from "@/components/Vender.vue";
export default {
  name: "VenderTela",
  components: { MenuItem, Vender },
  data() {
    return {
      shouldDisplay: true,
    };
  },
};
</script>

<style scoped>
.vender-container{
  width: 360px;
  padding: 0;
  height: 100vh;
}
</style>
