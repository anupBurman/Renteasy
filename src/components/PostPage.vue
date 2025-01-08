<template>
    <div class="container-fluid mx-lg-4">
        <h2> CRUD Post </h2>

        <div class="row">
            <div class="col-lg-3 text-start form py-4">
                <form @submit="($event) => updateBtn ? updateData($event) : postData($event)">
                    <div class="form-group ">
                        <label for="exampleInputEmail1">Id</label>
                        <input type="text" class="form-control" v-model="postId">
                    </div>

                    <div class="form-group ">
                        <label>User Id</label>
                        <input type="text" class="form-control" v-model="userId">
                    </div>

                    <div class="form-group ">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" class="form-control" required placeholder="Title" v-model="ttl">
                    </div>
                    <div class="form-group ">
                        <label for="exampleInputEmail1"> Post </label>
                        <input type="text" class="form-control" placeholder="Post" v-model="postBody">
                    </div>

                    <div class="form-group d-flex">
                        <input type="text" class=" form-control" id="captchaTxt" readonly  v-model="captchaTxt" />
                        <input type="text" class=" form-control" placeholder="fill captcha" v-model="fillCaptcha" />
                        <button type="button" @click=" myCaptha"> refresh </button>
                    </div>


                    <div>
                        <button type="submit" class="btn btn-dark btn-sm mx-1" v-if="!updateBtn"> POST </button>
                        <button type="submit" class="btn btn-danger btn-sm mx-1" v-if="updateBtn"> UPDATE </button>
                        <button type="button" class="btn btn-dark btn-sm mx-1" v-if="updateBtn" @click="resetForm()">
                            RESAT </button>
                    </div>



                </form>
            </div>
            <div class="col-lg-9">
                <h6 class="alert alert-success" v-if="successMsg"> Updated Successfully !! </h6>
                <span class="loader" v-if="loader"></span>
                <div class="row p-2" v-for="(data, index) in response" :key="index">
                    <div class="col-lg-1"> {{ data.id }} </div>
                    <div class="col-lg-1"> {{ data.userId }} </div>
                    <div class="col-lg-3"> {{ data.title }} </div>
                    <div class="col-lg-6"> {{ data.body }} </div>
                    <div class="col-lg-1">
                        <i class="fa fa-pencil-square-o mx-2" aria-hidden="true" @click=" editQwery(data, index)"></i>
                        <i class="fa fa-trash-o text-danger mx-2" @click="deletQwery(data, index)"
                            aria-hidden="true"></i>
                    </div>
                </div>
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
            cardIndex: '',
            postId: '',
            userId: '',
            ttl: '',
            postBody: '',
            response: [],
            loader: '',
            updateBtn: '',
            successMsg: '',
            captchaTxt: "",
            fillCaptcha:""



        }
    },

    methods: {

        myCaptha(){
            let comm = '';
            let caracters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            for (let index = 0; index < 4; index++) {
                let code = caracters.charAt(Math.floor(Math.random()*caracters.length))  ;
                comm = comm+code;
                this.captchaTxt = comm;
            }
            
        },

        async postData(e) {
            // API call For Post Data
           
            e.preventDefault();
            if(this.captchaTxt === this.fillCaptcha){
                this.loader = true;
                const Response = await axios({
                method: 'post',
                url: 'https://jsonplaceholder.typicode.com/posts',
                data: {
                    title: this.ttl,
                    body: this.postBody,
                    id: this.postId,
                    userId: this.userId
                }

            });
            let resBody = Response.data;
            this.response.push(resBody)
            this.loader = false;

            console.log(resBody)
            }else{
                alert("captcha not matched")
            }
            
            
            
        },


        async deletQwery(data, index) {
            // API call function For Delete data
            let str = JSON.stringify(data)
            let deleteData = JSON.parse(str);
            let delId = deleteData.id;
            // console.log(delId)
            try {
                this.loader = true;
                await axios({
                    method: 'DELETE',
                    url: 'https://jsonplaceholder.typicode.com/posts/' + delId,
                })
                this.loader = false;
                this.response.splice(index, 1);
                this.postBody = '';
                this.ttl = '';
                this.userId = '';

            }
            catch (err) {
                console.log(err)
            }
            // console.log(deleteData)
        },

        async editQwery(data, index) {
            this.updateBtn = true;
            let string = JSON.stringify(data)
            let editdata = JSON.parse(string);
            this.postId = editdata.id;
            this.postBody = editdata.body;
            this.ttl = editdata.title;
            this.cardIndex = index;
            // console.log(editdata)
        },

        // RESSET FORM 
        resetForm() {
            this.postBody = '';
            this.postId = '';
            this.ttl = '';
            this.userId = '';
            this.updateBtn = false;
        },

        // EDIT DATA FUNCTIONALITY
        async updateData(e) {
            e.preventDefault();
            // alert(this.cardIndex);
            // alert(this.postId)
            this.loader = true;
            try {
                let editResponse = await axios({
                    method: 'PUT',
                    url: 'https://jsonplaceholder.typicode.com/posts/' + this.postId,
                    data: {
                        id: this.postId,
                        title: this.ttl,
                        body: this.postBody,
                        userId: this.userId
                    }
                })
                // IF PUT API CALL SUCCESS THEN BELOW CODE WILL RUN
                this.loader = false;
                this.response[this.cardIndex] = editResponse.data; // Post Tamplate id 
                this.successMsg = true;
                setTimeout(() => {
                    this.successMsg = false;
                }, 3000)
                console.log(editResponse)

            }
            catch (err) {
                // IF ANY ERROR IN API CALL THEN THIS CODE WILL RUN
                console.log(err)
            }

        }

    },
    mounted(){
           this.myCaptha()
        },
       
}

</script>

<style>
.form-group {
    margin-bottom: 1rem;
}
#captchaTxt{
    letter-spacing: 12px;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
