<template>
  <nav-bar class="navbar"/>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"



export default {

  components: {
    NavBar
  },
  
  data(){
    return {
      
    }
    
  }
  
  
}
</script>

<style>
.navbar{
}
.app{
  margin:50px;
}
</style>
