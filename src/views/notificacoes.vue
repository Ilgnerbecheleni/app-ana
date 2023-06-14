<template>
  <div class="notificacoes">
    <Notificacoes />
    <CardPessoa/>
    <MenuItem
      :should-display="shouldDisplay"
      :homeDisplay="false"
      :favoritosDisplay="false"
      :perfilDisplay="false"
      :venderDisplay="false"
      :notificacoesDisplay="true"
    />
  </div>
</template>

<script>
import CardPessoa from "@/components/CardPessoa.vue";
import MenuItem from "../components/Menu.vue";
import Notificacoes from "@/components/Notificacoes.vue";
export default {
  name: "NotificacoesTela",
  components: { MenuItem, Notificacoes, CardPessoa },
  methods: {
    updateActiveImage(imageSrc) {
      this.activeImage = imageSrc;
    },
  },
  data() {
    return {
      shouldDisplay: true,
    };
  },
};
</script>

<style scoped>
.notificacoes {
  padding-top: 210px;
  height: 122vh;
}
</style>
