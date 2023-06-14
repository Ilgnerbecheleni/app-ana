<template>
  <nav class="notificacoesTela">
    <div class="text">
      <h2 class="hora">hora de</h2>
      <h2 class="trocar">trocar ideias!</h2>
    </div>
    <div class="enunciado">
      <p>mensagens</p>
      <p id="cinza">notificações</p>
    </div>
    <div class="cardNotificacoes">
      
    </div>
  </nav>
</template>

<script>
export default {
  name: "NotificacoesTela",
};
</script>

<style>
.notificacoesTela {
  z-index: 99;
  width: 360px;
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
.hora {
  font-family: Open sans-serif;
  line-height: 22px;
  font-weight: bold;
  margin: 0;
}
.trocar {
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
  gap: 12px;
  margin-top: 110px;
  margin-left: 25px;
}
#cinza {
  font-family: Open sans-serif;
  color: #aca9a5;
  margin-left: 40px;
}
</style>
