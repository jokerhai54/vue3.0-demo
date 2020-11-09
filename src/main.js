import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import echarts from 'echarts'
import "echarts/map/js/china";
import '@/style/base.scss'


createApp(App).use(router).use(store).use(echarts).use(Antd).mount('#app')
