import hljsVuePlugin from '@highlightjs/vue-plugin';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark.css';
import clipboard from 'v-clipboard';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import './style.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);

const app = createApp(App)

app.use(hljsVuePlugin);
app.use(clipboard);

app.mount('#app')
