<template>
    <div class="container-fluid template" style="background-image: url('/images/smoke_bg.jpg');background-size: cover;">
        <h2> Add Building Or House </h2>

        <!-- <span style="position: absolute; right: 3rem; top:4.2rem; "> 
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
            </span>     -->

        <div class="row py-4 d-flex justify-content-center">

            <div class="col-lg-3 text-start card_wrap pb-3" v-for="(data, index) in response" :key="index">
                <router-link :to="taburl + data.id">
                    <div class="card">
                        <img :src="basePath + data.image_path" class="card-img-top p-3" alt="image">
                        <div class="card-body pt-0">
                            <h5 class="card-title"> {{ data.building_name }} {{ data.id }} </h5>
                            <p class="card-text">{{ data.prop_address }} {{ data.prop_city }} Chhattisgarh</p>
                        </div>
                    </div>
                </router-link>
                

                <div class="three_dots dropdown px-1" id="edit_prop">
                    <i class="fa fa-list-ul" id="dropdownMenuButton1" data-bs-toggle="dropdown"></i>
                    <ul class="dropdown-menu bg_purple" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a class="dropdown-item" href="#">
                                <router-link :to="`/edit_property/` + data.id">
                                    <i class="fa fa-pencil-square  pe-2" aria-hidden="true"></i> Edit Property
                                </router-link>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                <i class="fa fa-trash clr_orange pe-2" aria-hidden="true"></i> Delete Property
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <!-- <li class="nav-item" @click="hideMenu($event)">
                <a class="nav-link"> </a>
            </li> -->
            <div class="col-lg-8">
                <h6 class="alert alert-success" v-if="successMsg"> Updated Successfully !! </h6>
                <span class="loader" v-if="loader"></span>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
// import { messaging } from "../firebase"
// import getMessaging from 'firebase/messaging';
// import { getToken } from "firebase/messaging";

export default {
    name: 'MyProperties',
    data() {
        return {
            // property: "",
            // propImage: "",
            taburl: '/my_properties_detail/',
            buildingName: '',
            propCity: "",
            propAddress: "",

            response: [],
            loader: '',
            successMsg: '',
            basePath: 'http://rentshent.xyz/api/',
            imagePath: '',
            id: '',
        }
    },

    methods: {
        // postData(e) {
        //     console.log(e.target)
        //     // e.preventDefault();
        // },


        // async requestPermit() {
        //     const permit = await Notification.requestPermission();
        //     // const messaging = getMessaging();
        //     if (permit === 'granted') {
        //         const token = await getToken(messaging, { vapidKey: 'BEnVZ0oFuDj0uEyA_QD-qui7wG_WOpaAc2GyVhPSRujg6zO9zznxwluYrkeaXTE_U3w7s4K6DGfYl8BBaxQT0wk' })
        //         console.log('Token Ganareted',  token);
        //     } else if (permit === 'denied') {
        //         console.log('You denied for Notifications')
        //     } else {
        //         console.log("Something went wrong")
        //     }
        // },

        async postData() {
            this.loader = true;
            // console.log(this.property, this.buildingName)
            try {
                const Response = await axios({
                    method: 'post',
                    url: 'http://rentshent.xyz/api/my_properties.php',
                    data: {
                        building_name: this.buildingName,
                        prop_city: this.propCity,
                        prop_address: this.propAddress,
                        image_path: this.imagePath,
                        id: this.id
                        // selected_img:this.propImage
                    }
                });
                if (Response.status == 200) {
                    this.loader = false;
                    // console.log(Response.data);
                    this.response = Response.data;
                    // console.log(JSON.stringify(this.response))
                } else {
                    console.log("something went wrong")
                    // this.$router.push({ path: '/Tab-View/'})
                }
            } catch (error) {
                this.$router.push({ path: '/error_page/'})
            }



        },
    },
    mounted() {
        this.postData();
        // this.requestPermit()

    }
}

</script>

<style scoped>
.three_dots {
    position: absolute;
    margin-left: 20%;
    margin-top: -4rem;
}


.card_wrap .card {
    border-radius: 24px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.5s;
}

.card_wrap .card img {
    border-radius: 30px;
    height: 300px;
}

.card_wrap .card:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.5s;
}

@media (max-width:567px) {
    .d_flex {
        display: block;
    }

    .d_flex .w-50 {
        width: unset !important;
    }

    .info_card {
        margin-left: 16%;
    }

    .three_dots {
        margin-left: 82% !important;
    }
}
</style>
