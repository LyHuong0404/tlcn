import { lazy } from 'react';

import config from '~/config';

const DefaultLayout = lazy(() => import('~/layouts/DefaultLayout'));
const Profile = lazy(() => import('~/pages/User/Profile'));
const Login = lazy(() => import('~/pages/Login'));
const Signup = lazy(() => import('~/pages/Signup'));
const ForgotPassword = lazy(() => import('~/pages/ForgotPassword'));
const SearchResult = lazy(() => import('~/pages/Room/SearchResult'));
const Home = lazy(() => import('~/pages/User/Home'));
const RoomLayout = lazy(() => import('~/layouts/RoomLayout'));
const Hotel = lazy(() => import('~/pages/Room/Hotel'));
const MoreAvailableRoom = lazy(() => import('~/pages/Room/MoreAvailableRoom'));
const DashBoardAdmin = lazy(() => import('~/pages/Admin/DashBoard'));
const DashBoardSeller = lazy(() => import('~/pages/Seller/Dashboard'));
const DefaultLayoutSeller = lazy(() => import('~/layouts/Seller/DefaultLayout'));
const DefaultLayoutAdmin = lazy(() => import('~/layouts/Admin/DefaultLayout'));
const AllRoomSeller = lazy(() => import('~/pages/Seller/Room/AllRooms'));
const AddRoomSeller = lazy(() => import('~/pages/Seller/Room/AddRoom'));
const ListUsersAdmin = lazy(() => import('~/pages/Admin/UserList'));
const AddUserAdmin = lazy(() => import('~/pages/Admin/AddUser'));
const ViewProfileAdmin = lazy(() => import('~/pages/Admin/Profile/ViewProfile'));
const EditProfileAdmin = lazy(() => import('~/pages/Admin/Profile/EditProfile'));
const ChangePasswordAdmin = lazy(() => import('~/pages/Admin/Profile/ChangePassword'));
const ListRoomAdmin = lazy(() => import('~/pages/Admin/RoomListing/All'));
const AllCustomersSeller = lazy(() => import('~/pages/Seller/Users/AllUsers'));
const SettingSeller = lazy(() => import('~/pages/Seller/Setting'));
const ViewCustomerSeller = lazy(() => import('~/pages/Seller/Users/View'));
const ListRoomTypesAdmin = lazy(() => import('~/pages/Admin/RoomType'));
const AddRoomTypeAdmin = lazy(() => import('~/pages/Admin/AddRoomType'));
const AllReviews = lazy(() => import('~/pages/User/AllReviews'));
const MakeAppointment = lazy(() => import('~/pages/Room/Appointment'));
const AllAppointmentsSeller = lazy(() => import('~/pages/Seller/Appointments'));
const UpdateAppointmentUser = lazy(() => import('~/pages/User/Appointment/UpdateAppointment'));
const AllAppointmentsUser = lazy(() => import('~/pages/User/Appointment/AllAppointments'));

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.search,
        component: SearchResult,
        layout: RoomLayout,
    },
    {
        path: config.routes.detailroom,
        component: Hotel,
        layout: RoomLayout,
    },
    // {
    //     path: config.routes.detailroom,
    //     component: DetailRoom,
    //     layout: RoomLayout,
    // },
    {
        path: config.routes.moreavailableroom,
        component: MoreAvailableRoom,
        layout: RoomLayout,
    },
    {
        path: config.routes.allreviews,
        component: AllReviews,
        layout: RoomLayout,
    },
    {
        path: config.routes.appointment, //set appointment
        component: MakeAppointment,
        layout: RoomLayout,
    },
    {
        path: config.routes.allappointmentsuser,
        component: AllAppointmentsUser,
        layout: DefaultLayout,
    },
    {
        path: config.routes.updateAppointment,
        component: UpdateAppointmentUser,
    },

    //seller
    {
        path: config.routes.dashboard,
        component: DashBoardSeller,
        layout: DefaultLayoutSeller,
    },
    {
        path: config.routes.allrooms,
        component: AllRoomSeller,
        layout: DefaultLayoutSeller,
    },
    {
        path: config.routes.addroom,
        component: AddRoomSeller,
        layout: DefaultLayoutSeller,
    },
    {
        path: config.routes.allcustomers,
        component: AllCustomersSeller,
        layout: DefaultLayoutSeller,
    },
    {
        path: config.routes.viewcustomer,
        component: ViewCustomerSeller,
        layout: DefaultLayoutSeller,
    },
    {
        path: config.routes.allappointments,
        component: AllAppointmentsSeller,
        layout: DefaultLayoutSeller,
    },
    //admin
    {
        path: config.routes.dashboards,
        component: DashBoardAdmin,
        layout: DefaultLayoutAdmin,
    },
    {
        path: config.routes.users,
        component: ListUsersAdmin,
        layout: DefaultLayoutAdmin,
    },
    {
        path: config.routes.adduser,
        component: AddUserAdmin,
        layout: DefaultLayoutAdmin,
    },
    {
        path: config.routes.roomtypes,
        component: ListRoomTypesAdmin,
        layout: DefaultLayoutAdmin,
    },
    {
        path: config.routes.addroomtype,
        component: AddRoomTypeAdmin,
        layout: DefaultLayoutAdmin,
    },
];

const privateRoutes = [
    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },
    {
        path: config.routes.signup,
        component: Signup,
        layout: null,
    },
    {
        path: config.routes.forgotpassword,
        component: ForgotPassword,
        layout: null,
    },
    {
        path: config.authRoutes.profile,
        component: Profile,
    },

    // seller
    {
        path: config.routes.setting,
        component: SettingSeller,
        layout: DefaultLayoutSeller,
    },

    //admin
    {
        path: config.routes.viewprofile,
        component: ViewProfileAdmin,
        layout: DefaultLayoutAdmin,
    },
    {
        path: config.routes.editprofile,
        component: EditProfileAdmin,
        layout: DefaultLayoutAdmin,
    },
    {
        path: config.routes.changepassword,
        component: ChangePasswordAdmin,
        layout: DefaultLayoutAdmin,
    },
    {
        path: config.routes.listrooms,
        component: ListRoomAdmin,
        layout: DefaultLayoutAdmin,
    },
];

export { publicRoutes, privateRoutes };
