<template>
  <h1 class="text-white text-3xl my-8 flex justify-center">new releases</h1>
  <div class="w-11/12  m-auto my-12 grid grid-cols-6 ">
      <template v-for="(card, index) in cards" :key="index">
          <card-spotify />
      </template>
  </div>
</template>


<script lang="ts">
import CardSpotify from '../components/CardSpotify.vue'
export default {
    components: { CardSpotify },
    data() {
        return {
            cards: Array.from({length: 12})
        }
    }
}
</script>

<style></style>