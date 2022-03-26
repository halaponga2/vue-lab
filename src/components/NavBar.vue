<template>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <img class="navbar-brand" src="../../public/logo.png" alt="" @click="$router.push('/')">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <router-link to="/" class="nav-link"> Главная </router-link>
                </li>
                <router-link to="/news" class="nav-link"> Новости </router-link>
                <li class="nav-item">
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    .navbar-brand{
        width:50px;
        
    }
    .navbar-brand:hover{
        cursor: pointer;
    }

</style>