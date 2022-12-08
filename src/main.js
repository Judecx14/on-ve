import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'
import 'bootstrap'
import OneSignalVue from 'onesignal-vue-3';

createApp(App)
    .use(router)
    .use(OneSignalVue, {
        appId: "810465bf-8ebd-43c6-9b0a-7726265dde4d",
        safari_web_id: "web.onesignal.auto.09714a24-a3bb-414f-8109-d75a4f07e6fa",
        notifyButton: {
            enable: true,
        },
    })
    .mount('#app')
