<template>
    <div class="container-fluid mx-lg-4">
        <h2> Add Building Or House </h2>

        <div class="row">
            <div class="col-lg-4 text-start form p-4"  >
                <form  method="POST" action="http://localhost/rental_app/api/test.php" enctype="multipart/form-data"   >
                    <!-- 1 -->
                     <div class="form-group ">
                        <input type="text" class="form-control" placeholder="Property/Building name"
                        name="building_name"   >
                    </div>

                    <div class="form-group ">
                        <input type="email" name="email" class="form-control" placeholder="Property/Building Name" >
                    </div> 
                    

                    <!-- 4 -->
                    <div class="form-group file_upload">
                        <input type="file" name="image" class="form-control w-75" >
                        <div class="w-25 p-2 bg-light rounded">
                            <!-- <img :src="`images/` + selectedImg" class="preview_img" /> -->
                        </div>
                    </div>
                    <div class="form-group py-3">
                        <button type="submit" class="btn bg_purple text-light  form-control" > Submit </button>
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
// import axios from 'axios';

export default {
    name: 'ImagePost',
    data() {
        return {
            // buildingName: '',
            // email: '',
            // response: [],
            loader: '',
            successMsg: '',
        }
    },

    methods: {
        postData(e){
            console.log(e.target)
            // e.preventDefault();
        }

        // async postData(e) {

        //     console.log(namefield)
        //     console.log(this.buildingName, this.email )
        //     e.preventDefault();
        //     const Response = await axios({
        //         method: 'post',
        //         url: 'http://localhost/rental_app/api/test.php',
        //         data: {
        //             buildingName: this.buildingName,
        //             e_mail: this.email
        //         }
        //     });
        //     if (Response.status == 200) {
        //         console.log("qwery done")
        //         console.log(Response.data)
        //     } else {
        //         console.log("something went wrong")
        //     }
        // },

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
