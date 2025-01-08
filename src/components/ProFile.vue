<template>
    <h1> This is {{ profile }} Profile Page </h1>
   
    <button @click="showHeader"> click </button>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    name: 'ProFile',
    data() {
        return {
            profile: '',
        }
    },
   
    beforeUpdate() {
        let routrr = useRouter();
        // console.log(routrr.currentRoute._rawValue.params.id)
        this.profile = routrr.currentRoute._rawValue.params.id;
    }

}
</script>