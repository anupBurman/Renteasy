<template>
    <div class="container mt-3">
        <h2> CRUD Operation </h2>
        <button class="btn btn-dark" @click="getData()">Click me</button>

        <table class="table">
            <thead>
                <tr >
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                <span class="loader" v-if="loader"></span>
                <tr v-for="(data, index) in response" :key="index">
                    <th scope="row"> {{ index }}</th>
                    <td> {{ data.name }} </td>
                    <td> {{ data.username }} </td>
                    <td> {{ data.website }} </td>
                    <td> <button > click </button> </td>
                </tr>

            </tbody>
        </table>

        <p> {{ error }} </p>


    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'CrudPage',
    data() {
        return {
            response: [],
            id: '',
            name: '',
            username: '',
            website: '',
            loader:'',

            error: '',
        }
    },

    methods: {
        async getData() {
            this.loader=true;
            try {
                let ajax = await axios({
                    method: 'get',
                    url: 'https://jsonplaceholder.typicode.com/users'
                })
                console.log(ajax)
                this.loader=false;
                this.response = ajax.data
                
                
            }
            catch (err) {
                console.log(err)
                this.error = err.message
            }
        },
       
    }
}
</script>
