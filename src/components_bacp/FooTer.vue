<template>
    <div class="container-fluid px-0  footer ">
        <ul class="d-flex justify-content-between">
            <li>
                <router-link to="/">
                    <i class="bi bi-house-heart-fill"></i>
                    <h6> Home </h6>
                </router-link>
            </li>
            <li>
                <router-link to="/add_property">
                    <i class="bi bi-telephone-fill"></i>
                    <h6> Contact</h6>
                </router-link>
            </li>
            <li>
                <router-link to="/Tab-View">
                    <i class="bi bi-hourglass-bottom"></i>
                    <h6> History </h6>
                </router-link>

            </li>
            <li>
                <router-link to="/add_property" >
                    <i class="bi bi-plus-square-dotted"></i>
                    <h6> Add </h6>
                </router-link>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FooTer'
}
</script>

<style>
.footer {
    position: fixed;
    bottom: 0px;
}
.footer ul {
    padding: 6px 16px;
    margin-bottom: 0px;
    background-color: #333;
    color: #fff;
}
.footer ul h6 {
    font-size: 12px;
    margin-bottom: 0px;
}
.footer ul li {
    list-style: none;
    font-size: 12px;
}
.footer ul li i {
    color: #ff944d;
    font-size: 1rem;
}
</style>