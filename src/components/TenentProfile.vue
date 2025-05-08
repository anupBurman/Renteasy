<template>
    <div class="container-fluid ">
       <!-- {{ response }} -->
        <!-- {{ response2 }}  -->
        <div class="row px-lg-5 profile_comp ">
            <div class="py-3 ">
               
                <router-link :to="`/ganrate_bill/` + response.prop_id + `/` + response.id + `/` + monthh">
                    <button type="button" class="btn  bg_success text-white mx-lg-4  round"> Ganerate Bill </button>
                </router-link>
            </div>

            <div class="col-lg-4 text-start alert alert-warning">
                <div class="d_flex_between ">
                    <div class="d-flex ">
                        <img src="/man.png" style="width: 50px;" />
                        <div class="px-3">
                            <span> {{ response.tenent_name }} /</span> <span>Tenent id: {{ response.id }} </span>
                            <div>
                                <span>Room No: {{ response.room_id }} </span>
                            </div>
                        </div>
                    </div>
                    <div class="three_dots dropdown px-1">
                        <i class="fa fa-list-ul" id="dropdownMenuButton1" data-bs-toggle="dropdown"></i>
                        <ul class="dropdown-menu bg_purple" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a class="dropdown-item" href="#">
                                    <router-link :to="`/edit_tenent/` + response.id">
                                        <i class="fa fa-pencil-square  pe-2" aria-hidden="true"></i> Edit Tenent Profile
                                    </router-link>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#" @click="deleteTenent()">
                                    <i class="fa fa-trash clr_orange pe-2" aria-hidden="true"></i> Delete Tenent
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"> <i class="fa fa-trash clr_orange pe-2"
                                        aria-hidden="true"></i> Delete Bills
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>




                <hr>

                <div class="d_flex_between">
                    <span>Maintenece: </span> <span> {{ response.mantenece_charge }} </span>
                </div>
                <div class="d_flex_between">
                    <span>Security Deposit: </span> <span> {{ response.security_amount }} </span>
                </div>
                <div class="d_flex_between">
                    <span>Rent Mode: </span> <span> {{ response.rent_mode }} </span>
                </div>
                <div class="d_flex_between">
                    <span>Rent Start Date: </span> <span> {{ dayy }}-{{ monthh }}-{{ Yearr }} </span>
                </div>

                <div class="d_flex_between">
                    <span> Monthly Rent Amount </span> <span> {{ response.rent_amount }} </span>
                </div>
                <div class="d_flex_between">
                    <span> Electricity </span> <span> {{ response.bijli_bill }} </span>
                </div>
                <hr>
                <div class="d_flex_between">
                    <span> Next Due Date </span> <span> {{ dayy }}-{{ parseInt(monthh) + 1 }}-{{ Yearr }} </span>
                </div>
                <div class="d_flex_between">
                    <span> Total Members</span> <span> {{ response.total_members }} </span>
                </div>
                <div class="d_flex_between">
                    <span> Mobile Number:</span> <span> {{ response.mob_number }} </span>
                </div>
            </div>


            <!-- //////////  Right section satrt /////////// -->

            <!-- if not recieve any month rent amount  -->
            <div class="col-lg-8 alert alert-danger right_section text-center py-5" v-if="response2.length <= 0">
                <h6 class=""> No payment history found. <br> Please first recieve payment and then ganerate bill </h6>
            </div>

            <!--  recieved geater then 1 month rent amount then this will show  -->
            <div class="col-lg-8 text-start alert alert-default py-0 bg-light" id="tbl"
                v-for="(data, index) in response2" :key="index">
                <button type="button" class="btn btn-default outline_purple round  mx-lg-4 my-2">
                    {{ dayy }}-{{ data.month }}-{{ Yearr }} To {{ dayy }}-{{ parseInt(data.month) + 1 }}-{{ Yearr }}
                </button>
                <div class="row alert alert-danger mb-0">
                    <div class="col-3  ">
                        <h6 class="text_bold mb-0">Electricity Details</h6>
                    </div>
                    <div class="col-3  ">
                        <h6 class="text_bold mb-0">Water Details</h6>
                    </div>
                    <div class="col-6 ">
                        <h6 class="text_bold mb-0">Rent Details </h6>
                    </div>
                </div>

                <!-- <div class="row right_section text-center  py-3" >
                    <h6 class="">  No payment history found. <br> Please first recieve payment and then ganerate bill  </h6>
                </div> -->

                <div class="row right_section  py-3">
                    <div class="col-3">
                        <h6 class="text_bold"> Electricity </h6>
                        <h6 v-if="response.e_per_unit > 1">
                            {{ rsltUnits = data.current_reading - data.last_reading }} Units
                        </h6>
                        <!-- <h6 v-else-if="response.e_per_unit < 1 ">
                            {{ 0 }} Units
                        </h6> -->
                        <h6 v-else-if="response.bijli_bill === 'fixed monthly'">
                            Fixed Monthly
                        </h6>
                        <h6 v-else-if="response.bijli_bill === 'govt billing'">
                            Govt Meter Billing
                        </h6>
                        <h6 v-else>
                            Charge Included in rent
                        </h6>

                        <h6 class="text_bold"> Current Reading </h6>
                        <h6> {{ data.current_reading }}</h6>
                        <h6> Date: {{ data.e_reading_date }} </h6>
                        <h6 class="text_bold">Charge per Unit </h6>
                        <h6> Rs. {{ response.e_per_unit }} </h6>
                        <h6 class="text_bold">Previous Reading </h6>
                        <h6>
                            {{ data.last_reading }} Units
                        </h6>
                        <!-- <h6>Date: {{ data.e_reading_date }} </h6> -->
                    </div>

                    <div class="col-3 ">
                        <h6 class="text_bold"> Water Bill Not Applicable </h6>
                        <!-- <h6 class="text_bold"> Unit </h6>
                        <h6> Unit </h6>
                        <h6 class="text_bold"> Unit </h6>
                        <h6> Unit </h6>
                        <h6 class="text_bold"> Unit </h6>
                        <h6> Unit </h6> -->
                    </div>

                    <!-- IF ELECTRICITY CHARGES ACCORDING TO PER UNIT WISE -->
                    <div class="col-6 " v-if="response.e_per_unit > 1">
                        <div class="d_flex_between">
                            <span> Monthly Rent </span>
                            <span class="text_bold"> {{ response.rent_amount }} </span>
                        </div>
                        <div class="d_flex_between ">
                            <span> Electricity Charge </span>
                            <span class="text_bold">
                                <!-- {{ elecricityCharge  }}  -->
                                {{ elecricityCharge = rsltUnits * response.e_per_unit }}
                            </span>
                        </div>
                        <div class="d_flex_between mb-5 pb-4">
                            <span> Monthly Mantenece Charges </span>
                            <span class="text_bold">
                                <!-- {{ elecricityCharge  }}  -->
                                {{ response.mantenece_charge }}
                            </span>
                        </div>

                        <hr>
                        <div class="d_flex_between  ">
                            <span> Sub-Total </span>
                            <span class="text_bold"> {{ subTotal = elecricityCharge + parseInt(data.recieved_amount) +
                                parseInt(response.mantenece_charge) }}
                            </span>
                        </div>
                    </div>

                    <!-- IF ELECTRICITY CHARGES FIXED MONTHLY -->
                    <div class="col-6 " v-if="response.e_fixed_monthly > 10">
                        <div class="d_flex_between">
                            <span> Monthly Rent </span>
                            <span class="text_bold"> {{ response.recieved_amount }} </span>
                        </div>
                        <div class="d_flex_between ">
                            <span> Electricity fixed Charge </span>
                            <span class="text_bold">
                                {{ response.e_fixed_monthly }}
                            </span>
                        </div>
                        <div class="d_flex_between mb-5 pb-4">
                            <span> Monthly Mantenece Charges </span>
                            <span class="text_bold">
                                {{ response.mantenece_charge }}
                            </span>
                        </div>
                        <hr>
                        <div class="d_flex_between  ">
                            <span> Sub-Total </span>
                            <span class="text_bold">
                                {{ subTotal = parseInt(response.e_fixed_monthly) + parseInt(data.recieved_amount) +
                                    parseInt(response.mantenece_charge) }}
                            </span>
                        </div>
                    </div>

                    <!-- IF ELECTRICITY CHARGES BY GOVT. METER  -->
                    <div class="col-6 " v-if="response.bijli_bill === 'govt billing'">
                        <div class="d_flex_between">
                            <span> Monthly Rent </span>
                            <span class="text_bold"> {{ data.rent_amount }} </span>
                        </div>
                        <!-- <div class="d_flex_between ">
                            <span> Electricity By Govt. Meter </span>
                            <span class="text_bold">
                                {{ response.e_fixed_monthly }}
                            </span>
                        </div> -->
                        <div class="d_flex_between mb-5 pb-4">
                            <span> Monthly Mantenece Charges </span>
                            <span class="text_bold">
                                {{ response.mantenece_charge }}
                            </span>
                        </div>
                        <hr>
                        <div class="d_flex_between  ">
                            <span> Sub-Total </span>
                            <span class="text_bold">
                                {{ subTotal = parseInt(response.e_fixed_monthly) + parseInt(response.rent_amount) +
                                    parseInt(response.mantenece_charge) }}
                            </span>
                        </div>
                    </div>

                    <!-- IF ELECTRICITY CHARGES BY GOVT. METER  -->
                    <div class="col-6 " v-if="response.bijli_bill === 'none'">
                        <div class="d_flex_between">
                            <span> Monthly Rent </span>
                            <span class="text_bold"> {{ response.rent_amount }} </span>
                        </div>
                        <div class="d_flex_between mb-5 pb-4">
                            <span> Monthly Mantenece Charges </span>
                            <span class="text_bold">
                                {{ response.mantenece_charge }}
                            </span>
                        </div>
                        <hr>
                        <div class="d_flex_between  ">
                            <span> Sub-Total </span>
                            <span class="text_bold">
                                {{ subTotal =  parseInt(data.recieved_amount) + parseInt(response.mantenece_charge) }}
                            </span>
                        </div>
                    </div>


                    <div class="d_flex_between alert alert-success   text_bold">
                        <div>
                            <span> Bill Date: </span> <span> {{ dd }}-0{{ mm }}-{{ yy }} </span>
                        </div>
                        <div>
                            <span> Total: </span> <span> {{ subTotal }} </span>
                        </div>
                    </div>


                    <div class="d_flex align-items-center action_icons">
                        <a :href="`https://api.whatsapp.com/send?phone=` + response.mob_number + `&text=` + `Hello ` + response.tenent_name + ` your rent `
                            + subTotal + ` is ganareted please pay on considred date`" target="_blank">
                            <i class="fa fa-whatsapp text-success "> </i>
                        </a>
                        <i class="fa fa-file-pdf-o  text-danger " aria-hidden="true" @click="makePdf($event)"></i>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import html2PDF from 'jspdf-html2canvas';

