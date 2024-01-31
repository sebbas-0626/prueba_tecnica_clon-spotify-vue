<template>
    <!-- card tailwind -->
    <div class="bg-black w-32 h-44 mx-14 rounded-lg text-white  my-2">
        <img class=" rounded-t-lg" :src="album.imagen">
        <h1 class="text-sm mx-1">{{ album.nombreCancion }}</h1>
        <h1 class="text-sm mx-1">{{ album.artista }}</h1>
    </div>
</template>

<script lang="ts">
export default {
props:{
    album:{
        type:Object,
        required: true
    }
}
}

</script>

<style></style>