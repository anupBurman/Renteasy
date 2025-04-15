<template>
    <div class="container-fluid mx-lg-4 ">
        <h2> Add Building Or House </h2>

        <div class="row">
            <div class="col-lg-4 text-start form p-4">
                <form @submit="postData($event)" enctype="multipart/form-data">
                    <!-- 1 -->
                    <div class="form-group ">
                        <input type="text" class="form-control" v-model="buildingName"
                            placeholder="Property/Building Name">
                    </div>

                    <!-- 2 -->
                    <div class="form-group ">
                        <input type="text" class="form-control" v-model="address"
                            placeholder="Property/Building Address*" required>
                    </div>

                    <!-- 3 -->
                    <div class="form-group ">
                        <select class="form-select" aria-label="Default select example" v-model="propCity">
                            <option selected>Select Property Location*</option>
                            <option value="Panjab"> Panjab </option>
                            <option value="Madhya Pradesh"> Madhya Pradesh </option>
                            <option value="Maharashtra"> Maharashtra </option>
                        </select>
                    </div>


                    <!-- 4 -->
                    <div class="form-group file_upload">
                        <!-- <label for="exampleInputEmail1">Title</label> -->
                        <input type="file"  class="form-control w-75" @change="previewFiles($event)">
                        <div class="w-25 p-2 bg-light rounded">
                            <img :src="`images/` + selectedImg" class="preview_img" />
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
                            <button type="button" class="btn btn-sm btn-light px-4 px-lg-5"> {{ roomCountr }} </button>
                            <button type="button" class="btn btn-sm btn-dark px-lg-3" @click=" encrease()"> + </button>
                        </div>
                        <div>
                            <p class="my-0">Quantity of Shops</p>
                            <button type="button" class="btn btn-sm btn-secondary px-3" @click="decrease2()">
                                -
                            </button>
                            <button type="button" class="btn btn-sm btn-light px-4 px-lg-5"> {{ shopCountr }} </button>
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



    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PostPage',
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
        }
    },

    methods: {
        previewFiles(e) {
            let selectImg = e.target.files[0].name;
            this.selectedImg = selectImg;
            console.log(selectImg)
        },
        encrease() {
            this.roomCountr++;
        },
        decrease() {
            while (this.roomCountr > 0) {
                this.roomCountr--;
            }
        },
        encrease2() {
            this.shopCountr++;
        },
        decrease2() {
            while (this.shopCountr > 0) {
                this.shopCountr--;
            }
        },
        async postData(e) {
            // API call For Post Data

            e.preventDefault();
            this.loader = true;
            const Response = await axios({
                method: 'post',
                url: 'http://rentshent.xyz/api/add_building.php',
                data: {
                    buildingName: this.buildingName,
                    address: this.address,
                    propCity: this.propCity,
                    selectedImg: this.selectedImg,
                    roomCountr: this.roomCountr,
                    shopCountr: this.shopCountr
                }
            });
            // console.log(Response)
            if (Response.status == 200) {
                console.log("qwery done")
                // localStorage.setItem("userinfo", JSON.stringify(Axios.data))
                // this.$router.push({ name: 'logIn' })
            } else {
                console.log("something went wrong")
            }

            // let resBody = Response.data;
            // this.response.push(resBody)
             this.loader = false;

            // console.log(resBody)



        },

    },
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
