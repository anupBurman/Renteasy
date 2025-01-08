<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link"> <router-link to="/" @click="refresh()">Home</router-link> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"> <router-link to="/about">About</router-link> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"> <router-link to="/SignIn"> Sign In </router-link> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"> <router-link to="/ContactUs"> Contact Us </router-link> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"> <router-link to="/Tab-View"> Tab View </router-link> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"> <router-link to="/registration"> Regitration </router-link> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"> <router-link to="/crud"> Get </router-link> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"> <router-link to="/post"> Post </router-link> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"> <router-link to="/ref"> Ref </router-link> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"> <router-link to="/VueCarousal"> Slider </router-link> </a>
                    </li>
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Profile
                        </a>

                        <ul class="dropdown-menu bg-dark">
                            <li @click="refresh()" style="display: none;">
                                <a class="nav-link"> <router-link to="/MultiSlider"> Multi Slider </router-link> </a>
                            </li>
                            <li v-for="(data, index) in profiles" :key="index">
                                <a class="dropdown-item "> <router-link :to="/profile/ + data"> {{ data }}</router-link>
                                </a>
                            </li>

                            <!-- <li>
                                <a class="dropdown-item" > <router-link to="/profile/director"> Director </router-link> </a>
                            </li>
                            

                            <li>
                                <a class="dropdown-item" > <router-link to="/profile/admin"> Adimnistration </router-link> </a>
                            </li> -->


                        </ul>
                    </div>


                </ul>
                <ul class="navbar-nav ps-lg-5 ms-lg-5">
                    <li class="nav-item px-2" v-if="loginLink">
                        <a class="dropdown-item"> <router-link to="/login"> login</router-link> </a>
                    </li>
                    <li class="nav-item px-2" v-if="register">
                        <a class="dropdown-item"> <router-link to="/register"> Register</router-link> </a>
                    </li>

                    <li class="nav-item px-2">
                        <a class="dropdown-item log_out" v-if="username"> Hii {{ username }} </a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="dropdown-item log_out" @click="logOut(), refresh()" v-if="logout"> Logout </a>
                    </li>



                </ul>



            </div>



        </div>
    </nav>
</template>
<script>
export default {
    name: 'NavBar',
    data() {
        return {
            profiles: ['Principle', 'Director', 'Adimin'],
            loginLink: true,
            logout: true,
            register: true,
            username: ''
        }
    },
    methods: {
        refresh() {
            window.location.reload();
        },
        logOut() {
            let localUser = localStorage.getItem("userinfo")
            if (localUser) {
                localStorage.removeItem("userinfo");
                this.$router.push({ name: 'logIn' });
                this.logout = false;
                this.loginLink = true;
            } else {
                this.logout = true;
            }
        }
    },

    // GET USER INFO FROM LOCAL STORAGE AND THEN APPLY CONDITIONS
    mounted() {
        let localUser = localStorage.getItem("userinfo");
        let localUserParse = JSON.parse(localUser);

        if (!localUser) {
            this.logout = false;
            

        } else {
            this.$router.push({ name: 'HomePage' })
            this.loginLink = false;
            this.logout = true;
            this.register = false;
            this.username = localUserParse.name // for print user name
        }





    }

}
</script>
<style>
a.log_out {
    color: #fff;
}

a.log_out:hover {
    color: #f86464;
    cursor: pointer;
}
</style>
