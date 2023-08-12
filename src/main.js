import hljsVuePlugin from '@highlightjs/vue-plugin';
import 'highlight.js/lib/common';
import 'highlight.js/styles/atom-one-dark.css';
import clipboard from 'v-clipboard';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import './style.css';

const app = createApp(App)

app.use(hljsVuePlugin);
app.use(clipboard);

app.mount('#app')
