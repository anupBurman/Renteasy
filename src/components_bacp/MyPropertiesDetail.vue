<template>
    <div class="container">
        <!-- <h2> My Properties Detail {{ rowId }} </h2> -->

        <div class="row py-4 d-flex justify-content-center">
            <div class="col-lg-12 mb-3">

                <div class="accordion accordion-flush " id="accordionFlushExample">
                    <div class="accordion-item " v-for="(data, index) in response" :key="index">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false"
                                aria-controls="flush-collapseOne">
                                <img :src="basePath + data.image_path" alt="image" class="rounded prop_image" />
                                <span class="px-2">
                                    {{ data.building_name }}, {{ data.address }} /Property Id:
                                    <span class="btn btn-danger btn-sm"> {{ rowId }} </span>
                                </span>
                            </button>
                        </h2>

                        <form id="form">
                            <input type="hidden" name="row_id" v-model="rowId"><br>
                        </form>
                        <form class="d-none">
                            <input type="text" v-model="rowId"><br>
                        </form>

                        <div id="flush-collapseOne" class="accordion-collapse collapse row"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="col-lg-6 col-md-6 ">
                                <div class="d-flex justify-content-between p-2">
                                    <span> Total Rooms </span> <span> {{ room_countr }} </span>
                                </div>
                                <div class="d-flex justify-content-between p-2">
                                    <span> Occupied </span> <span> {{ response2.length }} </span>
                                </div>
                                <div class="d-flex justify-content-between p-2">
                                    <span> To-Let </span> <span> {{ room_countr - response2.length }} </span>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="d-flex justify-content-between p-2">
                                    <span> Total </span> <span> {{ TotalAmount }} </span>
                                </div>
                                <div class="d-flex justify-content-between p-2">
                                    <span> Recieved Amount </span> <span> {{ recivedAmount }} </span>
                                </div>
                                <div class="d-flex justify-content-between p-2">
                                    <span> Due Amount </span> <span> {{ TotalAmount - recivedAmount }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-lg-6">
                <div class="p-3 bg-dark text-light text-start"> Rooms/Flats - {{ room_countr }}
                    <router-link :to="tabURL + rowId">
                        <button class="btn btn-sm  bg_purple text-white mx-lg-4  round"><i
                                class="bi bi-plus-square-dotted"></i> Add </button>
                    </router-link>
                </div>
                <!-- <div  class=""   v-for="i in parseInt(room_countr)" :key="i"> -->
                <div class="text-start alert alert-warning p-3 d_flex" v-for="(data, i) in response2" :key="i">
                    <router-link :to="`/tenent_profile/` + rowId + `/` + data.id + `/` + data.rent_start_date">
                        <div class="d_flex rooms" id="room_s">
                            <i class="bi bi-house-heart-fill"> </i>
                            <div>
                                <span class="px-1">Room No. {{data.room_id}} </span><br>
                                <span class="px-1">{{ data.tenent_name }} </span>
                                <span class="px-1">{{ data.id }}</span>
                            </div>
                        </div>
                    </router-link>
                    <button class="btn btn-default btn-sm round">
                        {{ data.rent_amount }}
                    </button>
                    <button class="btn btn-dark btn-sm round">
                        Remove
                    </button>

                    <!-- </div> -->
                </div>
            </div>

            <div class="col-lg-6">
                <div class="p-3 bg-dark text-light text-start"> Rooms/Flats </div>
                <div class="text-start alert alert-warning p-3 d_flex" v-for="i in parseInt(shop_countr)" :key="i">
                    <div>
                        <i class="bi bi-house-heart-fill"> </i>
                        <span class="px-1"> {{ response2.tenent_name }} </span>
                    </div>
                    <button class="btn btn-dark btn-sm round">
                        Remove
                    </button>
                </div>
            </div>
        </div>

        <!-- {{ response2 }} -->
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    name: 'MyPropertiesDetail',

    data() {
        return {
            buildingName: '',
            propCity: "",
            propAddress: "",
            room_countr: 1,
            shop_countr: 0,
            response: [],
            // loader: '',
            // successMsg: '',
            basePath: 'http://localhost/rental_app/api/',
            imagePath: '',
            tabURL: "/add_room/",
            rowId: '',


            response2: [],
            // filteredData: [],
            TotalAmount: '',
            recivedAmount: '',
        }
    },

    methods: {
        async postData(e) {
            this.rowId = this.$router.currentRoute.value.params.id;

            console.log(e);
            const Response = await axios({
                method: 'POST',
                url: 'http://localhost/rental_app/api/my_properties_detail.php?id=' + this.rowId,
                data: {
                    id: this.rowId,
                    building_name: this.buildingName,
                    prop_city: this.propCity,
                    prop_address: this.propAddress,
                    image_path: this.imagePath,
                }
            });
            if (Response.status == 200) {
                console.log("qwery done")
                this.response = Response.data;
                // console.log(JSON.stringify(this.response))
                this.room_countr = this.response[0].room_countr
                this.shop_countr = this.response[0].shop_countr
            } else {
                console.log("something went wrong")
            }
            const Response2 = await axios({
                method: 'POST',
                url: 'http://localhost/rental_app/api/tenent_details.php?id=' + this.rowId,
                data: {
                }
            })
            if (Response2.status == 200) {
                this.response2 = Response2.data;
                // console.log(Response2.data[0].rent_start_date);
                // console.log(JSON.stringify(this.response2))
            } else {
                console.log("something went wrong dat couldnt fetch")
            }
        },

        async getAmount() {
            const Response3 = await axios({
                method: 'post',
                url: 'http://localhost/rental_app/api/tenent_details.php',
                data: {
                    prop_id: this.rowId,
                }
            });
            if (Response3.status == 200) {
                // console.log(Response3)
                this.TotalAmount = Response3.data;
            } else {
                console.log("something went wrong")
            }
        },

        async receivedAmount() {
            const Response4 = await axios({
                method: 'post',
                url: 'http://localhost/rental_app/api/tenent_details.php',
                data: {
                    get_amount: this.rowId,
                }
            });
            if (Response4.status == 200) {
                // console.log(Response3)
                this.recivedAmount = Response4.data;
            } else {
                console.log("something went wrong")
            }
        },
    },

    mounted() {
        this.postData();
        this.getAmount();
        this.receivedAmount()
    },

    beforeUpdate() {
        this.buildingName

    }

}

</script>

<style scoped>
.card_wrap .card {
    border-radius: 9px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.5s;
}

.card_wrap .card:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.5s;
}

.prop_image {
    width: 50px;
    border: 1px solid gray;
}

.d_flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.rooms i {
    font-size: 2rem;
}
 a{
    color: #333;
}
.alert-warning a :hover{
    color: #ff944d;
}

.accordion-flush>.accordion-item>.accordion-header .accordion-button,
.accordion-flush>.accordion-item>.accordion-header .accordion-button.collapsed {
    background-color: antiquewhite;
}
</style>
