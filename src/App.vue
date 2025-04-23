<script>
// import HeroSlider from './components/HeroSlider.vue';
import NavBar from './components/NavBar.vue';
import FooTer from './components/FooTer.vue';
// import TabView from './components/TabView.vue';

//  FIREBASE PUSH NOTIFICATION MODULES
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_PAyWNtDj8IiQBdB7McAXgzB2TF_BS-g",
  authDomain: "my-renteasy-app.firebaseapp.com",
  projectId: "my-renteasy-app",
  storageBucket: "my-renteasy-app.firebasestorage.app",
  messagingSenderId: "1007119772414",
  appId: "1:1007119772414:web:ae30b2792809ce786793af",
  measurementId: "G-4VJ9XQ401F"
};
// Initialize Firebase
initializeApp(firebaseConfig);


export default {
  components: {
    NavBar,
    FooTer
    // TabView
  },
  methods: {
    async requestPermit() {
      const permit = await Notification.requestPermission();
      // Get registration token. Initially this makes a network call, once retrieved
      // subsequent calls to getToken will return from cache.
      const messaging = getMessaging();
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        // ...
      });

      if (permit === 'granted') {
        getToken(messaging, { vapidKey: 'BEnVZ0oFuDj0uEyA_QD-qui7wG_WOpaAc2GyVhPSRujg6zO9zznxwluYrkeaXTE_U3w7s4K6DGfYl8BBaxQT0wk' }).then((currentToken) => {
          if (currentToken) {
            console.log('Token No. is ', currentToken)
            // Send the token to your server and update the UI if necessary
            // ...
          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
        });
      }
      else if (permit === 'denied') {
        console.log('You denied for Notifications')
      }
    },
  },
  mounted() {
    this.requestPermit();
    // console.log(app)

  }
}

</script>

<template>
  <NavBar />
  <div>
    <!-- <TabView /> -->
  </div>


  <div id="nav">
  </div>
  <div id="router_vue">
    <router-view v-slot="{ Component, route }">
      <!-- <Transition name="effect" mode="out"></Transition> -->
      <Transition name="effect">
        <component :is="Component" :key="route.path"> </component>
      </Transition>
    </router-view>
  </div>


  <!-- <button class="btn btn-dark">Click me</button> -->

  <FooTer> </FooTer>
</template>

<style>
#router_vue {
  overflow-x: hidden;
  overflow-y: hidden;
}

.effect-enter-active,
.effect-leave-active {
  transition: 0.3s;
}

.effect-enter-from {
  transform: translateY(40%)
}

.effect-leave-to {
  opacity: 0;
  position: absolute;
}

/* Global styling */
@import "~bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2,
h3 {
  font-family: Georgia, serif;
}

/* h2.page_header{
  margin-top: 1rem;
  margin-bottom: 1rem;
} */
.text_bold {
  font-weight: 600;
}

.text_gray {
  color: #858585;
}

.d_flex {
  display: flex;
}

.d_flex_between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  color: #ff944d;
}

.router-link-active {
  color: #ff944d;
}

.form-group input[type=text],
.form-group .form-select,
.form-group input[type=number] {
  border-color: #b3b6b7;
}

