<template>
  <div>
      <h1>Новость</h1>
      <div v-if ="!newsIsLoaded">Загрузка...</div>
      <single-news :news="news" v-else/>
      
  </div>
</template>

<script>
import axios from 'axios'
import SingleNews from '@/components/SingleNews.vue'
export default {

    components:{
        SingleNews
    },

    data(){
        return{
            news: [],
            newsIsLoaded: false
        }
    },
    
    
    methods:{
        async getNews(){
            
            try{
                const response = await axios.get(`http://demo-api.vsdev.space/api/articles/${this.$route.params.id}`)
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

<style>

</style>