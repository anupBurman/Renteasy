<template>
    <div class="container-fluid vh-100 px-0" style="background-image: url('/images/yyy.jpg');  background-size: cover; background-blend-mode: overlay;" >
     
        <div class="row p-4 ">
            <!-- <h5> Please Fill This To create Your Profile </h5> -->
            <div class="col-lg-4"></div>
            <div class="col-lg-4 text-start p-5">
                <div>
                    <router-link to="/add_property">
                        <button type="button" class="button-72 btn btn-default w-100" role="button">
                            Add Property/Building
                        </button>
                    </router-link>
                </div>
            </div>
            <div class="col-lg-4">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AddProperty'
}
</script>

<style>
.container-fluid {
    box-sizing: border-box;
    overflow: hidden;
}
</style>
