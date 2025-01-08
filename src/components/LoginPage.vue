<template>
    <div class="container-fluid mx-lg-4">
        <h2> CRUD Post </h2>

        <div class="row">
            <div class="col-lg-3 text-start form py-4">
                <form @submit="logIn($event)">
                    <div class="form-group ">
                        <label> E-mail </label>
                        <input type="email" v-model="email" class="form-control" required>
                    </div>

                    <div class="form-group ">
                        <label for="exampleInputEmail1"> Password </label>
                        <input type="password" v-model="password" class="form-control" required placeholder="Password">
                    </div>
                    <div>
                        <button type="submit" class="btn btn-dark btn-sm mx-1"> POST </button>
                    </div>
                </form>
            </div>
            <div class="col-lg-9">
                <h5 class="alert alert-danger" v-if="notMatch"> Email or Password not Matched </h5>
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
                method: 'get',
                url: `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            })
            // console.log(qwery.data)
            console.log(qwery)
            if (qwery.status == 200 && qwery.data.length > 0) {
                localStorage.setItem("userinfo", JSON.stringify(qwery.data[0]))
                this.$router.push({ name: 'HomePage' })
                window.location.reload();

            } else {
                this.notMatch = true;
                setTimeout(() => {
                    this.notMatch = false;
                }, 2000);
            }

        }
    }

}
</script>

<style>
.form-group {
    margin-bottom: 1rem;
}
</style>
