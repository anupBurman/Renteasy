<template>
    <div class="container-fluid px-0 template"
        style="background-image: url('/images/abstract_01.webp');background-size: cover;">
        <!-- style="background-image: url('/images/flats_with_garden.jpg'), url('/images/doted_bg11.png') ;
           background-size: cover; background-blend-mode: overlay; " -->
        <div class=" py-3 bg_purple">
            <img src="images/rental_home_logo2.png" />
            <h2 class="page_header">
                <span class="text_orange">Rent</span><span class="text-light">Easy</span>
            </h2>
        </div>
        <h2> Create Account </h2>
        <div class="row px-lg-5 p-3">
            <div class="col-lg-4">
            </div>
            <div class="col-lg-4 text-start">

                <!-- <h5 class="text-success text-center"> {{ successMsg }}
                </h5>
                <div class="alert alert-danger alert-dismissible" role="alert" v-if="notMatch">
                    {{ errorMessage }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> -->

                <div class="form p-4">
                    <form @submit="postData($event)">
                        <div class="form-group">

                            <label>
                                <i class="fa fa-user" aria-hidden="true"></i>
                                Please Enter Name <span class="text_warning"> * </span>
                            </label>
                            <input type="text" placeholder="Name" v-model="name" required class="form-control">
                        </div>
                        <div class="form-group ">
                            <label>
                                <i class="fa fa-envelope" aria-hidden="true"></i>Enter Valid E-mail
                                <span class="text_warning"> * </span>
                            </label>
                            <input type="email" placeholder="Email" v-model="email" class="form-control" required>
                        </div>
                        <div class="form-group ">

                            <label class="d_flex_between">
                                <span>
                                    <i class="fa fa-unlock-alt" aria-hidden="true"></i>Password
                                    <span class="text_warning"> * </span>
                                </span>
                                <i class="fa fa-info-circle px-2 info_btn" aria-hidden="true">
                                </i>

                                <span class="info_card alert alert-warning ">
                                    <ul class="ps-3">
                                        <li>
                                            Minimum length must be 6 characters and maximum 12 characters
                                        </li>
                                        <li>
                                            should be atleast 1 numeric character.
                                        </li>
                                    </ul>
                                </span>

                            </label>
                            <input type="password" v-model="password" minlength="6" maxlength="10" class="form-control"
                                required placeholder="Password">
                        </div>
                        <div class="form-group ">
                            <label>
                                <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                Confirm Password
                                <span class="text_warning"> * </span>
                            </label>
                            <input type="password" v-model="conformPass" minlength="6" maxlength="10"
                                class="form-control" placeholder="Password">
                        </div>
                        <div>
                            <button type="submit" class="btn  bg_purple text-white  w-100 "> Register </button>
                        </div>
                        <div class="form-group text-secondary pt-2">
                            Already have an account?
                            <router-link to="/login"><span class="text-dark"> Login </span></router-link>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    </div>
</template>


<script>

import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'RegisterPage',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            conformPass: '',
        }
    },
    methods: {
        async postData(e) {
            e.preventDefault();
            if (this.password === this.conformPass) {
                const Axios = await axios({
                    method: 'post',
                    url: 'http://rentvent.shop/api/users.php',
                    data: {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        confirm: this.conformPass
                    }
                })
                console.log(Axios.data.sql_massege)
                if (Axios.data.sql_massege === 'Inserted') {
                    Swal.fire({
                        title: "Registration Done !!",
                        icon: "success",
                        text: 'You can login now',
                    }).then(() => {
                        this.$router.push({ name: 'logIn' })
                    })
                    // localStorage.setItem("userinfo", JSON.stringify(Axios.data))

                } else {
                    Swal.fire({
                        icon: "error",
                        // title: "Something went wrong!",
                        text: "Something went wrong!",
                    });
                }
            } else {
                Swal.fire({
                    icon: "error",
                    text: "Confirm Password Mismatch",
                });
            }
        },
        refresh() {
            // PAGE REFRESH
            window.location.reload();
        }
    },

    mounted() {
        let localUser = localStorage.getItem("userinfo")
        if (!localUser) {
            this.$router.push({ name: 'RegisterPage' })
        } else {
            console.log(localUser)
            this.$router.push({ name: 'HomePage' })
        }
    },
}

</script>
<style>
/* .template {
    background: rgb(238,192,174);
    background: linear-gradient(32deg, rgba(238,192,174,0.5074404761904762) 0%, rgba(237,217,214,0.5354516806722689) 54%, rgba(229,218,249,0.5354516806722689) 100%);
} */
</style>
