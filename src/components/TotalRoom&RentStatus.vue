<template>


    <div class="accordion accordion-flush " id="accordionFlushExample">
        <div class="accordion-item " v-for="(data, index) in response" :key="index">
            <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <img :src="basePath + data.image_path" alt="image" class="rounded prop_image" />
                    <span class="px-2">
                     {{ index }}   {{ data.building_name }}, {{ data.address }} /Property Id:
                        <span class="btn btn-danger btn-sm"> {{ rowId }} </span>
                    </span>
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion
                    body.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'RoomRentStatus',

    data() {
        return {
            buildingName: '',
            propAddress: "",
            room_countr: 1,
            shop_countr: 0,
            response: [],
            //     // loader: '',
            //     // successMsg: '',
            basePath: 'http://localhost/rental_app/api/',
            imagePath: '',
            tabURL: "/add_room/",
            rowId: '',

            response2: [],
        }
    },

    methods: {
        async postData(e) {
            console.log(e)
            this.rowId = this.$router.currentRoute.value.params.id;
            const Response = await axios({
                method: 'POST',
                url: 'http://localhost/rental_app/api/my_properties_detail.php?id=' + this.rowId,
                data: {
                    id: this.rowId,
                    building_name: this.buildingName,
                    prop_address: this.propAddress,
                    image_path: this.imagePath,
                }
            });
            if (Response.status == 200) {
                console.log("qwery done")
                this.response = Response.data;
                console.log(JSON.stringify(this.response))
                this.room_countr = this.response[0].room_countr
                this.shop_countr = this.response[0].shop_countr
                // console.log(this.response)
            } else {
                console.log("something went wrong")
            }

            const Response2 = await axios({
                method: 'POST',
                url: 'http://localhost/rental_app/api/tenent_details.php?id=' + this.rowId,
                data: {

                }

            })
            if (Response2.status == 200) {
                this.response2 = Response2.data;
                console.log(JSON.stringify(this.response2))
                // console.log(this.response2)

            } else {
                console.log("something went wrong dat couldnt fetch")
            }
        },
    },
    mounted() {
        this.postData();
    },
}
</script>

<style scoped>
.card_wrap .card {
    border-radius: 9px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.5s;
}

.card_wrap .card:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    transition: all 0.5s;
}

.prop_image {
    width: 50px;
    border: 1px solid gray;
}

.d_flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.rooms i {
    font-size: 2rem;
}

.accordion-flush>.accordion-item>.accordion-header .accordion-button,
.accordion-flush>.accordion-item>.accordion-header .accordion-button.collapsed {
    background-color: antiquewhite;
}
</style>
