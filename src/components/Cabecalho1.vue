<template>
  <header class="cabecalho1">
    <nav class="cabecalho-items">
      <h1 class="title1">Bem vindo,</h1>
      <h2>user_name</h2>
      <div class="search">
        <img
          src="../assets/home/icon pesquisar.png"
          alt=""
          class="searchimg"
         
        />
        <input type="text"  placeholder="pesquisar brinquedos ou utilizadores" />
      </div>
      <ul class="opcoes">
        <li class="opcoes1">para ti</li>
        <li class="opcoes2">pedidos em aberto</li>
      </ul>
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
  width: 360px;
  height: 205px;
  background-color: rgb(172, 156, 156);
  position: fixed;
  top: 0;
  display: flex;
  align-items: start;
  padding-left: 0;
  background: url("../assets/home/fundo explorar.png");
  background-size: cover;
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
  width: 290px;
  height: 42px;
  border-radius: 5px;
  outline: none;
  border: none;
}
.cabecalho-items {
  margin-left: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.opcoes {
  display: flex;
  width: 100%;
  justify-self: start;
  justify-content: start;
  gap: 20px;
  margin-top: 10px;
  padding: 0;
 
}

.opcoes li {
  list-style: none;
}

h2 {
  margin-top: 0;
}

.title1 {
  text-align: start;
  margin-top: 40px;
  margin-bottom: 0;
}

.cabecalho-items > h2 {
  text-align: start;
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
.opcoes1 {
  font-weight: bold;
  font-family: Open sans-serif;
 position: relative;
  
}

.opcoes1::after{
  content: '______';
  position: absolute;
  left: 0;
  top:8px;
  font-weight: bolder;
  color: #f06943;
}
.opcoes2 {
  font-weight: bold;
  font-family: Open sans-serif;
  color: #aca9a5;
}
</style>
