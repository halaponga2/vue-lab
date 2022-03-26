<template>
  <div>
      <h1>Новости</h1>
      <div v-if ="!newsIsLoaded">Загрузка...</div>
      <ul v-else class="list-group">
          <li v-for= "entity in news" :key="entity.id" class="list-group-item" @click="$router.push(`/news/${entity.id}`)">
              {{entity.name}}
            </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {

    data(){
        return{
            news: [],
            newsIsLoaded: false
        }
    },
    
    
    methods:{
        async getNews(){
            
            try{
                const response = await axios.get("http://demo-api.vsdev.space/api/articles")
                this.news = response.data
            }
            catch(error){
                console.log(error)
            }
            finally{
                this.newsIsLoaded = true
            }
        },
        
    },
    mounted() {
        this.getNews()
  }
}
</script>

<style scoped>
    .list-group-item:hover{
        background: rgb(192, 192, 192);
        cursor:pointer;
    }
</style>