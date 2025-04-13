<template>
    <div class="container-fluid vh-100 " style="background-image: url('/images/smoke_bg.jpg');background-size: cover;">
        <h2> Add Building Or House </h2>

        <div class="row py-4 d-flex justify-content-center" >

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
            basePath: 'http://localhost/rental_app/api/',
            imagePath: '',
            id: ''
        }
    },

    methods: {
        // postData(e) {
        //     console.log(e.target)
        //     // e.preventDefault();
        // },

        async postData() {
            console.log(this.property, this.buildingName)
            const Response = await axios({
                method: 'post',
                url: 'http://localhost/rental_app/api/my_properties.php',
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
                console.log("qwery done")
                // console.log(Response.data);
                this.response = Response.data;
                // console.log(JSON.stringify(this.response))
            } else {
                console.log("something went wrong")
            }
        },
    },
    mounted() {
        this.postData();
    }
}

</script>

<style scoped>
.card_wrap .card {
    border-radius:24px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.5s;
}
.card_wrap .card img{
    border-radius:30px;
    height: 300px;
}

.card_wrap .card:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.5s;
}
</style>
