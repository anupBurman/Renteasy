<template>
    <div class="container-fluid mx-0  px-0">
        <!-- <h2 class="page_header py-2"> CRUD Post </h2> -->
        <div class=" py-3 bg_purple">
            <img src="images/rental_home_logo2.png" />
            <h2 class="page_header"><span class="text_orange">Rent</span><span class="text-light">Easy</span></h2>
        </div>
        <div class="row mx-0 p-4">
            <p class="alert alert-danger">Please Enter Correct OTP </p>
            <h5> Please Enter OTP Which We Have Sent On This Number </h5>
            <span class="text_link">  <router-link to="/login"> Change Number </router-link></span> 

            <div class="col-lg-4"> </div>

            <div class="col-lg-4 text-start form px-4 pb-4">
                <p class="text-end py-2">  <span> Counter </span> <span>Resend OTP </span> </p>
                <form>
                    <div class="otp_box py-3 ">
                        <span class="px-2 form-group ">
                            <input type="text" maxlength="1" minlength="1" class="form-control" required>
                        </span>
                        <span class="px-2 form-group ">
                            <input type="text" maxlength="1" minlength="1" class="form-control" required>
                        </span>
                        <span class="form-group  px-2">
                            <input type="text" maxlength="1" minlength="1" class="form-control" required>
                        </span>

                        <span class="form-group  px-2">
                            <input type="text" maxlength="1" minlength="1" class="form-control" required>
                        </span>
                    </div>

                    <div>
                        <button type="button" class="btn  bg_purple text-white  w-100 "> Verify OTP </button>
                    </div>


                </form>
            </div>
        </div>

    </div>
</template>

<script>


export default {
    name: 'VerifyOtp'
}
</script>

<style>
.otp_box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.text_link a{
    color: #052c65;
}

.text_link a:hover {
    color: #ff944d
}

.otp_box input {
    width: 40px;
    height: 40px;
    border-radius: 7px;
}

.form-group {
    margin-bottom: 1rem;
}
</style>
