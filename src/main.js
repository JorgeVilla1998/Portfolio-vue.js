import { createApp } from 'vue'; // Create a Vue application
import './style.css'; // Import global styles
import App from './App.vue'; // Import the main App component
import PrimeVue from 'primevue/config'; // Import PrimeVue configuration
import Aura from '@primeuix/themes/aura'; // Import the Aura theme from PrimeUIX
import { definePreset } from '@primeuix/themes'; // Import the definePreset function to create a custom theme preset

const app = createApp(App); // Create a Vue application instance

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{slate.50}',
            100: '{slate.100}',
            200: '{slate.200}',
            300: '{slate.300}',
            400: '{slate.400}',
            500: '{slate.500}',
            600: '{slate.600}',
            700: '{slate.700}',
            800: '{slate.800}',
            900: '{slate.900}',
            950: '{slate.950}'
        },  
    },
    components: {    
        Button: {
            paddingY: '4rem',
        },
        Card: {
            background: 'var(--red-500)', // Set the background color for Card component
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

createApp(App).mount('#app') // Initialize the Vue application and mount it to the DOM
