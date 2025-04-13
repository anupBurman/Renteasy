<template>
    <div class="container-fluid template "
        style="background-image: url('/images/yyy.jpg');  background-size: cover; background-blend-mode: overlay; ">
        <!-- <h2> My Properties Detail {{ rowId }} </h2> -->
        <!-- {{ rowId }} -->
        <div class="row py-4 d-flex justify-content-center">


            <div class="col-lg-4  text-start ">
                <div v-if="successAlert" class="alert alert-success alert-dismissible">
                    <a href="#" class="close" aria-label="close" @click="successAlert = false">×</a>
                    Amount Recieved Done !
                </div>
                <Transition name="effect" mode="out">
                    <div v-if="errorAlert" class="alert alert-danger alert-dismissible" id="alert">
                        <button type="button" class="btn-close" @click="errorAlert = false" aria-label="Close"></button>
                        Something Went Wrong !
                    </div>
                </Transition>
                <div class="form p-4">
                    <form id="form" @submit="RecievdAmount($event)">
                        <div class="form-group d-none">
                            <input class="form-control" type="text" name="row_id" v-model="rowId">
                            <input class="form-control" type="text" v-model="tenentId">
                        </div>
                        <div class="form-group ">
                            <label>
                                Enter Amount You recieved
                            </label>
                            <input class="form-control" placeholder="Enter Amount *" type="text" v-model="amount" required>
                        </div>

                        <div class="form-group ">
                            <label>
                                Enter Date
                            </label>
                            <input class="form-control" type="date" v-model="date" required>
                        </div>
                        <div class="form-group ">
                            <label>
                                Write Naration
                            </label>
                            <textarea class="form-control" placeholder="Write Naration" v-model="naration"></textarea>
                        </div>
                        <button class="btn btn-default bg_purple text-light w-100"> Submit </button>
                    </form>
                </div>


            </div>

        </div>

        <!-- {{ response2 }} -->
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'TenentReciept',
    data() {
        return {
            rowId: '',
            tenentId: '',
            naration: '',
            amount: '',
            date: '',
            rentStartDate: '',
            successAlert: '',
            errorAlert: ''
        }
    },
    methods: {
        async RecievdAmount(e) {
            e.preventDefault();
            const Output = await axios({
                method: 'post',
                url: 'http://localhost/rental_app/api/recieve_payment.php',
                data: {
                    property: this.rowId,
                    tenentId: this.tenentId,
                    recieved_amount: this.amount,
                    naration: this.naration,
                    start_month: this.rentStartDate,
                    date: this.date
                }
            });
            if (Output.status == 200 && Output.data.status == false) {
                // this.TotalAmount = Output.data;
                // this.errorAlert = true;
                this.successAlert = true;
            }else if (Output.status == 200 && Output.data.status != false) {
                
                this.errorAlert = true;
                setTimeout(() => {
                    this.errorAlert = false;
                }, 2000);
            } 
          
            
            // console.log(Output.data.status)
            this.loader = false;
        },
    },
    mounted() {
        this.rowId = this.$router.currentRoute.value.params.id;
        this.tenentId = this.$router.currentRoute.value.params.tenentId;
        this.rentStartDate = this.$router.currentRoute.value.params.rent_start_date;
    }
}
</script>
