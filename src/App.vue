<template>
  <NavVue></NavVue>
  <ViewRoutesVue/>
  <FooterVue></FooterVue>
</template>
<script>
import NavVue from './components/Nav/Nav.vue'
import FooterVue from './components/Footer/Footer.vue';
import ViewRoutesVue from './components/ViewRoutes/ViewRoutes.vue';
import axios from 'axios'
export default {
  components:{ViewRoutesVue,NavVue, FooterVue},
  mounted(){},
  data(){},
  methods:{},
  beforeCreate() {
    this.$OneSignal.showSlidedownPrompt();
  }
}
</script>
<style>
body{
  margin: 0%;
 background-color: #020202; 
}
</style>