import { createApp } from 'vue' // Create a Vue application
import './style.css' // Import global styles
import App from './App.vue' // Import the main App component
import PrimeVue from 'primevue/config' // Import PrimeVue configuration
import Aura from '@primeuix/themes/aura' // Import the Aura theme from PrimeUIX


createApp(App).mount('#app') // Initialize the Vue application and mount it to the DOM
const app = createApp(App); // Create a Vue application instance
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app') // Mount the application to the DOM
