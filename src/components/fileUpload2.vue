<template>
    <div class="container-fluid mx-lg-4">
        <h2> Add Building Or House </h2>

        <div class="row">
            <div class="col-lg-4 text-start form p-4">
                <form @submit="postData($event)" enctype="multipart/form-data">
                    <!-- 1 -->
                    <div class="form-group ">
                        <input type="text" name="building_name" class="form-control" v-model="buildingName"
                            placeholder="Property/Building Name">
                    </div>

                    <!-- 2 -->
                    <div class="form-group ">
                        <input type="text" class="form-control" name="address" v-model="address"
                            placeholder="Property/Building Address*" required>
                    </div>

                    <!-- 3 -->
                    <div class="form-group ">
                        <select class="form-select" name="prop_city" aria-label="Default select example" v-model="propCity">
                            <option selected>Select Property Location*</option>
                            <option value="Panjab"> Panjab </option>
                            <option value="Madhya Pradesh"> Madhya Pradesh </option>
                            <option value="Maharashtra"> Maharashtra </option>
                        </select>
                    </div>


                    <!-- 4 -->
                    <div class="form-group file_upload">
                        <!-- <label for="exampleInputEmail1">Title</label> -->
                        <input type="file" ref="file" accept="image/*" class="form-control w-75" @change="previewFiles($event)">
                        <div class="w-25 p-2 bg-light rounded">
                            <img :src="selectedImg" class="preview_img" />
                        </div>
                    </div>

                    <hr>
                    <h5> Select Quantity of Rooms/Flats or Shops </h5>
                    <div class="form-group file_upload ">
                        <!-- <label >Building Name</label> -->
                        <!-- <span> Flats/Rooms </span> -->
                        <div>
                            <p class="my-0"> Quantity of Flats/Rooms</p>
                            <button type="button" class="btn btn-sm btn-secondary px-3" @click="decrease()">
                                -
                            </button>
                            <button type="button" name="room_countr" class="btn btn-sm btn-light px-4 px-lg-5"> {{ roomCountr }} </button>
                            <button type="button"  class="btn btn-sm btn-dark px-lg-3" @click=" encrease()"> + </button>
                        </div>
                        <div>
                            <p class="my-0">Quantity of Shops</p>
                            <button type="button" class="btn btn-sm btn-secondary px-3" @click="decrease2()">
                                -
                            </button>
                            <button type="button" name="shop_countr" class="btn btn-sm btn-light px-4 px-lg-5"> {{ shopCountr }} </button>
                            <button type="button" class="btn btn-sm btn-dark px-3" @click=" encrease2()"> + </button>
                        </div>
                    </div>

                    <div class="form-group py-3">
                        <button class="btn bg_purple text-light  form-control"> Submit </button>
                    </div>

                </form>



            </div>
            <div class="col-lg-9">
                <h6 class="alert alert-success" v-if="successMsg"> Updated Successfully !! </h6>
                <span class="loader" v-if="loader"></span>
            </div>
        </div>


        <!-- ========== second form =========== -->

        <div v-if="successAlert" class="alert alert-success alert-dismissible">
            <a href="#" class="close" aria-label="close" @click="successAlert = false">×</a>
            {{ successMessage }}
        </div>

        <div v-if="errorAlert" class="alert alert-danger alert-dismissible">
            <a href="#" class="close" aria-label="close" @click="errorAlert = false">×</a>
            {{ errorMessage }}
        </div>

        <div class="panel panel-default">
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
                <div v-html="uploadedImage"></div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'FileUplopad',
    data() {
        return {
            buildingName: '',
            propCity: '',
            postBody: '',
            selectedImg: '',
            roomCountr: 1,
            shopCountr: 1,
            address: '',
            response: [],
            loader: '',
            successMsg: '',


            file: '',
            successAlert: false,
            errorAlert: false,
            uploadedImage: '',
            Uname: "",
        }
    },

    methods: {
        async btnUpload(e) {
            console.log(e)
            let form = document.getElementById('form');


            this.file = this.$refs.file.files[0];
            let basepath = "http://localhost/rental_app/api/";
            let formData = new FormData(form);
            // var formData = new FormData();

            formData.append('file', this.file);
            console.log(formData);

            await axios.post('http://localhost/rental_app/api/file_upload.php', formData, {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data.image == '') {
                    this.errorAlert = true;
                    this.successAlert = false;
                    this.errorMessage = response.data.message;
                    this.successMessage = '';
                    this.uploadedImage = '';
                } else {
                    this.errorAlert = false;
                    this.successAlert = true;
                    this.errorMessage = '';
                    this.successMessage = response.data.message;
                    var image_html = "<img src='" + basepath + response.data.image + "' class='img-thumbnail' width='500' />";
                    this.uploadedImage = image_html;
                    this.$refs.file.value = '';
                    this.Uname = "";
                }
            });

        }
    }
}


</script>

<style scoped>
.preview_img {
    max-width: 80px;
    max-height: 65px;
    min-height: 60px;
    ;
}

.form {
    background-color: #d9d0eb;
    border-radius: 8px;
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
