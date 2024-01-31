<script  lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import NewReleases from '@/views/NewReleases.vue';
import spotify from './services/spotify';

export default {
  components: {
    Header,
    NewReleases
  },

}

</script>

<template>
  <Header />
  <NewReleases />




  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->



  <!-- <RouterView /> -->
</template>

<style scoped></style>
