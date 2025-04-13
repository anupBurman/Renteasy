<template>
    <div class="container-fluid template" style="background-image: url('/images/yyy.jpg');background-size: cover;">
        <h2> Add Tenent Detail In {{ buildingName }} </h2>

        <div class="row">
            <form id="form" @submit.prevent="fetchData($event)">
                <div class="form-group ">
                    <input type="hidden" name="prop_name" class="form-control" placeholder="Enter Room/Flat Number">
                </div>
            </form>
            <div class="col-lg-3 col-md-3"></div>
            <div class="col-lg-6 col-md-6 text-start ">
                <div v-if="successAlert" class="alert alert-success alert-dismissible">
                    <!-- <a href="#" class="close" aria-label="close" @click="successAlert = false">×</a> -->
                    {{ successMessage }}
                    <button type="button" class="btn-close" @click="successAlert = false" aria-label="Close"></button>
                </div>
                <div v-if="errorAlert" class="alert alert-danger alert-dismissible">
                    {{ errorMessage }}
                    <button type="button" class="btn-close" @click="errorAlert = false" aria-label="Close"></button>
                </div>
                <div class="form p-4">
                    <div class="d_flex_between pb-2">
                        <h4 class="mb-0"> Add Tenent Details </h4>
                        <button class="btn bg_purple btn-sm px-3 round" v-if="goback" @click="goBack()">
                            <i class="fa fa-arrow-left text-light " aria-hidden="true"></i>
                        </button>
                    </div>
                    <!-- <button class="btn btn-dark btn-sm" v-if="goback" @click="goBack()"> back </button> -->
                    <form id="form2" @submit.prevent="postData($event)">
                        <div class="form_1 " id="form_1">
                            <div class="form-group d-none" v-for="(data, i) in response" :key="i">
                                <input type="text" name="prop_name" :value="buildingName" class="form-control"
                                    placeholder="Enter Room/Flat Number">
                                <input type="" name="prop_id" :value="rowId" class="form-control"
                                    placeholder="Enter Room/Flat Number">
                            </div>
                            <!-- 1 -->
                            <div class="form-group ">
                                <label class="d_flex_between">
                                    <span>
                                    </span>
                                    <i class="fa fa-info-circle px-2 info_btn" aria-hidden="true">
                                    </i>
                                    <span class="info_card alert alert-warning ">
                                        You can name the room/flat as per your choice example (R1, A1, Room-1, or
                                        Flat-1, Flat-2 etc.)
                                    </span>

                                </label>
                                <input type="text" v-model="roomNumber" name="room_id" class="form-control "
                                    placeholder="Enter Room/Flat Number *" required>
                            </div>
                            <div class="d_flex">
                                <!-- 2 -->
                                <div class="form-group w-50 pe-lg-2 mx-0">
                                    <input type="text" v-model="TenentName" class="form-control " name="tenent_name"
                                        placeholder="Tenent Name *" required>
                                </div>
                                <!-- 3 -->
                                <div class="form-group w-50 px-0 mx-0">
                                    <input type="text" v-model="mobileNumber" class="form-control" maxlength="10"
                                        minlength="10" name="mob_number" placeholder="Tenent Mobile Number *" required>
                                </div>
                            </div>

                            <div class="d_flex">
                                <!-- 4 -->
                                <div class="form-group w-50 pe-lg-2 mx-0">
                                    <select class="form-select" name="gender" aria-label="Default select example">
                                        <option selected>Select Gender </option>
                                        <option value="male"> Male </option>
                                        <option value="female"> Female </option>
                                    </select>
                                </div>

                                <!-- 5 -->
                                <div class="form-group w-50 px-0 mx-0">
                                    <input type="number" class="form-control" name="total_members"
                                        placeholder="Total Members for This Room">
                                </div>
                            </div>

                            <div class="d_flex">
                                <!-- 6 -->
                                <div class="form-group w-50 pe-lg-2 mx-0">
                                    <select class="form-select " name="occupation" aria-label="Default select example">
                                        <option selected> Select Occupation </option>
                                        <option value="Govt.Job"> Govt. Job </option>
                                        <option value="Privet Job"> Privet Job </option>
                                        <option value="Bussiness"> Bussiness </option>
                                        <option value="Self Employed"> Self Employed </option>
                                    </select>
                                </div>
                                <!-- 7 -->
                                <div class="form-group w-50  mx-0">
                                    <select class="form-select" name="idproof_type" aria-label="Default select example"
                                        required>
                                        <option value="" selected>Select ID Type *</option>
                                        <option value="Adhaar"> Adhaar </option>
                                        <option value="Voter ID"> Voter ID </option>
                                        <option value="Driving License"> Driving License </option>
                                    </select>
                                </div>
                            </div>
                            <!-- 4 -->
                            <div class="form-group   mx-0">

                                <div class="form-group file_upload">
                                    <!-- <label for="exampleInputEmail1">Title</label> -->
                                    <input type="file" ref="file" accept="image/*" class="form-control w-75">
                                    <div class="w-25 p-2 bg-light rounded">
                                        <img src="xyz.jpg" class="preview_img" />
                                    </div>
                                </div>
                                <!-- <div class="form-group text-danger" >
                                 Input field with <span class="text-dark"> * </span> sign Can't be empty <br>
                                 File Uplod field can not be empty
                                </div> -->
                                <div v-if="requireMsg" class="alert py-1 alert-light text-danger  alert-dismissible">
                                    Input field with <span class="text-dark "> * </span> sign can't be empty. <br>
                                    File Uplod field can't be empty.
                                    <button type="button" class="btn-close" @click="requireMsg = false"
                                        aria-label="Close"></button>
                                </div>
                                <div class="form-group  ">
                                    <button type="button" class="btn bg_purple text-light  round  " @click="nextShow()">
                                        Next &nbsp; <i class="fa fa-arrow-right text-light " aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <!-- =========== SECOND PART OF FORM ======== -->

                        <div class="form_2 " id="form_2">
                            <!-- <h4> Rental Deatals </h4> -->
                            <div class="d_flex">
                                <div class="form-group w-50 pe-lg-2">
                                    <input type="text" name="rent_amount" class="form-control"
                                        placeholder="Enter Montly Rent Amount *" required>
                                </div>
                                <div class="form-group w-50 ">
                                    <select class="form-select" name="rent_mode" aria-label="Default select example"
                                        required>
                                        <option selected>Select Rent Mode *</option>
                                        <option value="fixed date"> 5th day of the Month </option>
                                        <option value="date to date"> Date to Date </option>
                                    </select>
                                </div>
                            </div>

                            <div class="d_flex">
                                <div class="w-50 pe-lg-2">
                                    Enter Rent Start Date *
                                    <input type="date" name="rent_start_date" class="form-control"
                                        placeholder="Start Date Of Rent" required>
                                </div>
                                <!-- <div class="form-group ">
                            <button type="button" class="btn btn-sm bg_purple text-white  round">Advance Rent</button>
                            <button type="button" class="btn btn-sm bg_purple text-white mx-2 round">None</button>
                        </div> -->
                                <div class="form-group w-50">
                                    <span> Enter if Any Due/Advance Payment </span>
                                    <input type="text" name="strt_due_amount" class="form-control"
                                        placeholder="Enter Due Amount">
                                </div>
                            </div>

                            <div class="d_flex">
                                <div class="w-50 pe-lg-2">
                                    <p class="mb-0"> Do You Take Any Security Deposit ? </p>
                                    <div class="form-group d-flex align-items-end">
                                        <button type="button" class="btn btn-sm bg_purple text-white  round"
                                            @click="securityAmt = false">No</button>
                                        <button type="button" class="btn btn-sm bg_purple text-white mx-2 round"
                                            @click="securityAmt = !false">Yes</button>

                                        <input type="number" name="security_amount" class="form-control "
                                            placeholder="Enter Sucurity Amount" v-if="securityAmt">
                                    </div>
                                </div>

                                <div class="w-50 ">
                                    <p class="mb-0"> Do You Take Montly maintenence Charges? </p>
                                    <div class="form-group d-flex align-items-end">
                                        <button type="button" class="btn btn-sm bg_purple text-white  round"
                                            @click="mentainChrg = ''">No</button>
                                        <button type="button" class="btn btn-sm bg_purple text-white mx-2 round"
                                            @click="mentainChrg = !''">Yes</button>
                                        <input type="number" name="mantenece_charge" class="form-control"
                                            placeholder="Enter Sucurity Amount" v-if="mentainChrg">
                                    </div>
                                </div>
                            </div>


                            <div class="d_flex">
                                <div class="w-50 pe-lg-2">
                                    <h4> Electricity </h4>
                                    <div class="form-group  px-0 mx-0">
                                        <select class="form-select" @change="billMode($event)" name="bijli_bill"
                                            aria-label="Default select example" required>
                                            <option value="" selected>Select Rent Mode *</option>
                                            <option value="charge per unit"> Charges per Unit </option>
                                            <option value="govt billing"> Govt. Meter Billing </option>
                                            <option value="fixed monthly"> Fixed Monthly </option>
                                            <option value="none"> None (Included in Rent) </option>
                                        </select>
                                    </div>
                                    <!-- electricity -->
                                    <div v-if="perUnit">
                                        <div class="d_flex_between">
                                            <div class="form-group w-50 ">
                                                <input type="text" name="e_per_unit" class="form-control"
                                                    placeholder="Per Unit Price">
                                            </div>
                                            <div class="form-group w-50">
                                                <input type="date" name="e_redaing_date" class="form-control"
                                                    placeholder="Enter Reading Date">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="d_flex_between">
                                                <span>
                                                </span>
                                                <i class="fa fa-info-circle px-2 info_btn" aria-hidden="true">
                                                </i>
                                                <span class="info_card alert alert-warning ">
                                                    Meter reading at the time the tenant starts living
                                                </span>
                                            </label>
                                            <input type="number" name="bijli_reading" class="form-control"
                                                placeholder="Enter Last Reading in Units">
                                        </div>

                                    </div>


                                    <div class="d-flex" v-if="govBill">
                                        <!-- <div class="form-group">
                                <input type="text" name="security_amount" class="form-control"
                                    placeholder="Enter Sucurity Amount">
                            </div>

                            <div class="form-group w-50">
                                <input type="date" name="Redaing_date" class="form-control"
                                    placeholder="Enter Sucurity Amount">
                            </div> -->
                                    </div>

                                    <div v-if="fixedMonthly">
                                        <div class="form-group">
                                            <input type="number" name="e_fixed_monthly" class="form-control"
                                                placeholder="Enter Fixed Monthly Amount">
                                        </div>
                                    </div>
                                </div>

                                <div class="w-50">
                                    <h4> Water Bill</h4>
                                    <div class="form-group  px-0 mx-0">
                                        <select class="form-select" @change="waterBill($event)" name="water_bill"
                                            aria-label="Default select example">
                                            <option selected>Select Rent Mode</option>
                                            <option value="charge per unit"> Charges per Unit </option>
                                            <option value="govt billing"> Govt. Meter Billing </option>
                                            <option value="fixed monthly"> Fixed Monthly </option>
                                            <option value="none"> None (Included in Rent) </option>
                                        </select>
                                    </div>

                                    <!-- water -->
                                    <div v-if="perUnit2">
                                        <div class="d_flex_between ">
                                            <div class="form-group w-50">
                                                <input type="number" name="w_per_unit" class="form-control"
                                                    placeholder="Per Unit Price">
                                            </div>
                                            <div class="form-group w-50">
                                                <input type="date" name="w_redaing_date" class="form-control"
                                                    placeholder="Enter Date ">
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <input type="number" name="water_reading" class="form-control"
                                                placeholder="Enter Water Reading">
                                        </div>
                                    </div>


                                    <div class="d-flex" v-if="govBill2">
                                        <!-- <div class="form-group">
                                <input type="number" name="security_amount" class="form-control"
                                    placeholder="Enter Sucurity Amount">
                            </div>
                            <div class="form-group w-50">
                                <input type="date" name="Redaing_date" class="form-control"
                                    placeholder="Enter Sucurity Amount">
                            </div> -->
                                    </div>
                                    <div v-if="fixedMonthly2">
                                        <div class="form-group">
                                            <input type="number" name="w_fixed_monthly" class="form-control"
                                                placeholder="Enter Amount">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group py-2">
                                <button type="submit" name="submit" class="btn bg_purple text-light  form-control">
                                    Submit
                                </button>
                            </div>
                            <div class="form-group ">
                                <span class="loader" v-if="loader"></span>
                            </div>
                            <!-- <div v-html="uploadedImage"></div> -->
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-3 col-md-3">
                <!-- <h6 class="alert alert-success" v-if="successMsg"> Updated Successfully !! </h6>
                <span class="loader" v-if="loader"></span> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddRoom',
    data() {
        return {
            response: [],
            successAlert: false,
            errorAlert: false,
            // response2: [],
            roomNumber: '',
            TenentName: '',
            mobileNumber: '',
            gender: '',
            totalMemeber: 1,
            // occupation: "",
            idType: "",
            file: '',
            buildingName: "",

            loader: '',
            rowId: '',
            // successMsg: '
            securityAmt: true,
            mentainChrg: '',
            perUnit: '',
            govBill: '',
            fixedMonthly: '',

            perUnit2: '',
            govBill2: '',
            fixedMonthly2: '',

            goback: "",
            requireMsg: ''
        }
    },


    methods: {
        billMode(e) {
            let bilValue = e.target.value;
            if (bilValue == 'charge per unit') {
                this.perUnit = true;
                this.govBill = '';
                this.fixedMonthly = '';
            } else if (bilValue == 'govt billing') {
                this.govBill = true;
                this.perUnit = '';
                this.fixedMonthly = '';
            } else if (bilValue == 'fixed monthly') {
                this.fixedMonthly = true;
                this.perUnit = '';
                this.govBill = '';
            } else {
                this.fixedMonthly = '';
                this.perUnit = '';
                this.govBill = '';
            }
        },
        waterBill(e) {
            let bilValue2 = e.target.value;
            if (bilValue2 == 'charge per unit') {
                this.perUnit2 = true;
                this.govBill2 = '';
                this.fixedMonthly2 = '';
            } else if (bilValue2 == 'govt billing') {
                this.govBill2 = true;
                this.perUnit2 = '';
                this.fixedMonthly2 = '';
            } else if (bilValue2 == 'fixed monthly') {
                this.fixedMonthly2 = true;
                this.perUnit2 = '';
                this.govBill2 = '';
            } else {
                this.fixedMonthly2 = '';
                this.perUnit2 = '';
                this.govBill2 = '';
            }
        },
        nextShow() {
            // let iCardImg = this.$refs.file.files[0]
            let t_nm = this.TenentName;
            // let r_num = this.roomNumber;
            // let mob = this.mobileNumber;
            // let idType = document.querySelector("select[name=idproof_type]").value;
            // console.log(iCardImg)
            if (t_nm != '') {
                // && r_num != '' && mob != '' && idType !='' && iCardImg != undefined
                let form1 = document.getElementById('form_1');
                let form2 = document.getElementById('form_2');
                form2.style.display = 'block';
                form1.style.display = 'none'
                this.goback = true;
            } else {
                this.requireMsg = true;
            }

        },
        goBack() {
            let form1 = document.getElementById('form_1');
            let form2 = document.getElementById('form_2');
            form2.style.display = 'none';
            form1.style.display = ''
            this.goback = false;
        },

        async fetchData(e) {
            console.log(e)
            this.rowId = this.$router.currentRoute.value.params.id;
            const Response = await axios({
                method: 'POST',
                url: 'http://localhost/rental_app/api/my_properties_detail.php?id=' + this.rowId,
                data: {
                    id: this.rowId,
                    building_name: this.buildingName,
                }
            });
            if (Response.status == 200) {
                this.response = Response.data;
                // console.log(JSON.stringify(this.response))
                this.buildingName = this.response[0].building_name;
                // console.log(this.buildingName);
            } else {
                console.log("something went wrong")
            }
        },


        async postData(e) {
            console.log(e)
            let form = document.getElementById('form2');


            this.file = this.$refs.file.files[0];
            // let basepath = "http://localhost/rental_app/api/";
            let formData = new FormData(form);
            formData.append('file', this.file);
            console.log(formData);

            await axios.post('http://localhost/rental_app/api/add_rooms.php', formData, {
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
                    // var image_html = "<img src='" + basepath + response.data.image + "' class='img-thumbnail' width='300' />";
                    // this.uploadedImage = image_html;
                    this.$refs.file.value = '';
                }
            });

        }

    },
    mounted() {
        this.fetchData();
        let form2 = document.getElementById('form_2');
        form2.style.display = 'none';
    }
}


</script>

<style>
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
