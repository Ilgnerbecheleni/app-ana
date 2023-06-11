<template>
    <section class="card-pessoa">


    </section>
        
    
</template>


<script>
export default {
  name: 'CardItem'
}
</script>

<style>
.card-pessoa {
    font-family: 'Open Sans', sans-serif;
text-decoration: none;
  width: 155px;
  height: 245px;
  border-radius: 14px;
  overflow: hidden; /* Adicionado para esconder o conteúdo que excede as bordas */
  box-shadow: -3px 10px 22px 6px rgba(0,0,0,0.1);
  margin:5px;
}

.card-pessoa-img {

  width: 155px;
  height: 151px;
   object-fit: cover;
  mask-image: linear-gradient(to bottom, transparent 50%, white 100%); /* Máscara de corte */
}
.price{
  margin:15px 0 0 15px;
  font-family: 'Open Sans', sans-serif;
}
.card-pessoa-items{
  position:relative;
}
.desc{
  margin: 9px 0  0 15px;
  font-size:0.8em;
}

.heart-icon{
  position:absolute;
  right:15px;
  width:20px;
}
</style>
