<template>
    <div class="container-fluid template"
        style="background-image: url('/images/yyy.jpg');  background-size: cover; background-blend-mode: overlay; ">
        <h2 class="pb-4"> <span> Add Building Or House</span> </h2>

        <div class="row px-lg-5 rounded add_property ">
            <div class="col-lg-4 px-0 rounded ">
            </div>

            <div class="col-lg-4 text-start ">
                <!-- <h6 class="alert alert-success" v-if="successMsg"> Updated Successfully !! </h6> -->
                <span class="loader" v-if="loader"></span>

                <!-- <div v-if="successAlert" class="alert alert-success alert-dismissible">
                    <a href="#" class="close" aria-label="close" @click="successAlert = false">×</a>
                    {{ successMessage }}
                </div>
                <div v-if="errorAlert" class="alert alert-danger alert-dismissible">
                    <button type="button" class="btn-close" @click="errorAlert = false" aria-label="Close"></button>
                    {{ errorMessage }}
                </div> -->

                <div class="form p-4">
                    <form id="form" @submit.prevent="btnUpload($event)">
                        <!-- 1 -->
                        <div class="form-group ">
                            <input type="text" name="building_name" class="form-control" v-model="buildingName"
                                placeholder="Property/Building Name" required>
                        </div>


                        <!-- 2 -->
                        <div class="form-group ">
                            <input type="text" class="form-control" name="address" v-model="address"
                                placeholder="Property Address*" required>
                        </div>

                        <!-- 3 -->
                        <div class="form-group ">
                            <select class="form-select" name="prop_city" aria-label="Default select example"
                                v-model="propCity">
                                <option selected>Select Property Location*</option>
                                <option :value="data" v-for="(data, index) in states" :key="index"> {{ data }} </option>
                            </select>
                        </div>



                        <!-- 4 -->
                        <div class="form-group file_upload">
                            <!-- <label for="exampleInputEmail1">Title</label> -->
                            <input type="file" ref="file" accept="image/*" class="form-control w-75"
                                @change="previewImg($event)">
                            <div class="w-25 p-2 bg-light rounded">
                                <img :src="img_url" class="preview_img" />
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

                        <div class="form-group pt-3 mb-0">
                            <button type="submit" name="submit" class="btn bg_purple text-light  form-control"> Submit
                            </button>
                        </div>
                        <div class="form-group ">
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


        <!-- ========== second form =========== -->
        <!-- <div class="panel panel-default">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-md-6">
                        <h3 class="panel-title">Upload File</h3>
                    </div>
                    <div class="col-md-6"></div>
                </div>
            </div>
            <div class="panel-body">
                <form id="form" @submit.prevent="btnUpload($event)">
                    <div class="row">
                        <div class="col-md-4">
                            <label>Select Image</label>
                        </div>
                        <div class="col-md-4">
                            <input type="text" placeholder="Enter UserName" name="uname" class="form-control"
                                v-model="Uname" />
                        </div>
                        <div class="col-md-4">
                            <input type="file" ref="file" />
                        </div>
                        <div class="col-md-4">
                            <button type="submit" class="btn btn-success">Upload Image</button>
                        </div>
                    </div>
                </form>
                <br />
                <br />
                
            </div>
        </div> -->

    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'add_property',
    data() {
        return {
            buildingName: '',
            propCity: '',
            postBody: '',
            selectedImg: '',
            roomCountr: 0,
            shopCountr: 0,
            address: '',
            // response: [],
            loader: '',
            // successMsg: '
            states: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujrat',
                'Hayana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
                'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
                'Sikkim', 'Tamilnadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal',
            ],
            file: '',
            // successAlert: false,
            // errorAlert: false,
            uploadedImage: '',
            img_url: null
        }
    },

    methods: {
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
        previewImg(e) {
            const file = e.target.files[0];
            this.img_url = URL.createObjectURL(file);
        },
        async btnUpload(e) {
            console.log(e)
            let form = document.getElementById('form');

            this.file = this.$refs.file.files[0];
            let basepath = "https://rentvent.shop/api/";
            let formData = new FormData(form);
            // var formData = new FormData();

            formData.append('file', this.file);
            console.log(formData);


            await axios.post('https://rentvent.shop/api/file_upload.php', formData, {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data.image == '') {
                    Swal.fire({
                        icon: "error",
                        text: response.data.message,
                    });
                    this.uploadedImage = '';
                    // this.errorAlert = true;
                    // this.successAlert = false;
                    // this.errorMessage = response.data.message;
                    // this.successMessage = '';
                } else {
                    Swal.fire({
                        html: response.data.message + `<br> You are rediredted to My Properties`,
                        icon: "success",
                    }).then(() => {
                        this.$router.push({ name: 'MyProperties' })
                    });
                    this.successMessage = response.data.message;
                    var image_html = "<img src='" + basepath + response.data.image + "' class='img-thumbnail' width='300' />";
                    this.uploadedImage = image_html;
                    this.$refs.file.value = '';
                    // this.buildingName = "";
                    // this.propCity = "";
                    // this.address = "";
                }
            });

        }
    },

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
