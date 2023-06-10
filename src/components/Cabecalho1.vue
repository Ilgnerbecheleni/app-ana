<template>
  <header class="cabecalho1">
    <nav class="cabecalho-items">
      <h1 class="title1">Bem vindo,</h1>
      <h2>user_name</h2>
      <div class="search">
        <img
          src=""
          alt=""
          class="searchimg"
        />
        <input type="text" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "CabecalhoItem1",
};
</script>

<style>
.cabecalho1 {
  z-index: 99;
  width: 100%;
  height: 205px;
  background-color: rgb(172, 156, 156);
  position: fixed;
  top: 0;
  display: flex;
  align-items: start;
  padding-left: 0;
}

.searchimg {
  position: absolute;
  left: 3px;
  cursor: pointer;
  max-width: 20px;
}

.search {
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
}

.search input[type="text"] {
  padding-left: 30px;
  height: 25px;
  border-radius: 5px;
  outline: none;
  border: none;
}
.cabecalho-items {
  margin-left: 10px;
  padding: 10px;
}
h2 {
  margin-top: 0;
  margin-bottom: 6px;
}

.title1 {
  margin-top: 80px;
  margin-bottom: 0;
}

.cabecalho-items > h2 {
  color: #f06943;
  line-height: 23px;
  font-weight: bold;
  font-family: Open sans-serif;
}
.cabecalho-items > h1 {
  line-height: 23px;
  font-weight: bold;
  font-family: Open sans-serif;
}
</style>
