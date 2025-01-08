<script>
  // import HeroSlider from './components/HeroSlider.vue';
  import NavBar from './components/NavBar.vue';
  // import TabView from './components/TabView.vue';

  export default{
    components:{
      NavBar, 
      // TabView
    }
  }
</script>

<template>
  <NavBar />
  <!-- <TabView /> -->

  <div id="nav">
  </div>
  <router-view />
  <!-- <button class="btn btn-dark">Click me</button> -->

</template>






<style>

@import "~bootstrap/dist/css/bootstrap.min.css";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  color:#fff;
  text-decoration: none;
}
a:hover{
  color:#f86464;
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
 .loader:before , .loader:after{
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    border: 10px solid transparent;
    border-bottom-color:#2e2e2e;
    transform: translate(-10px, 19px) rotate(-35deg);
  }
 .loader:after {
    border-color: #de3500 #0000 #0000 #0000 ;
    transform: translate(32px, 3px) rotate(-35deg);
  }
   @keyframes rotate {
    100%{    transform: rotate(360deg)}
  }

</style>
