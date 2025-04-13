<template>
    <div class="container-fluid px-0 vh-100"
        style="background-image: url('/images/abstract_01.webp');background-size: cover;">
        <!-- <h2 class="page_header py-2"> CRUD Post </h2> -->
        <div class=" py-3 bg_purple">
            <img src="images/rental_home_logo2.png" />
            <h2 class="page_header">
                <span class="text_orange">Rent</span><span class="text-light">Easy</span>
            </h2>
        </div>
        <div class="row p-4 ">
            <h5> Enter Credentials to Login </h5>
            <div class="col-lg-4"></div>
            <div class="col-lg-4 text-start form p-4">
                <!-- alert massege -->
                <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="notMatch">
                    Email or password is incorrect !
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

                <!-- form start -->
                <form @submit="logIn($event)">
                    <div class="form-group ">
                        <label>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            Email
                        </label>
                        <input type="email" placeholder="Enter Your Name" v-model="email" class="form-control" required>
                    </div>
                    <div class="form-group ">
                        <label for="exampleInputEmail1">
                            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                            Password
                        </label>
                        <input type="text" maxlength="12" minlength="6" v-model="password" class="form-control" required
                            placeholder="Enter 10 Digit Phone Number">
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

export default {
    name: 'logIn',
    data() {
        return {
            email: '',
            password: '',
            notMatch: ''
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
                    password: this.password
                }
            })
            // console.log(qwery.data.sql_massege[0])
            if (qwery.status == 200 && qwery.data.status == true) {
                localStorage.setItem("userinfo", JSON.stringify(qwery.data.sql_massege[0]))
                // this.$router.push({ name: 'HomePage' })
                window.location.reload();

            } else {
                this.notMatch = true;
                setTimeout(() => {
                    this.notMatch = false;
                }, 2000);
            }
        },
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
