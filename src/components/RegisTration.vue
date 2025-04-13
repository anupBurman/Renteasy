<template>
    <h1> Sign-In </h1>
    <form>
        <div class="container">
            <h4 class="py-1 px-0 mx-0 text-center alert alert-success"> {{ successMsg }} </h4>
            <div class="row form p-4">
                <div class="col-12">
                    {{ form.fullname }} {{ form.mobNumber }} {{ form.email }} {{ form.city }}
                    {{ form.hobby }} {{ form.msg }} {{ form.agree }}
                </div>
                <div class="col-lg-8">
                    <form @submit=" formSubmit($event)">
                        <div class="row text-start ">
                            <div>
                            </div>
                            <!-- 1 -->
                            <div class="col-lg-6">
                                <label for="user_name" class="form-label"> Full Name </label>
                                <input v-model="form.fullname" type="text" @keypress="isLetter($event)"
                                    @blur="mandatory()" class="form-control" name="user_name" id="user_name"
                                    aria-describedby="emailHelp">
                                <span class="form-text  input-info w-100">
                                    {{ reqiredInfo }}  
                                </span>
                                <span class="form-text  input-info w-100">
                                     {{ AlfhaOnly }}
                                </span>
                            </div>

                            <!-- 2 -->
                            <div class="col-lg-6">
                                <label class="form-label"> Mobile Number </label>
                                <input v-model="form.mobNumber" @blur="mandatory2()" name="mob_number" type="number"
                                    maxlength="10" minlength="10" class="form-control">
                                <span class="form-text  input-info">
                                    {{ reqiredInfo2 }}
                                </span>
                            </div>

                            <!-- 3 -->
                            <div class="col-lg-6">
                                <label class="form-label"> E-mail </label>
                                <input v-model="form.email" type="email" class="form-control">
                            </div>

                            <!-- 4 -->
                            <div class="col-lg-6">
                                <label> Select Your City </label>
                                <select v-model="form.city" class="form-select" aria-label="Default select example">
                                    <option selected> Select City </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col-lg-6">
                                <label class="w-100"> Choose Hobby </label>
                                <label class="form-check-label">
                                    <input v-model="form.hobby" type="checkbox" name="hobby" value="sports"
                                        class="form-check-input" id="Check1">
                                    Sports
                                </label>
                                <label class="form-check-label">
                                    <input v-model="form.hobby" type="checkbox" name="hobby" value="Reading"
                                        class="form-check-input" id="Check2">
                                    Reading
                                </label>
                                <label class="form-check-label">
                                    <input v-model="form.hobby" type="checkbox" name="hobby" value="Swimming"
                                        class="form-check-input" id="Check3">
                                    Swimming
                                </label>

                            </div>

                            <!-- 7 -->
                            <div class="col-lg-12 pt-3">
                                <label class="form-label"> Write About You </label>
                                <textarea v-model="form.msg" rows="3" class="form-control" maxlength="250"></textarea>
                            </div>



                            <!-- 6 -->
                            <div class="col-lg-12 pt-5 ">
                                <h4>terms and Conditions </h4>
                                <p> this is Our Test Terms & Conditions Policy </p>
                            </div>

                            <div class="col-lg-6">
                                <span class="text-danger"> {{ checkMsg }} </span>
                                <input type="checkbox" v-model="form.agree" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label ps-2" for="exampleCheck1">
                                    I Agree The
                                    <button type="button" class="btn btn-sm text-danger">
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
    name: 'RegisTration',
    data() {
        return {
            form: {
                fullname: '',
                mobNumber: '',
                email: '',
                city: '',
                hobby: [],
                msg: '',
                agree: false
            },
            checkMsg: '',
            reqiredInfo: '',
            reqiredInfo2: '',
            successMsg: '',
            AlfhaOnly: ''

        }
    }, methods: {
        scroltop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },

        
        isLetter(e) {
            let char = String.fromCharCode(e.keyCode);
            if (/^[A-Za-z]+$/.test(char)) {
                this.AlfhaOnly = "";
                return true;
            } else {
                e.preventDefault()
                this.AlfhaOnly = "Only Alfabatics Are Allowed";
            }
        },

        mandatory() {
            if (this.form.fullname != '') {
                this.reqiredInfo = "";
            } else {
                this.reqiredInfo = "this Field is Required";
            }
        },

        mandatory2() {
            this.form.mobNumber != '' ? this.reqiredInfo2 = "Ok" : ""
        },

        formSubmit(e) {
            e.preventDefault();
            if (this.form.agree != true) {
                this.checkMsg = "You Must be Agree The Terms And Conditions"
            }
            else {
                this.scroltop();
                let form = this.form;
                let str = JSON.stringify(form);
                JSON.parse(str);
                console.log(str);
                this.successMsg = "Form Submited Successfully"
                setTimeout(() => {
                    this.successMsg = ""
                }, 3000)

            }

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