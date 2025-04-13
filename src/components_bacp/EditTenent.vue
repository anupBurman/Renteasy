<template>
    <div class="container-fluid template">
        <h2> Edit Details In {{ response.prop_name }} / {{ rowId }} </h2>
        <!-- {{ response }} -->
        <div class="row px-lg-5 px-2">
            <div class="form-group ">
                            <span class="loader" v-if="loader"></span>
                        </div>
            <div v-if="successAlert" class="alert alert-success alert-dismissible ">
                {{ successMessage }} 
                <button type="button" class="btn-close" @click="successAlert = false" aria-label="Close"></button>
                <!-- <a href="#" class="close" aria-label="close" @click="successAlert = false">×</a> -->
            </div>
            <div v-if="errorAlert" class="alert alert-danger alert-dismissible">
                {{ errorMessage }} 
                <button type="button" class="btn-close" @click="errorAlert = false" aria-label="Close"></button>
                
            </div>
            <form id="form" @submit.prevent="fetchData($event)">
                <div class="form-group ">
                    <input type="hidden" name="prop_name" class="form-control" placeholder="Enter Room/Flat Number">
                </div>
            </form>
            <div class="col-lg-4 text-start form p-4 pb-0">
                <div class="d_flex_between pb-2">
                    <h4 class="mb-0"> Edit Tenent Details </h4>
                    <button class="btn bg_purple btn-sm px-3 round" v-if="goback" @click="goBack()">
                        <i class="fa fa-arrow-left text-light " aria-hidden="true"></i>
                    </button>
                </div>

                <form id="form2" @submit.prevent="postData($event)">
                    <div class="form_1 " id="form_1">
                        <!-- <div class="form-group " v-for="(data, i) in response" :key="i">
                            <input type="text" name="prop_name" :value="buildingName" class="form-control"
                                placeholder="Enter Room/Flat Number">
                            <input type="" name="prop_id" :value="rowId" class="form-control"
                                placeholder="Enter Room/Flat Number">
                        </div> -->
                        <div class="form-group ">
                            <input type="text" v-model="tenent_id" name="tenent_id" class="form-control"
                                placeholder="Enter Room/Flat Number">
                        </div>

                        <!-- 1 -->
                        <div class="form-group ">
                            <input type="text" v-model="roomNumber" name="room_id" class="form-control"
                                placeholder="Enter Room/Flat Number">
                        </div>

                        <!-- 2 -->
                        <div class="form-group ">
                            <input type="text" v-model="TenentName" class="form-control" name="tenent_name"
                                placeholder="Tenent Name*" required>
                        </div>
                        
                        <!-- 3 -->
                        <div class="form-group ">
                            <input type="text" v-model="mobileNumber" class="form-control" maxlength="10" minlength="10"
                                name="mob_number" placeholder="Tenent Mobile Number *" required>
                        </div>

                        <div class="d-flex">
                            <!-- 4 -->
                            <div class="form-group w-50 px-0 mx-0">
                                <select class="form-select" name="gender" aria-label="Default select example">
                                    <option selected> {{ response.gender }} </option>
                                    <option value="male"> Male </option>
                                    <option value="female"> Female </option>
                                </select>
                            </div>

                            <!-- 5 -->
                            <div class="form-group w-50 px-0 mx-0">
                                <input type="number" v-model="totalMemeber" class="form-control" maxlength="10"
                                    name="total_members" placeholder="Total Members">
                            </div>
                        </div>

                        <div class="d-flex">
                            <!-- 6 -->
                            <div class="form-group w-50 px-0 mx-0">
                                <select class="form-select " name="occupation" aria-label="Default select example">
                                    <option selected> {{ response.occupation }} </option>
                                    <option value="Govt.Job"> Govt. Job </option>
                                    <option value="Privet Job"> Privet Job </option>
                                    <option value="Bussiness"> Bussiness </option>
                                    <option value="Self Employed"> Self Employed </option>
                                </select>
                            </div>
                            <!-- 7 -->
                            <div class="form-group w-50 px-0 mx-0">
                                <select class="form-select" name="idproof_type" aria-label="Default select example">
                                    <option selected> {{ response.idproof_type }} </option>
                                    <option value="Adhaar"> Adhaar </option>
                                    <option value="Voter ID"> Voter ID </option>
                                    <option value="Driving License"> Driving License </option>
                                </select>
                            </div>
                        </div>
                        <!-- 4 -->
                        <div class="form-group file_upload">
                            <!-- <label for="exampleInputEmail1">Title</label> -->
                            <input type="file" ref="file" accept="image/*" class="form-control w-75">
                            <input type="text" :value="imagePath" name="tenentImg" class="form-control w-75 d-none"  >
                            <div class="w-25 p-2 bg-light rounded">
                                <img :src="`http://localhost/rental_app/api/` + response.image_path"
                                    class="preview_img" />
                            </div>
                        </div>
                        <div class="form-group w-25 py-3">
                            <button type="button" class="btn bg_purple text-light  form-control" @click="nextShow()">
                                Next
                            </button>
                        </div>
                    </div>

                    <!-- =========== SECOND PART OF FORM ======== -->

                    <div class="form_2 " id="form_2">
                        <!-- <h4> Rental Deatals </h4> -->
                        <div class="form-group ">
                            <input type="text" name="rent_amount" class="form-control" v-model="rentAmount"
                                placeholder="Enter Montly Rent Amount">
                        </div>
                        <div class="form-group  px-0 mx-0">
                            <select class="form-select" name="rent_mode" aria-label="Default select example">
                                <option selected> {{ response.rent_mode }} </option>
                                <option value="fixed date"> 5th day of the Month </option>
                                <option value="date to date"> Date to Date </option>
                            </select>
                        </div>

                        <!-- <div class="form-group ">
                            <input type="text" :value="response.rent_start_date"  name="rent_start_date" class="form-control"
                                placeholder="Start Date Of Rent" required >
                        </div> -->
                        <div class="form-group ">
                            <input type="date" v-model="response.rent_start_date" name="rent_start_date"
                                class="form-control" placeholder="Start Date Of Rent">
                        </div>
                        <!-- <div class="form-group ">
                            <button type="button" class="btn btn-sm bg_purple text-white  round">Advance Rent</button>
                            <button type="button" class="btn btn-sm bg_purple text-white mx-2 round">None</button>
                        </div> -->

                        <div class="form-group ">
                            <span> Enter if Any Due/Advance Payment </span>
                            <input type="text" name="strt_due_amount" class="form-control"
                                placeholder="Enter Due Amount">
                        </div>
                        <p class="mb-0"> Do You Take Any Security Deposit ? </p>
                        <div class="form-group d-flex align-items-end">
                            <button type="button" class="btn btn-sm bg_purple text-white  round"
                                @click="securityAmt = false">No</button>
                            <button type="button" class="btn btn-sm bg_purple text-white mx-2 round"
                                @click="securityAmt = !false">Yes</button>

                            <input type="number" v-model="securityAmt" name="security_amount" class="form-control "
                                placeholder="Enter Sucurity Amount" v-if="securityAmt">
                        </div>
                        <p class="mb-0"> Do You Take Montly maintenence Charges? </p>
                        <div class="form-group d-flex align-items-end">
                            <button type="button" class="btn btn-sm bg_purple text-white  round"
                                @click="mentainChrg = ''">No</button>
                            <button type="button" class="btn btn-sm bg_purple text-white mx-2 round"
                                @click="mentainChrg = !''">Yes</button>
                            <input type="number" v-model="mentainChrg" name="mantenece_charge" class="form-control"
                                placeholder="Enter Monthly mantenece Charge" v-if="mentainChrg">
                        </div>

                        <hr>
                        <h4> Electricity </h4>
                        <div class="form-group  px-0 mx-0">
                            <select class="form-select" @change="billMode($event)" name="bijli_bill"
                                aria-label="Default select example">
                                <option selected class="d-none"> {{ response.bijli_bill }} </option>
                                <option value="charge per unit"> Charges per Unit </option>
                                <option value="govt billing"> Govt. Meter Billing </option>
                                <option value="fixed monthly"> Fixed Monthly </option>
                                <option value="none"> None (Included in Rent) </option>
                            </select>
                        </div>

                        <!-- electricity -->
                        <div v-if="perUnitBox">
                            <div class="d_flex_between">
                                <div class="form-group w-50 ">
                                    <input type="text" v-model="perUnit" name="e_per_unit" class="form-control"
                                        placeholder="Per Unit Price">
                                </div>
                                <div class="form-group w-50">
                                    <input type="date" v-model="response.e_redaing_date" name="e_redaing_date"
                                        class="form-control" placeholder="Enter Reading Date">
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="number" name="bijli_reading" v-model="response.bijli_reading" class="form-control"
                                    placeholder="Enter Reading in Units">
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
                                <input type="number" v-model="eFixedMonthlyAmount" name="e_fixed_monthly"
                                    class="form-control" placeholder="Enter Amount">
                            </div>
                        </div>
                        <hr>
                        <h4> Water Bill</h4>
                        <div class="form-group  px-0 mx-0">
                            <select class="form-select" @change="waterBill($event)" name="water_bill"
                                aria-label="Default select example">
                                <!-- <option selected class="d-none" >Select Rent Mode </option> -->
                                <option value="charge per unit"> Charges per Unit </option>
                                <option value="govt billing"> Govt. Meter Billing </option>
                                <option value="fixed monthly"> Fixed Monthly </option>
                                <option value="none" selected > None (Included in Rent) </option>
                            </select>
                        </div>

                        <!-- water  -->
                        <div v-if="perUnitBox2">
                            <div class="d_flex_between ">
                                <div class="form-group w-50">
                                    <input type="number" v-model="perUnit2" name="w_per_unit" class="form-control"
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
                        </div>
                        <div v-if="fixedMonthly2">
                            <div class="form-group">
                                <input type="number" v-model="eFixedMonthlyAmount" name="w_fixed_monthly"
                                    class="form-control" placeholder="Enter Amount">
                            </div>
                        </div>
                        <div class="form-group py-3">
                            <button type="submit"  name="submit" class="btn bg_purple text-light  form-control"> Submit
                            </button>
                        </div>

                        <!-- <div class="form-group py-3">
                            <span class="loader" v-if="loader"></span>
                        </div> -->

                    </div>

                </form>
            </div>
            <div class="col-lg-9">
                <!-- <h6 class="alert alert-success" v-if="successMsg"> Updated Successfully !! </h6>
                <span class="loader" v-if="loader"></span> -->
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'EditTenent',
    data() {
        return {
            response: [],
            successAlert: false,
            errorAlert: false,
            loader: true,
            // successMsg: '

            tenent_id: '',
            imagePath: '',
            roomNumber: '',
            TenentName: '',
            mobileNumber: '',
            gender: '',
            totalMemeber: 1,
            idType: "",
            file: '',
            buildingName: "",
            rentAmount: '',
            rentStartDate: '',
            bijliReading: '',

            rowId: '',
            securityAmt: true,
            mentainChrg: '',
            perUnit: '',
            govBill: '',
            eFixedMonthlyAmount: '',
            fixedMonthly: '',

            perUnit2: '',
            govBill2: '',
            wFixedMonthlyAmount: '',
            fixedMonthly2: '',

            goback: ""
        }
    },


    methods: {
        billMode(e) {
            let bilValue = e.target.value;
            if (bilValue == 'charge per unit') {
                this.perUnitBox = true;
                this.govBill = '';
                this.fixedMonthly = '';
            } else if (bilValue == 'govt billing') {
                this.govBill = true;
                this.perUnitBox = '';
                this.fixedMonthly = '';
            } else if (bilValue == 'fixed monthly') {
                this.fixedMonthly = true;
                this.perUnitBox = '';
                this.govBill = '';
            } else {
                this.fixedMonthly = '';
                this.perUnitBox = '';
                this.govBill = '';
            }
        },
        waterBill(e) {
            let bilValue2 = e.target.value;
            if (bilValue2 == 'charge per unit') {
                this.perUnitBox2 = true;
                this.govBill2 = '';
                this.fixedMonthly2 = '';
            } else if (bilValue2 == 'govt billing') {
                this.govBill2 = true;
                this.perUnitBox2 = '';
                this.fixedMonthly2 = '';
            } else if (bilValue2 == 'fixed monthly') {
                this.fixedMonthly2 = true;
                this.perUnitBox2 = '';
                this.govBill2 = '';
            }
            else {
                this.fixedMonthly2 = '';
                this.perUnitBox2 = '';
                this.govBill2 = '';
            }
        },
        nextShow() {
            let form1 = document.getElementById('form_1');
            let form2 = document.getElementById('form_2');
            form2.style.display = 'block';
            form1.style.display = 'none'
            this.goback = true;
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
            this.rowId = this.$router.currentRoute.value.params.tenentId;
            console.log(this.rowId);

            const Response = await axios({
                method: 'POST',
                url: 'http://localhost/rental_app/api/tenent_all_details.php?id=' + this.rowId,
                data: {
                    id: this.rowId,
                    building_name: this.buildingName,
                }
            });
            if (Response.status == 200) {
                this.loader = '';
                let res = Response.data[0];
                this.response = Response.data[0];
                // this.buildingName = this.response[0].building_name;
                this.tenent_id = res.id;
                this.imagePath = res.image;
                this.TenentName = res.tenent_name;
                this.roomNumber = res.room_id;
                this.mobileNumber = res.mob_number;
                this.totalMemeber = res.total_members;
                this.rentAmount = res.rent_amount;
                this.securityAmt = res.security_amount;
                this.mentainChrg = res.mantenece_charge;
                this.perUnit = res.e_per_unit;
                this.eFixedMonthlyAmount = res.e_fixed_monthly;
                this.wFixedMonthlyAmount = res.w_fixed_monthly;

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

            await axios.post('http://localhost/rental_app/api/edit_tenent.php', formData, {
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

<style scoped>
.preview_img {
    max-width: 80px;
    max-height: 65px;
    min-height: 60px;
    ;
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
