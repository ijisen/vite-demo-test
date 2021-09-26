import { createApp } from 'vue'
import './styles/element-variables.scss'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// @ts-ignore
import App from './App.vue'

createApp(App).use(ElementPlus, {
  size: 'small',
  locale: zhCn
}).mount('#app')
