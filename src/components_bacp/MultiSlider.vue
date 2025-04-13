<template>
    <span class="loader" v-if="loader"></span>
    <div class="container  mt-3 "  >
        <h1 >Flickity - groupCells</h1>
        

        <!-- Flickity HTML init -->
        <div class="main-carousel"  data-flickity='{ "cellAlign": "left", "contain": true, "autoPlay": "true" }'>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
            <div class="carousel-cell"></div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'MultiSlider',
    data(){
        return{
            loader:true,
        }
    },
   
    mounted(){
        setTimeout(()=>{
            this.loader= false;
        }, 2000)  
    }
}
</script>
<style scoped>
/* external css: flickity.css */


* {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
}
.container{
    animation: mymove 4s ;
}
@keyframes mymove {
  0%   {opacity: 0; }
  30% {opacity: 0;}
  100% {opacity: 1;}
}

.carousel {
    background: #EEE;
}
.dim{
    opacity: 0;;
}

.carousel-cell {
    width: 28%;
    height: 200px;
    margin-right: 10px;
    background: #8C8;
    border-radius: 5px;
    counter-increment: carousel-cell;
}

.carousel-cell.is-selected {
    background: #ED2;
}

/* cell number */
.carousel-cell:before {
    display: block;
    text-align: center;
    content: counter(carousel-cell);
    line-height: 200px;
    font-size: 80px;
    color: white;
}
@media (max-width:567px)  {
    .carousel-cell {
    width: 33%;
} 
}
</style>
