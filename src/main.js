import { createApp } from 'vue' // Create a Vue application
import './style.css' // Import global styles
import App from './App.vue' // Import the main App component
import PrimeVue from 'primevue/config' // Import PrimeVue configuration
import Aura from '@primeuix/themes/aura' // Import the Aura theme from PrimeUIX
import { definePreset } from '@primeuix/themes'

createApp(App).mount('#app') // Initialize the Vue application and mount it to the DOM

const app = createApp(App); // Create a Vue application instance

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{amber.50}',
            100: '{amber.100}',
            200: '{amber.200}',
            300: '{amber.300}',
            400: '{amber.400}',
            500: '{amber.500}',
            600: '{amber.600}',
            700: '{amber.700}',
            800: '{amber.800}',
            900: '{amber.900}',
            950: '{amber.950}'
        }
    }
});



app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
});