.button-72:hover {
  background-image: linear-gradient(#B384C9, #391F5B 50%);
  color: #fff;
  transition: all 0.5s;
}

.bg_purple {
  background: rgb(96, 67, 157);
  background: linear-gradient(0deg, rgba(96, 67, 157, 1) 50%, rgba(126, 89, 203, 1) 100%);
}

.bg_orange {
  color: #ff944d;
}

.clr_orange {
  color: #ff944d !important;
}

.bg_success {
  background: rgb(34, 148, 60);
  background: linear-gradient(0deg, rgba(34, 148, 60, 1) 50%, rgba(93, 173, 110, 1) 100%);
}

.round {
  border-radius: 50px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.outline_purple {
  border: 3px solid #60439d;
  color: #60439d;
}

.outline_purple:hover {
  border: 3px solid #60439d;
  color: #fff;
  background: rgb(96, 67, 157);
  background: linear-gradient(0deg, rgba(96, 67, 157, 1) 50%, rgba(126, 89, 203, 1) 100%);
  transition: all 0.5s;
}

a.log_out {
  color: #fff;
}

.shadow_a {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

button.btn {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

button.btn:hover {
  box-shadow: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: all 0.5s;
}

.template {
  min-height: 100vh;
}

.form-group label {
  font-weight: 700;
  /* color: #731eba ; */
}

.form-group label i {
  color: #d15834;
  padding-right: 5px;
}

.form {
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.text_warning {
  color: #d15834;
}

/*  custom tooltip */
.info_card {
  position: absolute;
  width: 400px;
  margin-left: 7%;
  margin-top: -140px;
  padding: 0.8rem;
  display: none;
  font-weight: 500;
}

.info_btn:hover+.info_card {
  display: block;
  cursor: pointer;
  transition: all 0.5s;
}

/* .alert a.close {
  position: absolute;
  right: 10px;
  background-color:#3d3d3d ;
  padding:1px 8px;
  border-radius: 5px;
} */

/* ============/////////////////============ */

.button-72 {
  align-items: center;
  background-color: initial;
  background-image: linear-gradient(rgba(179, 132, 201, .84), rgba(57, 31, 91, .84) 50%);
  border-radius: 42px;
  border-width: 0;
  font-size: 1.4rem;
  padding: 7px 1.5rem;
  box-shadow: rgba(57, 31, 91, 0.24) 0 2px 2px, rgba(179, 132, 201, 0.4) 0 8px 12px;
  color: #FFFFFF;
  text-decoration: none;
  text-shadow: rgba(255, 255, 255, 0.4) 0 0 4px, rgba(255, 255, 255, 0.2) 0 0 12px, rgba(57, 31, 91, 0.6) 1px 1px 4px, rgba(57, 31, 91, 0.32) 4px 4px 16px;
}

.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  border-width: 3px 2px 3px 2px;
  border-style: solid dotted solid dotted;
  border-color: #de3500 rgba(54, 53, 53, 0.3) #2c2c2c rgba(151, 107, 93, 0.3);
  border-radius: 50%;
  box-sizing: border-box;
  animation: 1s rotate linear infinite;
}
.loader-sm {
  width: 20px;
  height: 20px;
  display: inline-block;
  position: relative;
  border-width: 3px 2px 3px 2px;
  border-style: solid dotted solid dotted;
  border-color: #de3500 rgba(54, 53, 53, 0.3) #2c2c2c rgba(151, 107, 93, 0.3);
  border-radius: 50%;
  box-sizing: border-box;
  animation: 1s rotate linear infinite;
}

.loader-absolute {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: absolute;
  margin-left: 47%;
  margin-top: 12%;
  border-width: 3px 2px 3px 2px;
  border-style: solid dotted solid dotted;
  border-color: #de3500 rgba(54, 53, 53, 0.3) #2c2c2c rgba(151, 107, 93, 0.3);
  border-radius: 50%;
  box-sizing: border-box;
  animation: 1s rotate linear infinite;
}

.loader:before,
.loader:after {
  content: '';
  top: 0;
  left: 0;
  position: absolute;
  border: 10px solid transparent;
  border-bottom-color: #2e2e2e;
  transform: translate(-10px, 19px) rotate(-35deg);
}

.loader:after {
  border-color: #de3500 #0000 #0000 #0000;
  transform: translate(32px, 3px) rotate(-35deg);
}

.swal2-popup {
  background: rgb(222, 203, 255);
  background: linear-gradient(324deg, rgba(222, 203, 255, 1) 0%, rgba(255, 255, 255, 1) 36%, rgba(255, 255, 255, 1) 57%, rgba(222, 203, 255, 1) 100%) !important;
}

.form {
  background-color: #d9d0eb;
  border-radius: 8px;
}

.three_dots .dropdown {
  color: #ff944d;
  cursor: pointer;
}

.three_dots .dropdown-menu li {
  border-bottom: 1px solid #dcdcdc;
}

.three_dots .dropdown-menu li a {
  color: #fff;
}

.three_dots .dropdown-menu li a:hover {
  color: #ff944d;
  background-color: transparent;
}

.three_dots:hover {
  color: #ff944d;
  cursor: pointer;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg)
  }
}

@media (max-width:567px) {
  .d_flex {
    display: block;
  }

  .swal2-popup {
    font-size: 0.7em;
  }

  .d_flex .w-50 {
    width: unset !important;
  }
  .info_card {
    width: 300px;
    margin-left: 0%;
    margin-top: -50%;
  }
  .loader-absolute {
    margin-left: 40%;
    margin-top: 20%;
  }
}

@media (max-width:374px) {
  .file_upload {
    font-size: 0.8rem;
  }
  .info_card {
    width: 280px;
    margin-left: 0%;
  }
}
</style>
