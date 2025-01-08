<template>
    <h1 class="py-3">Print arrey of objects in page  </h1>
    <h3> Faculty Of Science </h3>

    <div class="container faculty">
        <div class="row text-start">
            <div class="col-lg-4 " v-for="xyz in engineering" :key="xyz.name" >
                <h4> {{ xyz.branch_head }}</h4>
              <a href="#" >  {{ xyz.branch + ' ' }}  </a>  
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ContactUs',
    data() {
        return {
            engineering: [
                {branch_head:'civil Engineering',  branch:['B.Tech in cil Engineering', 'Diploma in cil Engineering', 'M.Tech in Highway Engineering']},
                {branch_head:'Mechanical Engineering',  branch:['B.Tech in Mechanical Engineering', 'Diploma in Mechanical Engineering', 'M.Tech in Automobile Engineering']},
                {branch_head:'Computer Engineering',  branch:['Diploma in CSE', 'B.Tech in CSE', 'M.Tech in CSE']}
            ],
            Faculty:'',

        }
    }
}
</script>

<style>
.faculty a{
    text-decoration: none;
    color: #333;
}
.faculty a:hover{
    text-decoration: none;
    color: #ba0000;
    transition:0.5s;
}
</style>