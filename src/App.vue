<script setup> 

import Button from 'primevue/button'; // Importing PrimeVue Button component
import Accordion from 'primevue/accordion'; // Importing PrimeVue Accordion component
import AccordionPanel from 'primevue/accordionpanel'; // Importing PrimeVue Accordion components
import AccordionHeader from 'primevue/accordionheader'; // Importing PrimeVue Accordion components
import AccordionContent from 'primevue/accordioncontent'; // Importing PrimeVue Accordion components
import Card from 'primevue/card'; // Importing PrimeVue Card component


const toggleMode = () => document.documentElement.classList.toggle('my-app-dark');

</script>

<template>

<!-- Button to toggle dark/light mode -->
<div class="flex justify-end">
<Button label="Theme" @click="toggleMode" />
</div>

<div id="title">
    <h1 class="flex justify-center text-5xl my-16">I'm Jorge, Frontend Developer</h1>
</div>

<!-- Card component to display about me section -->
<div class="flex justify-center items-center mx-16 my-24">
    <Card>
        <template #title>About me</template>
        <template #content>
            <p class="my-3">
                I am a passionate Computer Engineer student and Frontend Developer with a focus on creating useful and functional user interfaces and applications. 
                I have experience in Vue.js, JavaScript, and CSS, and I love to build applications that provide a great user experience.
                My goal is to continuously learn and improve my skills while contributing to exciting projects.
            </p> 
        </template>
    </Card>
</div>

<!-- Accordion component to display projects -->
<div class="mx-16">
    <Accordion :value="['0']" multiple>
        <AccordionPanel value="0">
            <AccordionHeader> <a href="">AI agentic / Chatbot</a> </AccordionHeader>
            <AccordionContent>
                <p class="pt-1">
                    This project was developed using Gemini, Tailwind, Vue.js and PrimeVue. 
                    It features a chatbot that can answer questions about various topics, including programming, technology, and general knowledge. 
                    The chatbot uses an AI model to generate responses based on user input.
                </p>
            </AccordionContent> 
        </AccordionPanel>
        <AccordionPanel value="1">
            <AccordionHeader> <a href="">E-commerece website (Frontend)</a> </AccordionHeader>
            <AccordionContent>
                <p class="pt-1">
                    This project is a frontend e-commerce website developed using Tailwind, Vue.js and PrimeVue. 
                    It features a user-friendly interface for browsing products, adding items to the cart, and checking out. 
                    The website is designed to provide a seamless shopping experience for users.
                </p>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
            <AccordionHeader> <a href="">Semi-automatic AI Pomodoro</a> </AccordionHeader>
            <AccordionContent>
                <p class="pt-1">
                    This project is a semi-automatic Pomodoro timer developed using Vue.js and PrimeVue. 
                    It allows users to set work and break intervals, track their productivity, and receive notifications when it's time to take a break or resume work. 
                    AI integration helps users suggesting time periods baseed on their tasks and preferences.
                    The application is designed to help users manage their time effectively and improve focus.
                </p>
            </AccordionContent>
        </AccordionPanel>
    </Accordion>
</div>


<!-- Footer section -->
<div>
    <footer>
        <form action="">
            <div class="flex justify-center items-center mt-24 mb-5">
                <label for="email" class="mr-4">Contact me:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" class="border rounded px-2 py-1">
                <Button label="Submit" class="ml-4 h-8" />
            </div>
        </form>
    <div class="flex justify-center items-center">        
        <Button class="ml-4 h-8"><a href="https://www.linkedin.com/in/jorge-villalobos-herrera-87b28a126/" target="_blank">LinkedIn</a></Button>
        <Button class="ml-4 h-8"><a href="https://github.com/JorgeVilla1998" target="_blank">GitHub</a></Button>
    </div>

        <p class="text-center text-gray-500 my-4">
            © 2025 Frontend Developer Portfolio.
        </p>
    </footer>
</div>

</template>



<style scoped>

</style>
