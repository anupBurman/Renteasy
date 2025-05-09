<template>
    <div class="container-fuidte template"
        style="background-image: url('/images/yyy.jpg');  background-size: cover; background-blend-mode: overlay; ">
        <!-- <h2> My Properties Detail {{ rowId }} </h2> -->
        <!-- {{ output }} <br> {{ response2.month }} -->

        <!-- {{ response2 }} -->
        <div class="row py-4 d-flex justify-content-center">



            <div class="col-lg-4  ">
                <div v-if="successAlert" class="alert alert-success  alert-dismissible">
                    {{ successMessage }}
                    <button class="btn-close  " aria-label="close" @click="successAlert = false"></button>
                </div>
                <div v-if="errorAlert" class="alert alert-danger alert-dismissible">
                    {{ errorMessage }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" @click="errorAlert = false"
                        aria-label="Close">
                    </button>
                </div>

                <!-- ======== RENT RECIEVED BLOCK START  ========= -->
                <div class="form p-4 mb-3 text-start">
                    <form id="form" @submit="postBill($event)">
                        <div id="form_1">
                            <h4 class="mb-0 text-center py-3"> Rent Recieve </h4>
                            <div class="d_flex_between ">
                                <h5 class="mb-0">{{ output.tenent_name }} /ID:{{ output.id }}</h5>

                                <!--   WHEN USER GANERATE RECIEPT FIRST TIME THEN (this will show) -->
                                <button type="button"
                                    class="btn btn-sm text-light btn-default bg_purple round  mx-lg-4 px-3"
                                    v-if="response2.length == 0">
                                    {{ dayy }}-{{ monthh }}-{{ Yearr }} <span style="color:aqua">To</span> {{ dayy }}-{{
                                        parseInt(monthh) + 1 }}-{{
                                        Yearr }}
                                </button>

                                <!--   WHEN USER ALREADY GANERATED RECIEPT ATLEAST ONCE THEN (this will show) -->
                                <button type="button"
                                    class="btn btn-sm text-light btn-default bg_purple round  mx-lg-4 px-3" v-else>
                                    {{ dayy }}-{{ parseInt(response2.month) + 1 }}-{{ Yearr }} <span
                                        style="color:aqua">To</span> {{ dayy }}-{{
                                            parseInt(response2.month) + 2 }}-{{
                                        Yearr }}
                                </button>
                            </div>
                            <hr>

                            <div class="form-group d-none">
                                <input class="form-control" type="text" name="row_id" v-model="rowId">
                                <input class="form-control" type="text" v-model="tenentId">
                            </div>


                            <div class="form-group ">
                                <label>
                                    Enter Amount You recieved
                                </label>
                                <input class="form-control" placeholder="Enter Amount *" type="text" v-model="amount"
                                    required>
                            </div>


                            <div class="form-group" v-if="response2.length == 0">
                                <label>
                                    Which Month's Rent You recieving
                                </label>
                                <select class="form-select" v-model="rentCollectMonth" @change="checkMonth($event)"
                                    name="bijli_bill" aria-label="Default select example" required>
                                    <option value="" selected>Select Month *</option>
                                    <option value="1"> January </option>
                                    <option value="2"> Fabrury </option>
                                    <option value="3"> March </option>
                                    <option value="4"> April </option>
                                    <option value="5"> May </option>
                                    <option value="6"> June </option>
                                    <option value="7"> July </option>
                                    <option value="8"> August </option>
                                    <option value="9"> Sepember </option>
                                    <option value="10"> November </option>
                                    <option value="11"> October </option>
                                    <option value="12"> December </option>
                                </select>
                            </div>
                            <div class="form-group" v-else>
                                <!-- Which Month's Rent You recieving -->
                                <input class="form-control" readonly type="hidden"
                                    v-model="rentCollectMonth" required>
                            </div>

                            <!-- <div class="form-group ">
                                <label>
                                    Enter Date
                                </label>
                                <input class="form-control" type="date" v-model="date" required>
                            </div> -->

                            <div class="form-group ">
                                <label>
                                    Write Naration
                                </label>
                                <textarea class="form-control" placeholder="Write Naration"
                                    v-model="naration"></textarea>
                            </div>
                            <div class="form-group " v-if="nextBtn">
                                <button type="button" class="btn bg_purple text-light  round  " @click="nextShow()">
                                    Next &nbsp; <i class="fa fa-arrow-right text-light " aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>



                        <!-- ====== ELECTRICITY AND WATER BILL START (this will show when bill charge as per unit) ======= -->
                        <div id="form_2">
                            <div v-if="output.e_per_unit > 0">

                                <button class="btn bg_purple btn-sm px-3 round" v-if="goback" @click="goBack()">
                                    <i class="fa fa-arrow-left text-light " aria-hidden="true"></i>
                                </button>

                                <h4 class="mb-0 text-center py-3"> Electricity Bill </h4>
                                <div>

                                    <!-- this will show when zero entry in electric_water_bill table -->
                                    <div class="form-group" v-if="readingField">
                                        <label> Electricity Last Reading </label>
                                        <h6 class="mb-0 text-danger"> </h6>
                                        <input class="form-control" placeholder="Enter Last Reading" readonly
                                            type="number" v-model="lastReading">
                                    </div>

                                    <!-- this will show when atleast 1 entry has been done in electric_water_bill table -->
                                    <div class="form-group ">
                                        <label> Electricity Last Reading2 </label>
                                        <h6 class="mb-0 text-danger"> </h6>
                                        <input class="form-control" placeholder="Enter Last Reading " type="number"
                                            v-model="lastReading2">
                                    </div>
                                    <div class="form-group">
                                        <label> Electricity Current Reading </label>
                                        <h6 class="mb-0 text-danger"> {{ error_msg }}</h6>
                                        <input class="form-control" placeholder="Current Reading *" type="number"
                                            v-model="currentReading" @keyup="getReading" required>
                                    </div>
                                    <div class="form-group">
                                        <label>Reading Date </label>
                                        <input class="form-control" type="date" v-model="date" Required>
                                    </div>
                                </div>


                                <div class="px-0 mx-0 d-none">
                                    <h5 class="mb-0"> Water Charge </h5>
                                    <div class="form-group ">
                                        <input class="form-control" type="text" name="row_id" v-model="rowId">
                                        <input class="form-control" type="text" v-model="tenentId">
                                    </div>
                                    <div class="form-group">
                                        <label> Water Current Reading </label>
                                        <input class="form-control" placeholder="Current Reading" type="text"
                                            v-model="currentReading">
                                    </div>
                                    <div class="form-group">
                                        <label>Reading Date </label>
                                        <input class="form-control" type="date" v-model="date">
                                    </div>
                                </div>

                                <div class="form-group d_flex_between ">
                                    <h6 class="mb-0 "> units: <span class="text_bold"> {{ reslt_reading }}</span> </h6>
                                    <h6 class="mb-0 "> Charges per unit: <span class="text_bold"> {{ output.e_per_unit
                                            }}</span>
                                    </h6>
                                    <h6 class="mb-0"> Last Reading:
                                        <span class="text_bold" v-if="readingField">{{ output.bijli_reading }}</span>
                                        <span> {{ lastReading2 }} </span>
                                    </h6>
                                </div>
                                <hr />
                                <div class="form-group d_flex_between ">
                                    <h6 class="mb-0 "> Monthly: <span class="text_bold"> </span> </h6>
                                    <span class="text_bold"> {{ output.rent_amount }} </span>
                                </div>
                                <div class="form-group d_flex_between ">
                                    <h6 class="mb-0 "> Electricity Bill: </h6>
                                    <span class="text_bold"> {{ eBillAmount }} </span>
                                </div>
                                <hr>
                                <div class="form-group d_flex_between ">
                                    <h6 class="mb-0 ">Total: </h6>
                                    <span class="text_bold"> {{ subTotal }} </span>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn default text-light bg_purple w-100"> Ganerate </button>
                            </div>
                        </div>

                        <div class="form-group" v-if="submitt">
                            <button type="submit" class="btn default text-light bg_purple w-100"> Ganerate </button>
                        </div>



                    </form>
                </div>

            </div>
        </div>


    </div>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    name: 'GarateBill',
    data() {
        return {
            successAlert: '',
            errorAlert: '',
            readingField: '',

            error_msg: '',
            output: [],
            rowId: '',
            tenentId: '',
            date: '',
            lastReading: '',
            lastReading2: '',
            currentReading: '',
            reslt_reading: 0,
            eBillAmount: 0,
            subTotal: 0,

            amount: '',
            rentStartDate: '',
            naration: '',
            rentCollectMonth: '',
            goback: "",
            nextBtn: '',
            submitt: true,


            response2: [],
            month: '',

            dd: '',
            mm: '',
            yy: '',

            dayy: '',
            monthh: '',
            Yearr: '',
        }
    },
    methods: {
        async RecievdAmount() {
            // e.preventDefault();
            const Output = await axios({
                method: 'post',
                url: 'https://rentvent.shop/api/tenent_all_details.php',
                data: {
                    tenentId: this.tenentId,
                }
            });
            if (Output.status == 200) {
                // console.log(Output.data)
                this.lastReading = Output.data[0].bijli_reading;
                this.output = Output.data[0];
            } else {
                console.log("something went wrong!")
            }
            //  yy-mm-dd format to convert dd-mm-yy format and saperate each in d-m-y
            let inputDate = Output.data[0].rent_start_date;
            const [saal, mahina, din] = inputDate.split('-');
            this.dayy = din;
            this.monthh = mahina;
            this.Yearr = saal;
            this.loader = false;
        },
        checkMonth(e) {
            if (e.target.value == this.month) {
                alert('You have already rent recieved of this month Please select next month')
            }
        },

        async postBill(e) {
            e.preventDefault();
            const billData = await axios({
                method: 'post',
                url: 'https://rentvent.shop/api/recieve_payment.php',
                data: {
                    property: this.rowId,
                    room_num: this.output.room_id,
                    tenent_id: this.tenentId,
                    recieved_amount: this.amount,
                    naration: this.naration,
                    start_month: this.rentStartDate,

                    lastPaidMonth: this.month,
                    rentCollectMonth: this.rentCollectMonth,

                    e_reading_date: this.date,
                    current_reading: this.currentReading,
                    last_reading: this.lastReading2
                }
            })
            if (billData.status == 200 && billData.data.status == true) {
                Swal.fire({
                    icon: "success",
                    text: billData.data.sql_massege,
                    showConfirmButton: false,
                    timer: 2000,
                }).then(() => {
                    this.$router.push({ path: '/tenent_profile/:id/:tenentId/', name: ' TenentProfile' })
                });

            } else {
                Swal.fire({
                    text: billData.data.sql_massege,
                });

            }
        },

        async getRentReceived() {
            // let rowId = this.$router.currentRoute.value.params.id;
            let tenentId = this.$router.currentRoute.value.params.tenentId;
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let day = d.getDate();
            let reverseData;
            console.log(tenentId)
            const Response2 = await axios({
                method: 'post',
                url: 'https://rentvent.shop/api/tenent_bill_detail.php',
                data: {
                    id: this.tenentId,
                }
            });

            if (Response2.status == 200 && Response2.data.status != false) {
                // reverseData = Response2.data.reverse()
                // console.log(Response2.data.length)
                reverseData = Response2.data.reverse()
                this.response2 = reverseData[0];
                this.month = this.response2.month;
                this.mm = month;
                this.dd = day;
                this.yy = year;
                this.rentCollectMonth = parseInt(this.response2.month) + 1;

                // previous month current_reading is this month's last Reading
                this.lastReading2 = this.response2.current_reading;
                reverseData.length > 0 ? this.readingField = false : this.readingField = true;
            } else {
                console.log("something went wrong");
                // console.log(Response2.data.length)
                // console.log(Response2.data.status)
            }
        },

        getReading() {
            let subTotal;
            let cReading = this.currentReading;
            // let lastReading = this.output.bijli_reading;
            let lastReading = this.lastReading2;

            if (cReading >= lastReading) {
                this.reslt_reading = cReading - this.lastReading2;
                this.eBillAmount = this.reslt_reading * this.output.e_per_unit;
                subTotal = parseInt(this.output.rent_amount) + this.eBillAmount;
                this.subTotal = subTotal;
                this.error_msg = "";
            } else {
                this.eBillAmount = 0;
                this.reslt_reading = 0;
                this.error_msg = "Current Reading Should be Graeter Then Last Reading";
            }
        },

        nextShow() {
            let perUnit = this.output.e_per_unit;
            if (perUnit > 0) {
                let form1 = document.getElementById('form_1');
                let form2 = document.getElementById('form_2');
                form2.style.display = 'block';
                form1.style.display = 'none';
                this.goback = true;
                this.submitt = true;
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

    },

    mounted() {
        this.rowId = this.$router.currentRoute.value.params.id;
        this.tenentId = this.$router.currentRoute.value.params.tenentId;
        this.rentStartDate = this.$router.currentRoute.value.params.rent_start_date;
        this.RecievdAmount();
        this.getRentReceived();
        let form2 = document.getElementById('form_2');
        form2.style.display = 'none';
    },
    beforeUpdate() {
        this.output.e_per_unit > 0 ? (this.submitt = false, this.nextBtn = true) : (this.submitt = true)
    }
}
</script>
