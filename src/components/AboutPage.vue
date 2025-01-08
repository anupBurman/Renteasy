<template>
    <h1> Caraousel </h1>
    <section class="pt-5 pb-5">
        <div class="container">


            <div class="card_reel">
                <div class="slide_wraper">
                    <!-- 1 -->
                    <div class="card">
                        <img class="img-fluid" alt="100%x280"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240122184958/images2.jpg">
                        <div class="card-body">
                            <h4 class="card-title">
                                Special title treatment</h4>
                            <p class="card-text">With supporting text
                                below as a natural lead-in</p>
                        </div>
                    </div>

                    <!-- 2 -->
                    <div class="card">
                        <img class="img-fluid" alt="100%x280"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240122184958/images2.jpg">
                        <div class="card-body">
                            <h4 class="card-title">Special title
                                treatment</h4>
                            <p class="card-text">With supporting
                                text below as a natural
                                lead-in to additional
                                content.</p>
                        </div>
                    </div>

                    <!-- 3 -->
                    <div class="card">
                        <img class="img-fluid" alt="100%x280"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg">
                        <div class="card-body">
                            <h4 class="card-title">Special title treatment</h4>
                            <p class="card-text">With supporting text below
                                as a natural lead-in to
                                additional content.</p>
                        </div>
                    </div>
                    <!-- 4 -->
                    <div class="card">
                        <img class="img-fluid" alt="100%x280"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240122184958/images2.jpg">
                        <div class="card-body">
                            <h4 class="card-title">Special title
                                treatment</h4>
                            <p class="card-text">With supporting
                                text below as a natural
                                lead-in to additional
                                content.</p>
                        </div>
                    </div>
                    <!-- 5 -->
                    <div class="card">
                        <img class="img-fluid" alt="100%x280"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg">
                        <div class="card-body">
                            <h4 class="card-title">Special title treatment</h4>
                            <p class="card-text">With supporting text below
                                as a natural lead-in to
                                additional content.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="img-fluid" alt="100%x280"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg">
                        <div class="card-body">
                            <h4 class="card-title">Special title treatment</h4>
                            <p class="card-text">With supporting text below
                                as a natural lead-in to
                                additional content.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="img-fluid" alt="100%x280"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg">
                        <div class="card-body">
                            <h4 class="card-title">Special title treatment</h4>
                            <p class="card-text">With supporting text below
                                as a natural lead-in to
                                additional content.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="img-fluid" alt="100%x280"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg">
                        <div class="card-body">
                            <h4 class="card-title">Special title treatment</h4>
                            <p class="card-text">With supporting text below
                                as a natural lead-in to
                                additional content.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="img-fluid" alt="100%x280"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20240122184958/images2.jpg">
                        <div class="card-body">
                            <h4 class="card-title">
                                Special title treatment</h4>
                            <p class="card-text">With supporting text
                                below as a natural lead-in</p>
                        </div>
                    </div>



                </div>
            </div>

        </div>



    </section>

</template>



<script>
export default {
    name: 'AboutPage',

}
</script>

<style>
.card_reel {
    box-sizing: border-box;
    overflow-x: scroll;
}

.slide_wraper {
    display: inline-flex;
    animation: slideAnim 20s ease-in-out 4s infinite;
    animation-delay: 3s;

}

.slide_wraper:hover {
    animation-play-state: paused;
    cursor: pointer;
}

.card {
    width: 250px;
    ;
    float: left;
}

@keyframes slideAnim {
    0% {
        transform: translateX(0px)
    }

    2% {
        transform: translateX(-250px)
    }

    24% {
        transform: translateX(-250px)
    }

    26% {
        transform: translateX(-500px)
    }

    40% {
        transform: translateX(-500px)
    }

    42% {
        transform: translateX(-750px)
    }

    56% {
        transform: translateX(-750px)
    }

    58% {
        transform: translateX(-1000px)
    }

    72% {
        transform: translateX(-1000px)
    }

    74% {
        transform: translateX(-1250px)
    }

    88% {
        transform: translateX(-1250px)
    }

    92% {
        transform: translateX(0px)
    }
}
</style>
