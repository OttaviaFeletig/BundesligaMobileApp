import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase/app'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCh39hT6tcoDkSFO7Z3KeJclFj1Az6-gPw",
  authDomain: "mobileappchat-e33f9.firebaseapp.com",
  databaseURL: "https://mobileappchat-e33f9.firebaseio.com",
  projectId: "mobileappchat-e33f9",
  storageBucket: "",
  messagingSenderId: "729191350949"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
