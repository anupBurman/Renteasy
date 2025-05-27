<template>
    <div class="container-fluid template" style="background-image: url('/images/smoke_bg.jpg');background-size: cover;">
        <h2> Next Due Date Status </h2>
        <br>
        {{ response }} {{ cMonth }}

        <div>
            <span class="loader" v-if="loader"></span>
        </div>

        <div class="container-fluid" style="overflow-x: auto;">
            <table class="table table-secondary">
                <thead>
                    <tr class="table-dark">
                        <!-- <th scope="col">Id</th> -->
                        <th scope="col">Property</th>
                        <th scope="col"> Tenent Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Rent Amount</th>
                        <th scope="col">Last Rent Recieved</th>
                        <th scope="col"> Next Due Date Status </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in response" :key="index">
                        <!-- <th scope="row"> {{ data.id }} </th> -->
                        <td> {{ data.property }} </td>
                        <td> {{ data.tenent_id }} </td>
                        <td> {{ data.tenent_name }}</td>
                        <td> {{ data.recieved_amount }} </td>
                        <td> {{ data.start_date }}-{{ data.month }}-{{ data.start_year }} </td>
                        <td> <span class="text-success" v-if="cMonth > data.month && cDate == data.start_date">
                                <b> Month  {{ parseInt(data.month) + 1 }} Completed</b>
                            </span>

                            <span  v-else>   Month {{ parseInt(data.month) + 1 }}  Running...  </span>

                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="row d-none ">
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                    <div class="form p-4 mb-3 text-start">
                        <form id="form" @submit="postData()">
                            <div class="form-group ">
                                <label>
                                    Enter Amount You recieved
                                </label>

                                <select class="form-select" v-model="month">
                                    <option :value="mm" selected> {{ mm }} </option>
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
                                <input class="form-control" placeholder="Enter Amount *" type="text" v-model="userId"
                                    required>
                            </div>
                            <div class="form-group ">
                                <button type="submit" class="btn btn-success"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-4"></div>
            </div>

        </div>

    </div>
</template>


<script>
import axios from 'axios';
// import Swal from 'sweetalert2';


export default {
    name: 'AllTenents',
    data() {
        return {
            response: [],
            userId: '',
            month: '',
            mm: '',
            loader: true,

            cDate: '',
            cMonth: '',
            cYear: ''

        }
    },

    methods: {
        testFunc() {
            console.log('ghghghg')
        },
        async postData() {
            // e.preventDefault();

            // console.log(this.property, this.buildingName)
            try {
                const Response = await axios({
                    method: 'post',
                    url: 'https://rentvent.shop/api/all_tenents.php',
                    data: {
                        userId: this.userId,
                        month: this.month
                    }
                });
                if (Response.status == 200) {
                    this.loader = false;
                    this.response = Response.data;


                    // Current date
                    const d = new Date();
                    this.cYear = d.getFullYear();
                    this.cMonth = d.getMonth() + 1;
                    this.cDate = d.getDate();




                    // let dateStr = this.response.start_date;
                    // const date = new Date(dateStr);
                    // console.log(date);
                }
                else {
                    console.log("something went wrong");
                    this.loader = false;
                }
            } catch (error) {
                this.$router.push({ path: '/error_page/' })

            }
        },

    },
    mounted() {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        console.log(year, month, day);
        this.mm = month;
        this.month = this.mm;
        let localUser = localStorage.getItem("userId");
        this.userId = JSON.parse(localUser);

        this.postData();

    },
}

</script>

<style scoped>
.three_dots {
    position: absolute;
    margin-left: 20%;
    margin-top: -4rem;
}

.card_wrap .card {
    border-radius: 24px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.5s;
}

.card_wrap .card img {
    border-radius: 30px;
    height: 300px;
}

.card_wrap .card:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.5s;
}

@media (max-width:567px) {
    .d_flex {
        display: block;
    }

    .d_flex .w-50 {
        width: unset !important;
    }

    .info_card {
        margin-left: 16%;
    }

    .three_dots {
        margin-left: 82% !important;
    }
}
</style>
