<template>
  <nav class="cabecalhoFavoritos">
    <div class="text">
      <h2 class="boasvindas">os meus</h2>
      <h2 class="favoritos">favoritos!</h2>
    </div>
    <div class="enunciado">
      <p>brinquedos</p>
      <p id="cinza">utilizadores</p>
      <p id="cinza">pesquisas</p>
      <p id="cinza">pedidos</p>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CabecalhoFavoritos",
};
</script>

<style>
.cabecalhoFavoritos {
  z-index: 99;
  width: 100%;
  height: 210px;
  background-color: rgb(172, 156, 156);
  position: fixed;
  top: 0;
  object-fit: contain;

  display: flex;
  align-items: start;
  padding-left: 0;
  flex-direction: column;
  background-image: url(../assets/favoritos/fundo_favoritos.png);
  background-size: cover;
}

.text {
  position: absolute;
  top: 50px;
  left: 30px;
}
.boasvindas {
  font-family: Open sans-serif;
  line-height: 22px;
  font-weight: bold;
}
.favoritos {
  color: #f06943;
  line-height: 23px;
  font-weight: bold;
  font-family: Open sans-serif;
}
.enunciado {
  font-weight: bold;
  font-family: Open sans-serif;
  display: flex;
  justify-content: space-evenly;
  gap: 15px;
  margin-top: 110px;
  margin-left: 30px;
}
#cinza {
  font-family: Open sans-serif;
  color: #aca9a5;
}
</style>