export default {
    name: 'TenentProfile',
    data() {
        return {
            response: [],
            response2: [],
            month: '',
            dayy: '',
            monthh: '',
            Yearr: '',

            dd: '',
            mm: '',
            yy: '',
            // elecricityCharge: 0,
            // subTotal: 0,
            lastReading: '',
            currentReading: '',
            // rsltUnits: '',

            // propCity: '',
            // propAddress: '',
            // propId:'',
            // prop_name: '',
            // tenentName: '',
            tenentId: '',
            // roomId: '',
            // mobNumber: '',
            // rentAmount: '',
            // e_per_unit : '',
            // e_redaing_date: '',
            // rent_mode:'',

            loader: '',
            successAlert: false,
            errorAlert: false,
        }
    },

    methods: {
        async getTenentData() {
            // let rowId = this.$router.currentRoute.value.params.id;
            let tenentId = this.$router.currentRoute.value.params.tenentId;
            this.tenentId = tenentId
            const Response = await axios({
                method: 'post',
                url: 'https://rentvent.shop/api/tenent_all_details.php',
                data: {
                    id: this.tenentId,
                }
            });
            if (Response.status == 200) {
                this.response = Response.data[0];
            } else {
                console.log("something went wrong")
            }
            // yy-mm-dd format to convert dd-mm-yy format and saperate each in d-m-y
            let inputDate = this.response.rent_start_date;
            const [saal, mahina, din] = inputDate.split('-');
            this.dayy = din;
            this.monthh = mahina;
            this.Yearr = saal;
        },

        async getRentReceived() {

            // let rowId = this.$router.currentRoute.value.params.id;
            let tenentId = this.$router.currentRoute.value.params.tenentId;

            // get rent start date from url and get month from it
            let startDate = this.$router.currentRoute.value.params.rent_start_date;
            const [ddd, mmm, yyy] = startDate.split('-');
            this.dayy = ddd;
            this.monthh = mmm;
            this.Yearr = yyy;


            // only for ganerate Billing date
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let day = d.getDate();
            if (day < 10) day = '0' + day;
            console.log(tenentId);

            let reverseData;

            // console.log(tenentId)
            const Response2 = await axios({
                method: 'post',
                url: 'https://rentvent.shop/api/electric_water_bill.php',
                data: {
                    id: this.tenentId,
                    month: this.monthh
                }
            });
            if (Response2.status == 200 && Response2.data.length >= 1) {
                // reverseData = Response2.data.reverse();
                reverseData = Response2.data;
                this.response2 = reverseData;
                this.month = this.response2.month;
                this.mm = month;
                this.dd = day;
                this.yy = year;
                // console.log(reverseData.length);

                //  THIS WILL RUN WHEN NEXT DUE DATE COMPLETE
                if (month < 10) month = '0' + month;
                let plusOne = parseInt(month) + 1;
                let dueMonth = '0' + plusOne;
                if (day == this.dayy && this.monthh == dueMonth) {
                    // Here you can write what you want do when next due date and month equal to current date and month
                    alert('Month Completed')
                } else (
                    console.log(day)
                )


            } else {
                console.log("something went wrong")
            }

            // console.log(Response2.data.status, this.response2.current_reading);

            // let electricity = this.response2.current_reading - this.response.bijli_reading;
            // // electricity * this.response.e_per_unit
            // this.elecricityCharge = electricity;
            // console.log(electricity, subTotal);

            let subTotal;
            // let finalEntry;
            // let lastEntry = Response2.data[0];
            // console.log(lastEntry)

            // for (let index = 1; index < Response2.data.length; ++index) {

            //     // Get the entry for this loop iteration
            //     const entry = Response2.data[index];

            //     // only for print previous month eading
            //     this.lastReading = lastEntry.current_reading;
            //     this.currentReading = entry.current_reading;

            //     // Subtract the previous values
            //     finalEntry = entry.current_reading -= lastEntry.current_reading;

            //     // Remember this entry for the next loop iteration
            //     this.elecricityCharge = finalEntry * this.response.e_per_unit

            // }

            subTotal = this.elecricityCharge + parseInt(this.response.rent_amount);
            this.subTotal = subTotal;
        },
        // DELETE ALL TENENT DATA
        async deleteTenent() {
            // console.log(e)
            if (confirm('Do you really want to delete this data ?')) {
                const Response3 = await axios({
                    method: 'post',
                    url: 'https://rentvent.shop/api/delete_tenent.php',
                    data: {
                        tenentId: this.tenentId,
                    }
                });
                if (Response3.status == 200) {
                    Swal.fire({
                        icon: "success",
                        text: 'Tenent Data Deleted ',
                        showConfirmButton: false,
                        timer: 2000
                    }).then(() => {
                        this.$router.push({ name: 'MyProperties' })

                    });
                } else {
                    console.log("something went wrong")
                }
            }
        },
        makePdf(evnt) {
            console.log(evnt)
            let page = document.getElementById('tbl');
            html2PDF(page, {
                jsPDF: {
                    format: 'a4',
                },
                output: './pdf/generate.pdf'
            });
        },

    },
    mounted() {
        this.getTenentData();
        this.getRentReceived();
    },

}


</script>

<style scoped>
.profile_comp {
    justify-content: end;
}

#tbl {
    background-color: aliceblue;
}

.right_section .col-3 {
    border-right: 1px solid rgb(216, 216, 216);
}

.preview_img {
    max-width: 80px;
    max-height: 65px;
    min-height: 60px;
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

.action_icons i {
    cursor: pointer;
    font-size: 1.6em;
    margin-right: 1rem;
}

.action_icons i:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: all 0.5s;
}
</style>
