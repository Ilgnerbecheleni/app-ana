<template>
  <section class="card">
    <div class="card">
      <img :src="require(`../assets/img/${src}`)" alt="" srcset="" class="card-img" />
      <div class="card-items">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2589/2589175.png"
          alt="Coração"
          class="heart-icon"
        />
        <h4 class="price">{{ price }}</h4>
        <p class="desc">{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    src: String,
    price: String,
    description: String,
  },
};
</script>

<style>
.card {
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  width: 155px;
  height: 245px;
  border-radius: 14px;
  overflow: hidden; /* Adicionado para esconder o conteúdo que excede as bordas */
  box-shadow: -3px 10px 22px 6px rgba(0, 0, 0, 0.1);
  margin: 5px;
}

.card-img {
  width: 155px;
  height: 151px;
  object-fit: cover;
  mask-image: linear-gradient(
    to bottom,
    transparent 50%,
    white 100%
  ); /* Máscara de corte */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}
.price {
  margin: 15px 0 0 15px;
  font-family: "Open Sans", sans-serif;
}
.card-items {
  position: relative;
}
.desc {
  margin: 9px 0 0 15px;
  font-size: 0.8em;
}

.heart-icon {
  position: absolute;
  right: 15px;
  width: 20px;
}
</style>
