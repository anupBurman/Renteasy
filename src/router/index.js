import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import ContactUs from "@/components/ContactUs.vue";
import PostPage from "@/components/PostPage.vue";
import ProFile from "@/components/ProFile.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import logIn from "@/components/LoginPage.vue";
import AddProperty from "@/components/AddProperty.vue";
import MyProperties from "@/components/MyProperties.vue";
import MyPropertiesDetail from "@/components/MyPropertiesDetail.vue";
import AddRoom from "@/components/AddRoom.vue";
import RoomRentStatus from "@/components/TotalRoom&RentStatus.vue";
import TenentReciept from "@/components/TenentReciept.vue";
import TenentProfile from "@/components/TenentProfile.vue";
import GanrateBill from "@/components/GanrateBill.vue";
import EditTenent from "@/components/EditTenent.vue";

import FileUpload from "@/components/FileUpload.vue";
import CompositionApi from "@/components/CompositionApi.vue";
import ImagePost from "@/components/ImagePost.vue";
import MultiSlider from "@/components/MultiSlider.vue";
import SamPle from "@/components/SamPle.vue";
import VerifyOtp from "@/components/VerifyOtp.vue";
import EditProperty from "@/components/edit/EditProperty.vue";
import TermsConditions from "@/components/TermsConditions.vue";
import ErrorPage from "@/components/ErrorPage.vue";
import AddShop from "@/components/AddShop.vue";
import DeleteProperty from "@/components/delete/DeleteProperty.vue";
import AllTenents from "@/components/AllTenents.vue";





const routes = [
 
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: '/contactus',
    name: 'ContacUs',
    component: ContactUs
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
    path: '/MultiSlider',
    name: 'MultiSlider',
    component: MultiSlider
  },
  {
    path: '/samples',
    name: 'SamPle',
    component: SamPle
  },
  {
    path: '/VerifyOtp',
    name: 'VerifyOtp',
    component:   VerifyOtp
  },
  {
    path: '/AddProperty',
    name: 'AddProperty',
    component:  AddProperty
  },
  {
    path: '/imagepost',
    name: 'ImagePost',
    component:  ImagePost
  },
  {
    path: '/myProperty',
    name: 'MyProperties',
    component:  MyProperties
  },
  {
    path: '/add_property',
    name: 'FileUpload',
    component:  FileUpload
  },
  {
    path: '/my_properties_detail/:id',
    name: 'MyPropertiesDetail',
    component:  MyPropertiesDetail
  },
  {
    path: '/add_room/:id',
    name: 'AddRoom',
    component: AddRoom
  },
  {
    path: '/room_rent_status',
    name: 'RoomRentStatus',
    component: RoomRentStatus
  },
  {
    path: '/tenent_reciept/:id/:tenentId/:rent_start_date',
    name: ' TenentReciept',
    component:  TenentReciept
  },
  {
    path: '/tenent_profile/:id/:tenentId/:rent_start_date',
    name: ' TenentProfile',
    component:  TenentProfile
  },
  {
    path: '/ganrate_bill/:id/:tenentId/:rent_start_date',
    name: 'GanrateBill',
    component: GanrateBill
  },
  {
   path: '/edit_tenent/:tenentId',
   name: 'EditTenet',
   component: EditTenent
  },
  {
    path: '/edit_property/:propId',
    name: 'EditProperty',
    component: EditProperty
   },
   {
    path: '/delete_property/:propId',
    name: 'DeleteProperty',
    component: DeleteProperty
   },
   {
    path: '/terms_conditions',
    name: 'TermsConditions',
    component: TermsConditions
   },
   {
    path: '/add_shop/:id',
    name: 'AddShop',
    component: AddShop
   },
    {
    path: '/all_tenents',
    name: 'AllTenents',
    component: AllTenents
   },
   {
    path: '/error_page',
    name: 'ErrorPage',
    component: ErrorPage
   }

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;