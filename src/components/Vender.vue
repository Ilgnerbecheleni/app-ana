<template>
  <nav class="vender">
    <div class="text">
      <h2 class="boasvindas">vender os teus</h2>
      <h2 class="brinquedos">brinquedos!</h2>
    </div>
  </nav>
</template>

<script>
export default {
  name: "VenderTela",
};
</script>

<style>
.vender {
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
.boasvindas {
  font-family: Open sans-serif;
  line-height: 22px;
  font-weight: bold;
  margin: 0;
}
.brinquedos {
  color: #f06943;
  line-height: 23px;
  font-weight: bold;
  font-family: Open sans-serif;
}

#cinza {
  font-family: Open sans-serif;
  color: #aca9a5;
}
</style>
