<template>
    <div class="container-fluid mx-lg-4">
        <h2> CRUD Post </h2>

        <div class="row">
            <div class="col-lg-3 text-start form py-4">
                <form @submit="postData($event), refresh()">
                    <div class="form-group ">
                        <label for="exampleInputEmail1"> Name </label>
                        <input type="text" v-model="name" required class="form-control">
                    </div>

                    <div class="form-group ">
                        <label> E-mail </label>
                        <input type="email" v-model="email" class="form-control" required>
                    </div>

                    <div class="form-group ">
                        <label for="exampleInputEmail1"> Password </label>
                        <input type="password" v-model="password" class="form-control" required placeholder="Password">
                    </div>
                    <div class="form-group ">
                        <label for="exampleInputEmail1"> Confirm Password </label>
                        <input type="password" v-model="conformPass" class="form-control" placeholder="Password">
                    </div>
                    <div>
                        <button type="submit" class="btn btn-dark btn-sm mx-1"> POST </button>


                    </div>
                </form>
            </div>
            <div class="col-lg-9">
                <h6 class="alert alert-success"> Updated Successfully !! </h6>
            </div>
        </div>



    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'RegisterPage',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            conformPass: ''

        }
    },

    methods: {
        async postData(e) {
            e.preventDefault();
            if (this.password === this.conformPass) {
                const Axios = await axios({
                    method: 'post',
                    url: 'http://localhost:3000/users',
                    data: {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        confirm: this.conformPass
                    }
                })
                console.log(Axios)
                if (Axios.status == 201) {
                    console.log("qwery done")
                    // localStorage.setItem("userinfo", JSON.stringify(Axios.data))
                    this.$router.push({ name: 'logIn' })
                } else {
                    console.log("something went wrong")
                }

            } else {
                alert("false");
            }


        },
        refresh() {
            // PAGE REFRESH
            window.location.reload();
        }
    }
    // mounted() {
    //     let localUser = localStorage.getItem("userinfo")
    //     if (!localUser) {
    //         this.$router.push({ name: 'RegisterPage' })
    //     } else {
    //         console.log(localUser)
    //         this.$router.push({ name: 'HomePage' })
    //     }
    // },

}

</script>

<style>
.form-group {
    margin-bottom: 1rem;
}
</style>
