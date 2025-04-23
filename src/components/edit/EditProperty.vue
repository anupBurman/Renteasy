<template>
    <div class="container-fluid template"
        style="background-image: url('/images/yyy.jpg');  background-size: cover; background-blend-mode: overlay; ">
        <h2 class="pb-4"> <span> Edit Property/</span> <span class="btn bg_purple text-light rounded  btn-sm py-0">{{
            propId }}</span> </h2>

        <div class="row px-lg-5 rounded add_property ">
            <div class="col-lg-4 px-0 rounded ">
            </div>

            <div class="col-lg-4 text-start ">
                <!-- <h6 class="alert alert-success" v-if="successMsg"> Updated Successfully !! </h6> -->
                <span class="loader-loader" v-if="loader"></span>

                <!-- <div v-if="successAlert" class="alert alert-success alert-dismissible">
                    {{ successMessage }}
                    <button type="button" class="btn-close" @click="successAlert = false" aria-label="Close"></button>
                </div>

                <div v-if="errorAlert" class="alert alert-danger alert-dismissible">
                    <button type="button" class="btn-close" @click="errorAlert = false" aria-label="Close"></button>
                    {{ errorMessage }}
                </div> -->

                <div class="form p-4">
                    <form id="form" @submit.prevent="btnUpload($event)">
                        <div class="form-group d-none ">
                            <label> Property ID </label>
                            <input type="hidden" name="propId" class="form-control" v-model="propId"
                                placeholder="Property Id" required>
                        </div>

                        <!-- 1 -->
                        <div class="form-group ">
                            <label> Property Name </label>
                            <input type="text" name="building_name" class="form-control"
                                v-model="response.building_name" placeholder="Property/Building Name" required>
                        </div>


                        <!-- 2 -->
                        <div class="form-group ">
                            <label> Property Address </label>
                            <input type="text" class="form-control" name="address" v-model="response.address"
                                placeholder="Property Address*" required>
                        </div>

                        <!-- 3 -->
                        <div class="form-group ">
                            <label> State </label>
                            <select class="form-select" name="prop_city" aria-label="Default select example"
                                v-model="response.prop_city">
                                <option selected>Select Property Location*</option>
                                <option :value="data" v-for="(data, index) in states" :key="index"> {{ data }} </option>
                            </select>
                        </div>



                        <!-- 4 -->
                        <div class="form-group mb-1 ">
                            <label> Property/Building Image </label>
                        </div>

                        <div class="form-group file_upload ">
                            <input type="file" ref="file" accept="image/*" class="form-control w-75">
                            <div class="w-25 p-2 bg-light rounded">
                                <img src="xyz.jpg" class="preview_img" />
                            </div>
                        </div>

                        <hr>
                        <h5> Select Quantity of Rooms/Flats or Shops </h5>
                        <div class="form-group file_upload ">
                            <!-- <label >Building Name</label> -->
                            <!-- <span> Flats/Rooms </span> -->
                            <div>
                                <p class="my-0"> Quantity of Flats/Rooms</p>
                                <button type="button" class="btn btn-sm btn-secondary px-3" @click="decrement()">
                                    -
                                </button>
                                <input type="text" name="room_countr" v-model="roomCountr"
                                    class="w-25 py-0 px-2   text-center" />
                                <button type="button" class="btn btn-sm btn-dark px-3" @click="increment()"> + </button>
                            </div>
                            <div>
                                <p class="my-0">Quantity of Shops</p>
                                <button type="button" class="btn btn-sm btn-secondary px-3" @click="decrement2()">
                                    -
                                </button>
                                <input type="text" name="shop_countr" v-model="shopCountr"
                                    class=" w-25 py-0 px-2 text-center" />
                                <button type="button" class="btn btn-sm btn-dark px-3" @click="increment2()"> +
                                </button>
                            </div>
                        </div>

                        <div class="form-group py-3 mb-0">
                            <button type="button" class="btn  bg_purple text-white  w-100 " v-show="loaderSmall">
                                <span class="loader-sm"> </span>
                            </button>
                            <button type="submit" name="submit" class="btn bg_purple text-light  form-control"
                                v-show="submitBtn"> Submit
                            </button>
                        </div>
                        <div class="form-group mb-0">
                            <span class="loader" v-if="loader"></span>
                        </div>
                        <!-- <div v-html="uploadedImage"></div> -->
                    </form>
                </div>

            </div>
            <div class="col-lg-4 px-0 rounded ">
                <!-- <img src="/images/creative_bg.jpg" class="rounded" alt="image" style="width: 100%; height: 100%; opacity: 0.5;"   />  -->
                <!-- <h6 class="alert alert-success" v-if="successMsg"> Updated Successfully !! </h6>
                <span class="loader" v-if="loader"></span> -->
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'EditProperty',
    data() {
        return {
            response: [],
            propId: '',
            buildingName: '',
            propCity: '',
            postBody: '',
            selectedImg: '',
            roomCountr: 0,
            shopCountr: 0,
            // address: '',
            loader: '',
            submitBtn: true,
            loaderSmall: '',
            // successMsg: '
            states: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujrat',
                'Hayana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
                'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
                'Sikkim', 'Tamilnadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal',

            ],
            file: '',
            // successAlert: false,
            // errorAlert: false,
            uploadedImage: ''
        }
    },

    methods: {
        // getPropId() {
        //     this.propId = this.$router.currentRoute.value.params.propId;
        // },

        increment() {
            return (this.roomCountr += 1);
        },
        decrement() {
            if (this.roomCountr > 0) {
                return (this.roomCountr -= 1)
            } else {
                this.roomCountr = 0;
            }
        },

        increment2() {
            return (this.shopCountr += 1);
        },
        decrement2() {
            if (this.shopCountr > 0) {
                return (this.shopCountr -= 1)
            } else {
                this.shopCountr = 0;
            }
        },
        async getPropDetail() {
            this.propId = this.$router.currentRoute.value.params.propId;

            const Response = await axios({
                method: 'post',
                url: 'https://rentvent.shop/api/get_single_property.php',
                data: {
                    prop_id: this.propId,
                }
            });
            if (Response.status == 200) {
                this.response = Response.data[0];
                this.roomCountr = parseInt(this.response.room_countr);
                this.shopCountr = parseInt(this.response.shop_countr);
            } else (
                console.log('something went wrong')
            )

            // await axios.post('http://localhost/rental_app/api/get_single_property.php', {
            //     header: {
            //         prop_id: this.propId,
            //     }
            // }).then(response1 => {
            //     if (response1.data.building_name == '') {
            //         this.errorAlert = true;
            //     } else {
            //         this.errorAlert = false;
            //         this.successAlert = true;
            //         this.errorMessage = '';
            //     }
            // });
        },
        async btnUpload(e) {
            console.log(e)
            this.submitBtn = '',
                this.loaderSmall = true;
            let form = document.getElementById('form');

            this.file = this.$refs.file.files[0];
            let basepath = "https://rentvent.shop/api/";
            let formData = new FormData(form);
            // var formData = new FormData();

            formData.append('file', this.file);
            console.log(formData);


            await axios.post('https://rentvent.shop/api/edit_property.php', formData, {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data.status == true) {
                    Swal.fire({
                        text: response.data.sql_massege,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000
                    }).then(() => {
                        this.$router.push({ name: 'MyProperties' })
                    });
                    // this.errorAlert = false;
                    // this.successAlert = true;
                    // this.errorMessage = '';
                    // this.successMessage = response.data.sql_massege;
                    var image_html = "<img src='" + basepath + response.data.image + "' class='img-thumbnail' width='300' />";
                    this.uploadedImage = image_html;
                    this.$refs.file.value = '';
                    // this.buildingName = "";
                    // this.propCity = "";
                    // this.address = "";
                } else {
                    Swal.fire({
                        text: response.data.message,
                        showConfirmButton: false,
                        showCloseButton: true,
                    })
                    // this.errorMessage = response.data.message;
                    // this.errorAlert = true;
                    // this.successAlert = false;
                    // this.successMessage = '';
                    this.uploadedImage = '';
                    this.submitBtn = true,
                        this.loaderSmall = '';
                }
            });

        }
    },
    mounted() {
        // this.getPropId();
        this.getPropDetail()
    }
}


</script>

<style scoped>
.preview_img {
    max-width: 80px;
    max-height: 65px;
    min-height: 60px;
}

.file_upload {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.file_upload input {
    padding: 1.6rem;
}
</style>
