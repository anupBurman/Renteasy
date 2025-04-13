<template>
    <h1> Ref (Composition API) </h1>
    <button type="button" @click="changeData()"> {{ newdata }} </button>
    <br>
    <br>


    <ul>
        <li v-for="(value, index) in myObject" :key="index">
            {{ value }}
        </li>
    </ul>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
    name: 'CompositionApi',
    setup() {
        let newdata = ref(' Click To Changed');
        function changeData() {
            newdata.value = "Changed Data After Click";
        }

        
        // v-for with an Object
        const myObject = reactive({
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        })


        return {
            newdata,
            changeData,
            myObject,

        }

    }
}


</script>