<template>
    <h1>
        Our Dedicated Tecahers
    </h1>
    <div class="x_scroll px-3 ">
        <div class="card_box  row">
            <div v-for="(data, index) in teacerData" :key="index" class="card col-lg-3  mx-2 px-0">
                <img :src="data.image" @click="getdata($event)" class="card-img-top" alt="..." data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                <div class="card-body bg-dark text-light">
                    <h5> {{ data.name }} </h5>
                    <h6> {{ data.desig }} </h6>
                    <p> {{ data.degree }} </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade  " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

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
    name: 'CardMode',
    data() {
        return {
            teacerData: [
                {
                    image: 'images/aysh.jpg',
                    name: 'Rithsh Deshmukh',
                    desig: 'Sales Manager',
                    degree: 'Msc. Bed. /7 years'
                },
                {
                    image: 'images/ny.jpg',
                    name: 'Kavita pathak',
                    desig: 'Genral Manager',
                    degree: 'Mcom. Bed. /5 years'
                }
            ],
            modalimg: '',




        }
    },
    methods: {
        getdata(e) {
            // console.log(e.teacerData[1].name)
            // console.log(e.srcElement)
            let modaldata = this.modalimg;
            modaldata = e.srcElement;
            console.log(modaldata)

        }
    }
}
</script>
<style>
.x_scroll {
    box-sizing: border-box;
    overflow-x: scroll;
}
.x_scroll .card_box.row {
    flex-wrap: nowrap;
}

.card_box .card {
    border: 0px;
    background-color: aliceblue;
    border-radius: 7px;
}

.card_box .card img {
    height: 250px;
    object-fit: cover;
}
</style>