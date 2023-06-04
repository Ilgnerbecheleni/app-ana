<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="menu">
        <router-link to="/home"><img src="../assets/menu/icon explorar on.png" alt="" srcset=""></router-link>
        <router-link to="login"><img src="../assets/menu/icon explorar on.png" alt="" srcset=""></router-link>
        <router-link to="/favoritos"><img src="../assets/menu/icon explorar on.png" alt="" srcset=""></router-link>
        <router-link to="/perfil"><img src="../assets/menu/icon explorar on.png" alt="" srcset=""></router-link>
  
    </nav>
</template>


<script>
export default {
  name: 'MenuItem'
}
</script>

<style>
.menu{
    
    width: 100%;
    height: 80px;
    background-color: brown;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

}
</style>