import { createApp } from 'vue'; // Create a Vue application
import './style.css'; // Import global styles
import App from './App.vue'; // Import the main App component
import PrimeVue from 'primevue/config'; // Import PrimeVue configuration
import Aura from '@primeuix/themes/aura'; // Import the Aura theme from PrimeUIX
import { definePreset } from '@primeuix/themes'; // Import the definePreset function to create a custom theme preset


createApp(App).mount('#app') // Initialize the Vue application and mount it to the DOM

const app = createApp(App); // Create a Vue application instance

const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                surface: {
                    0: 'black',
                    50: '{teal.50}',
                    100: '{teal.100}',
                    200: '{teal.200}',
                    300: '{teal.300}',
                    400: '{teal.400}',
                    500: '{teal.500}',
                    600: '{teal.600}',
                    700: '{teal.700}',
                    800: '{teal.800}',
                    900: '{teal.900}',
                    950: '{teal.950}'
                }
            },
            dark: {
                surface: {
                    0: 'white',
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
