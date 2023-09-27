import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue } from 'bootstrap-vue';

const app = createApp(App);

// Use BootstrapVue as a plugin
app.use(BootstrapVue);

app.mount('#app');
