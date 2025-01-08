<template>
    <h1> Sign-In </h1>
    <form>
        <div class="container">
            <h4 class="py-3 text-center alert alert-success" v-if="formSuccess"> Form submited successfully </h4>
            <div class="row form p-4">
                <div class="col-lg-8">
                    <form @submit="formSubmit($event)">
                        <div class="row text-start ">
                            <div> {{ formData.fullname }} {{ formData.mobNumber }} {{ formData.email }} {{ formData.city
                                }}
                                {{ formData.hobby }} {{ formData.txtMsg }} {{ formData.checkBox }}
                            </div>
                            <!-- 1 -->
                            <div class="col-lg-6">
                                <label for="user_name" class="form-label"> Full Name </label>
                                <input @blur="Required($event)" v-model="formData.fullname" type="text"
                                    class="form-control" name="user_name" id="user_name" aria-describedby="emailHelp">
                                <span class="form-text  input-info">
                                    {{ state }}
                                </span>
                            </div>

                            <!-- 2 -->
                            <div class="col-lg-6">
                                <label class="form-label"> Mobile Number </label>
                                <input v-model="formData.mobNumber" @blur="Required($event)" name="mob_number"
                                    type="number" maxlength="10" minlength="10" class="form-control">
                                <span class="form-text  input-info">
                                    This Field is Required
                                </span>
                            </div>

                            <!-- 3 -->
                            <div class="col-lg-6">
                                <label class="form-label"> E-mail </label>
                                <input v-model="formData.email" type="email" class="form-control">
                            </div>

                            <!-- 4 -->
                            <div class="col-lg-6">
                                <label> Select Your City </label>
                                <select v-model="formData.city" class="form-select" aria-label="Default select example">
                                    <option selected> Select City </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col-lg-6">
                                <label class="w-100"> Choose Hobby </label>
                                <label class="form-check-label">
                                    <input v-model="formData.hobby" type="checkbox" name="hobby" value="sports"
                                        class="form-check-input" id="Check1">
                                    Sports
                                </label>
                                <label class="form-check-label">
                                    <input v-model="formData.hobby" type="checkbox" name="hobby" value="Reading"
                                        class="form-check-input" id="Check2">
                                    Reading
                                </label>
                                <label class="form-check-label">
                                    <input v-model="formData.hobby" type="checkbox" name="hobby" value="Swimming"
                                        class="form-check-input" id="Check3">
                                    Swimming
                                </label>

                            </div>

                            <!-- 7 -->
                            <div class="col-lg-12 pt-3">
                                <label class="form-label"> Write About You </label>
                                <textarea v-model="formData.txtMsg" rows="3" class="form-control"
                                    maxlength="250"></textarea>
                            </div>



                            <!-- 6 -->
                            <div class="col-lg-12 pt-5 " v-if="show">
                                <h4>terms and Conditions </h4>
                                <p> this is Our Test Terms & Conditions Policy </p>
                            </div>

                            <div class="col-lg-6">
                                <input v-model="formData.checkBox" type="checkbox" class="form-check-input"
                                    id="exampleCheck1">
                                <label class="form-check-label ps-2" for="exampleCheck1">
                                    I Agree The
                                    <button type="button" class="btn btn-sm text-danger" @click="showPolicy()">
                                        Terms & Conditions.
                                    </button>
                                </label>
                            </div>

                        </div>
                        <div class="text-start">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>


                </div>

                <div class="col-lg-4"> </div>
            </div>
        </div>
    </form>


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'SignIn',
    data() {
        return {
            formData: {
                fullname: '',
                mobNumber: '',
                email: '',
                city: '',
                hobby: [],
                txtMsg: '',
                checkBox: false,
                inputMsg: '',
            },
            show: false,
            formSuccess: '',

            state: ''

        }
    },
    methods: {
        formSubmit(e) {
            e.preventDefault();
            let ischecked = this.formData.checkBox;
            if (ischecked == false) {
                alert("You Must be Agree Our Terms And Policy")
            } else {
                console.log(this.formData);
                this.formSuccess = true;
                setTimeout(() => {
                    this.formSuccess = false;
                }, 3000)
            }
        },
        
        Required(e) {
            let value = e.target.value;
            let name = e.target.name
            console.log(value)
            console.log(name+'name')
        },
        showPolicy() {
            this.show = true;
            console.log(this.formData.checkBox)
        },
    }
}
</script>





<style>
.input-info {
    color: #ba0000;
    width: 100%;
}

.form {
    background-color: #d0d3d4;
}

.form-check-label {
    padding-right: 15px;
}

.form .col-lg-6 {
    padding-top: 16px;
}

.form .form-label {
    margin-bottom: 0px;
}

button.btn:hover {
    font-weight: bold;
}
</style>