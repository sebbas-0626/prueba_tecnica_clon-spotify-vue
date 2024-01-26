<template>
 <header class="w-full h-16 bg-black flex justify-items-start  ">
  <div class=" flex justify-items-start  p-2 mx-8">
    <logo-spotify />
  <h1 class="text-white text-3xl font-bold px-2">Spotify</h1>
</div>

  <div class="flex justify-end px-20">
    
    <search/>
    
  </div>
  <search />
 </header>
</template>

<script lang="ts">
import LogoSpotify from './LogoSpotify.vue'
import Search from './Search.vue'

export default {
  components: { LogoSpotify, Search },


}
</script>

<style>

</style>