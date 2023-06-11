<template>
    <section class="card-pessoa">
      <img src="../assets/img/pessoa.png" alt="pessoa" class="img-pessoa">
      <div class="card-utilizador-content">

      <div class="utilizador">
        <h4>Nome Utilizador</h4>
        <img src="../assets/produto/icon medalha.png" alt="" class="medalha">
      </div>
      <img src="../assets/produto/icon estrelas.png" alt="" class="estrelas">
      </div>

    </section>
        
    
</template>

<script>
export default {
  name: "CardItem",
};
</script>

<style>
.card-pessoa {
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  width: 360px;
  height: 80px;
  border-radius: 14px;
  overflow: hidden; /* Adicionado para esconder o conteúdo que excede as bordas! */
  box-shadow: -3px 10px 22px 6px rgba(0, 0, 0, 0.1);
  margin: 5px;
  display: flex;
  align-items: center;
}

.img-pessoa {

  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 100%;
  margin-left: 15px;
}
.utilizador{
  width: 180px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.medalha{
  width: 14px;
  height: 14px;
}

.card-utilizador-content{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
