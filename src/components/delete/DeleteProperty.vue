<template>
    <div class="container-fluid template"
        style="background-image: url('/images/yyy.jpg');  background-size: cover; background-blend-mode: overlay; ">
        <h2 class="pb-4"> <span> Delete Property/</span> <span class="btn bg_purple text-light rounded  btn-sm py-0">{{
            propId }}</span> </h2>
    </div>
</template>
<script>

export default {
    name: 'DeleteProperty',
}


</script>

<style scoped>
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
