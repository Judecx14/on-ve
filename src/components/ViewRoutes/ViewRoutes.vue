<template>
    <router-view></router-view>
</template>
<script>
import NavVue from '../Nav/Nav.vue';
import FooterVue from '../Footer/Footer.vue';
import { onMounted, defineComponent } from 'vue'
import { useOneSignal } from 'onesignal-vue-3'
export default {
    components:{
        NavVue,
        FooterVue
    },
    setup() {
        const oneSignal = useOneSignal()

        onMounted(async () => {
            await oneSignal.registerForPushNotifications({
                modalPrompt: true,
            })
        })
    }
}
</script>