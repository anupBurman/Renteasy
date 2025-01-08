import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import SignIn from "@/components/SignIn.vue";
import ContactUs from "@/components/ContactUs.vue";
import TabView from "@/components/TabView.vue";
import RegisTration from "@/components/RegisTration.vue"
import CrudPage from "@/components/CrudPage.vue";
import PostPage from "@/components/PostPage.vue";
import CompositionApi from "@/components/CompositionApi.vue";
import ProFile from "@/components/ProFile.vue";
import PagiNation from "@/components/PagiNation.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import logIn from "@/components/LoginPage.vue";
import VueCarousal from "@/components/VueCarousal.vue";
import MultiSlider from "@/components/MultiSlider.vue";




const routes = [
 
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/SignIn",
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/contactus',
    name: 'ContacUs',
    component: ContactUs
  },
  {
    path: '/Tab-View',
    name: 'TabView',
    component: TabView
  },

  {
    path: '/registration',
    name: 'RegisTration',
    component: RegisTration
  },
  {
    path: '/crud',
    name: 'CrudPage',
    component: CrudPage
  },
  {
    path: '/post',
    name: 'PostPage',
    component: PostPage
  },
  {
    path: '/ref',
    name: 'CompositionApi',
    component: CompositionApi
  },
  {
    path: '/Profile/:id',
    name: 'ProFile',
    component: ProFile
  },
  {
    path: '/pagination',
    name: 'PagiNation',
    component: PagiNation
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'logIn',
    component: logIn
  },
  {
    path: '/VueCarousal',
    name: 'VueCarousal',
    component: VueCarousal
  },
  {
    path: '/MultiSlider',
    name: 'MultiSlider',
    component: MultiSlider
  },
 
 
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;