<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg_purple " v-if="navLinks">
        <div class="container-fluid ">
            <a class="navbar-brand " href="#">
                <img src="images/rental_home_logo2.png" />
                <span class="text_orange"> Rent </span> <span>Easy</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav" >
                <ul class="navbar-nav" >
                    <li class="nav-item">
                        <a class="nav-link"> <router-link to="/" @click="refresh()">Home</router-link> </a>
                    </li>
                    <!-- <li class="nav-item" @click="hideMenu($event)">
                        <a class="nav-link"> <router-link to="/ContactUs"> Contact Us </router-link> </a>
                    </li> -->
                    <!-- <li class="nav-item" @click="hideMenu()">
                        <a class="nav-link"> <router-link to="/Tab-View"> Tab View </router-link> </a>
                    </li> -->
                    <!-- <li class="nav-item" @click="hideMenu()">
                        <a class="nav-link"> <router-link to="/add_property"> Post </router-link> </a>
                    </li> -->
                    <!-- <li class="nav-item" @click="hideMenu($event)">
                        <a class="nav-link"> <router-link to="/ref"> Ref </router-link> </a>
                    </li> -->
                    <!-- <li class="nav-item" @click="hideMenu()">
                        <a class="nav-link"> <router-link to="/samples"> Samples </router-link> </a>
                    </li> -->
                    <li class="nav-item" @click="hideMenu()">
                        <a class="nav-link"> <router-link to="/add_property"> Add Property </router-link> </a>
                    </li>

                    <!-- <li class="nav-item" @click="hideMenu($event)">
                        <a class="nav-link"> <router-link to="/imagepost"> test </router-link> </a>
                    </li> -->

                    <li class="nav-item" @click="hideMenu()">
                        <a class="nav-link"> <router-link to="/myProperty">My Properties </router-link> </a>
                    </li>

                    <!-- <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Profile
                        </a>
                        <ul class="dropdown-menu bg-dark bg_purple">
                            <li @click="refresh()" style="display:none;">
                                <a class="nav-link"> <router-link to="/MultiSlider"> Multi Slider </router-link> </a>
                            </li>
                            <li v-for="(data, index) in profiles" :key="index" @click="hideMenu2($event)">
                                <a class="dropdown-item "> <router-link :to="/profile/ + data"> {{ data }}</router-link>
                                </a>
                            </li>
                        </ul>
                    </div> -->

                </ul>
                <ul class="navbar-nav ps-lg-5 ms-lg-5 pb-3">
                    <li class="nav-item px-2" v-if="loginLink" @click="hideMenu()">
                        <a class="dropdown-item"> <router-link to="/login"> login</router-link> </a>
                    </li>
                    <li class="nav-item px-2" v-if="register" @click="hideMenu()">
                        <a class="dropdown-item"> <router-link to="/register"> Register</router-link> </a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="dropdown-item log_out" v-if="username"> {{ username }} ! </a>
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
            username: '',
            navLinks: true,
        }
    },
    methods: {
        hideMenu() {
            let smallNav = document.getElementById('navbarNav')
            // let smallNav = e.target.parentNode.parentNode.parentNode.parentNode;
            let statusHide = smallNav.classList.remove('show')
            if (!statusHide) {
                statusHide
            }
        },
        hideMenu2() {
            let smallNav2 = document.getElementById('navbarNav')
            let statusHide2 = smallNav2.classList.remove('show')
            if (!statusHide2) {
                statusHide2
            }
        },

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
            this.navLinks = '';
            this.$router.push({ name: 'logIn' }) 
        } else {
            this.$router.push({ name: 'HomePage' })
            this.loginLink = false;
            this.logout = true;
            this.register = false;
            this.username = localUserParse // for print user name

        }
    }
}
</script>

<style>
a.log_out:hover {
    color: #ff944d;
    cursor: pointer;
}

.text_orange {
    color: #ff944d;
}

.navbar-brand img {
    height: 32px;
}

a.navbar-brand {
    font-size: 1.8rem;
    display: flex;
    padding: 0px 10px 0px 0px;
}

@media (min-width: 992px) {
    .navbar-expand-lg .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
        justify-content: space-between;
    }
}

@media (max-width:567px) {
    #navbarNav.navbar-collapse {
        position: absolute;
        border-radius: 0px 9px 9px 9px;
        background: rgb(96, 67, 157);
        background: linear-gradient(97deg, rgba(96, 67, 157, 1) 50%, rgba(126, 89, 203, 1) 100%);
        top: 55px;
        width:100%;
        /* transform: translateX(-200px); */
        left: 0;
        text-align: left;
        padding: 0px 16px;
        z-index: 11;
    }

    .nav-item .nav-link {
        padding: 12px 0px;
        border-bottom: 1px solid #e7e7e715;
    }

    .show {
        transform: translateX(0px);
    }
}
</style>
