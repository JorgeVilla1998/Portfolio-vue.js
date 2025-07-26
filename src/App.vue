<script setup> 

import { ref } from 'vue'; // Importing Vue's ref for reactivity
import Button from 'primevue/button'; // Importing PrimeVue Button component

function toggleDarkMode() {
    document.documentElement.classList.toggle('my-app-dark');
}

</script>

<template>

<Button label="Theme" @click="toggleDarkMode()" />

<div>
<h1 class="flex justify-center text-5xl m-4">I'm Jorge Villalobos Frontend Developer</h1>
</div>

<div id="aboutMe" class="bg-gray-500 rounded-lg p-4 mt-14 text-center">
    <h2 class="text-3xl">About Me</h2>
    <p class="mt-2">I am a passionate frontend developer with a love for creating useful, creative, modern, and functional web applications.
        As a Computer Engineering student I'm working with different technologies and tools, check out my projects and enjoy the trip.</p>
</div>

</template>



<style scoped>

</style>
