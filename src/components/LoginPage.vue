<template>
    <div class="container-fluid px-0 template"
        style="background-image: url('/images/abstract_01.webp');background-size: cover;">
        <!-- <h2 class="page_header py-2"> CRUD Post </h2> -->
        <div class=" py-3 bg_purple">
            <img src="images/rental_home_logo2.png" />
            <h2 class="page_header">
                <span class="text_orange">Rent</span><span class="text-light">Easy</span>
            </h2>
        </div>
        <div class="row p-4" v-if="loginBlock">
            <h5> Enter Credentials to Login </h5>

            <div class="col-lg-4"></div>
            <div class="col-lg-4 text-start form p-4">
                <div class="form-group text-secondary pt-2">
                    Don't have an account?
                    <router-link to="/register"><span class="text-dark"> Create account </span></router-link>
                </div>

                <!-- form start -->
                <form @submit="logIn($event)">
                    <div class="form-group ">
                        <label>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            Email*
                        </label>
                        <input type="email" placeholder="Enter Your Name" v-model="email" class="form-control" required>
                    </div>
                    <div class="form-group ">
                        <label for="exampleInputEmail1">
                            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                            Password*
                        </label>
                        <input type="password" maxlength="12" minlength="6" v-model="password" class="form-control" required
                            placeholder="Enter Password">
                    </div>
                    <div class="form-group text-secondary">
                        <input class="form-check-input me-1" type="checkbox" id="user_licence" value="user_licence"
                            v-model="userLicence" required />
                        End User
                        <router-link to="/terms_conditions">
                            <span class="text-dark"> License Agreement * </span>
                        </router-link>
                    </div>
                    <div>
                        <button type="submit" class="btn  bg_purple text-white  w-100 "> Button </button>
                    </div>
                    <div class="form-group text-secondary text-end mt-1">

                        <span class="text-dark" @click="forgotfunc()"> Forget Password ? </span>

                    </div>
                </form>
            </div>
        </div>

        <div class="row p-4 " v-if="forgotPass">
            <h5> Enter Registered Email </h5>
            <p> We will send password on your email id </p>

            <div class="col-lg-4"></div>
            <div class="col-lg-4 text-start form p-4">
                <!-- form start -->
                <form @submit="forgotPassword($event)"  >
                    <div class="form-group ">
                        <label>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            Email
                        </label>
                        <input type="email" placeholder="Enter Your Email " v-model="email" class="form-control"
                            required>
                    </div>
                    <div>
                        <button type="submit" class="btn  bg_purple text-white  w-100 "> Button </button>
                    </div>
                </form>
            </div>
        </div>



    </div>
</template>



<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'logIn',
    data() {
        return {
            email: '',
            password: '',
            userLicence: '',
            loginBlock: true,
            forgotPass: '',

        }
    },
    methods: {
        async logIn(e) {
            e.preventDefault();
            // let email = this.email;
            // let pw = this.password;
            let qwery = await axios({
                method: 'POST',
                url: 'http://localhost/rental_app/api/user_login.php',
                data: {
                    email: this.email,
                    password: this.password,
                    user_license: this.userLicence,
                }
            })
            // console.log(qwery.data.sql_massege[0])
            if (qwery.status == 200 && qwery.data.status == true) {
                localStorage.setItem("userinfo", JSON.stringify(qwery.data.sql_massege[0]))
                // this.$router.push({ name: 'HomePage' })
                window.location.reload();

            } else {
                Swal.fire({
                    icon: "error",
                    text: "Email or Password Wrong !",
                });
            }
        },
        forgotfunc() {
            this.loginBlock = false
            this.forgotPass = true;
        },
        async forgotPassword(e) {
            e.preventDefault();
            let qwery2 = await axios({
                method: 'POST',
                url: 'https://rentshent.xyz/api/forgot_password.php',
                data: {
                    email: this.email,
                }
            })
            // console.log(qwery.data.sql_massege[0])
            if (qwery2.status == 200 && qwery2.data.status == true) {
                // localStorage.setItem("userinfo", JSON.stringify(qwery.data.sql_massege[0]))
                // this.$router.push({ name: 'HomePage' })
                // window.location.reload();
                Swal.fire({
                    icon: "success",
                    text: "mail sent successfully",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    text: "This Email is Not Registered With Our Database, Please try with Onother Email Id !",
                });
            }
        }
    },

}
</script>

<style>
.otp_box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.otp_box input {
    width: 40px;
    height: 40px;
    border-radius: 7px;
}

.form-group {
    margin-bottom: 1rem;
}
</style>
