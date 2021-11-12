import { createApp } from 'vue';
import App from './App.vue';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'virtual:windi.css';
import './styles/index.scss';

const app = createApp(App);

dayjs.locale('zh-ch');

app.config.globalProperties.$dayjs = dayjs;

app.mount('#app');
