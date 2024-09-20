

import { createApp } from 'vue'
import App from './App.vue'
import Food from './components/FoodItem.vue'


const app = createApp(App);
app.component('food-item', Food)
app.mount('#app')


