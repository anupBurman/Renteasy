<template>
    <div class="container mt-3">
        <h2> CRUD Operation </h2>
        <button class="btn btn-dark">Click me</button>
        <span class="loader" v-if="loader"></span>
        <div v-if="allproducts && allproducts.total">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="(items, index) in allproducts.products" :key="index">
                        <th scope="row"> {{ items.id }} </th>
                        <td> {{ items.title }} </td>
                        <td> {{ items.category }} </td>
                        <td> {{ items.price }} </td>
                        <td> <button> click </button> </td>

                    </tr>

                </tbody>
            </table>

            <!-- PAGINATION  -->
            <div>
                <v-pagination v-model="page" :pages="Math.ceil(pagiCont)" :per-page="limit" active-color="#DCEDFF"
                    @update:modelValue="myCallback()" />
            </div>

        </div>



    </div>
</template>

<script>
// to make vue pagination please go to this path for instalation process
// https://www.npmjs.com/package/@hennge/vue3-pagination#demo
import axios from 'axios';
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
export default {
    data() {
        return {
            allproducts: '',

            page: 1,
            limit: 10,
            skip: 0,
            loader: '',
            pagiCont: ''
        }
    },
    components: {
        VPagination
    },
    beforeMount(){
        this.loader = true;
    },
    async mounted() {
        await this.getProduts();
    },
    methods: {
        getProduts() {
            
            axios.get('https://dummyjson.com/products?skip=' + this.skip + '&limit=' + this.limit)
                .then((res) => {
                    this.allproducts = res.data;
                    // console.log(res)
                    let pagicont = this.allproducts.total / this.limit;
                    this.pagiCont = pagicont;
                    this.loader = false;

                })
                .catch((err) => {
                    console.log(err)
                })
            
        },
        
        myCallback() {
            this.skip = (this.page * this.limit) - this.limit;
            this.getProduts();
        }
    },
   



}
</script>
