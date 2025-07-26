<script setup> 
import { ref } from 'vue'; // Importing Vue's ref for reactivity
import InputText from 'primevue/inputtext';

const text = ref('')
{{'text'}}; // Reactive variable to hold input text

</script>

<template>

<div>
<h1 class="flex flex-row justify-center text-5xl m-4">I'm Jorge Villalobos Frontend Developer</h1>
</div>

<div id="aboutMe" class="bg-gray-800 rounded-lg p-4 mt-14 text-center">
    <h2 class="text-2xl">About Me</h2>
    <p class="mt-2">I am a passionate frontend developer with a love for creating beautiful and functional web applications.</p>
</div>

</template>



<style scoped>

</style>
