<template>
  <h1 class="text-white text-3xl my-8 flex justify-center">new releases</h1>
  <div class="w-11/12  m-auto my-12 grid grid-cols-6 gap-3">
      <template v-for="(album, index) in albunes" :key="index">
          <card-spotify :album="album"/>
      </template>
  </div>
</template>


<script lang="ts">
import spotify from '@/services/spotify'
import CardSpotify from '../components/CardSpotify.vue'
export default {
    components: { CardSpotify },
    data() {
        return {
            cards: Array.from({length: 12}),
            albunes: []
            
        }
    },
    mounted(){
       this.getReleases() 
    },
    methods:{
        getReleases(){
            spotify.nuevosLanzamientos().then((res) => {
            this.albunes = res
            })
        }
    },
    
}
</script>

<style></style>