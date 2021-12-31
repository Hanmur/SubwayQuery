import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App);
app.config.productionTip = false;
app.use(Antd).mount('#app');
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);