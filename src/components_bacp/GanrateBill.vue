<template>
    <div class="container-fuidte template"
        style="background-image: url('/images/yyy.jpg');  background-size: cover; background-blend-mode: overlay; ">
        <!-- <h2> My Properties Detail {{ rowId }} </h2> -->
        <!-- {{ output }} -->
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

                <div class="form p-4 mb-3 text-start">
                    <form id="form" @submit="postBill($event)">
                        <h4 class="mb-0 text-center py-3"> Electricity Bill </h4>

                        <div class="d_flex_between ">
                            <h5 class="mb-0">{{ output.tenent_name }} /ID:{{ output.id }}</h5>
                            <button type="button" class="btn btn-sm btn-default outline_purple round  mx-lg-4 px-3">
                                {{ dayy }}-{{ monthh }}-{{ Yearr }} To {{ dayy }}-{{ parseInt(monthh) + 1 }}-{{ Yearr }}
                            </button>
                        </div>
                        <hr>
                        <div>

                            <!-- this will show when zero entry in electric_water_bill table -->
                            <div class="form-group" v-if="readingField">
                                <label> Electricity Last Reading </label>
                                <h6 class="mb-0 text-danger"> </h6>
                                <input class="form-control" placeholder="Enter Last Reading" readonly type="number"
                                    v-model="lastReading">
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
                            <h6 class="mb-0 "> Charges per unit: <span class="text_bold"> {{ output.e_per_unit }}</span>
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
                        <div class="form-group ">
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
            naration: '',
            amount: '',
            date: '',
            lastReading: '',
            lastReading2: '',
            currentReading: '',
            reslt_reading: 0,
            eBillAmount: 0,
            subTotal: 0,

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
                url: 'http://localhost/rental_app/api/tenent_all_details.php',
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

        async postBill(e) {
            e.preventDefault();
            const billData = await axios({
                method: 'post',
                url: 'http://localhost/rental_app/api/post_electric_water_bill.php',
                data: {
                    property: this.rowId,
                    room_num: this.output.room_id,
                    tenent_id: this.tenentId,
                    e_reading_date: this.date,
                    current_reading: this.currentReading,
                    last_reading: this.lastReading2
                }
            })
            if (billData.status == 200 && billData.data.status == true) {
                this.successMessage = billData.data.sql_massege;
                this.successAlert = true;
                this.errorAlert = false;
            } else {
                this.errorMessage = billData.data.sql_massege;
                this.errorAlert = true;
                this.successAlert = false;
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
                url: 'http://localhost/rental_app/api/tenent_bill_detail.php',
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
    },

    mounted() {
        this.rowId = this.$router.currentRoute.value.params.id;
        this.tenentId = this.$router.currentRoute.value.params.tenentId;
        this.RecievdAmount();
        this.getRentReceived();
    }
}
</script>
