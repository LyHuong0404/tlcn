import { lazy } from 'react';

import config from '~/config';

const DefaultLayout = lazy(() => import('~/layouts/DefaultLayout'));
const AuthoSignUp = lazy(() => import('~/pages/AuthoSignUp'));
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
const EditProfileUser = lazy(() => import('~/pages/Admin/Profile/EditProfile'));
const ChangePasswordAdmin = lazy(() => import('~/pages/Admin/Profile/ChangePassword'));
const SettingSeller = lazy(() => import('~/pages/Seller/Setting'));
const AllReviews = lazy(() => import('~/pages/User/AllReviews'));
const MakeAppointment = lazy(() => import('~/pages/Room/Appointment'));
const AllAppointmentsSeller = lazy(() => import('~/pages/Seller/Appointments'));
const AllAppointmentsUser = lazy(() => import('~/pages/User/Appointment/AllAppointments'));
const UpdateRoomSeller = lazy(() => import('~/pages/Seller/Room/UpdateRoom'));
const PaymentSuccess = lazy(() => import('~/pages/PaymentSuccess'));
const PaymentFail = lazy(() => import('~/pages/PaymentFail'));
const AppointmentsAdmin = lazy(() => import('~/pages/Admin/Appointments'));
const PaymentsAdmin = lazy(() => import('~/pages/Admin/Payment'));
const getUserAppointments = lazy(() => import('~/pages/Admin/UserAppointments'));
const getUserPayment = lazy(() => import('~/pages/Admin/UserPayment'));
const EditProfileAdmin = lazy(() => import('~/pages/Admin/Profile/EditAdminProfile'));

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
        path: config.authRoutes.login,
        component: Login,
        layout: null,
    },
    {
        path: config.authRoutes.signup,
        component: Signup,
        layout: null,
    },
    {
        path: config.authRoutes.authosignup,
        component: AuthoSignUp,
        layout: null,
    },
];

const privateRoutes = [
    {
        path: config.authRoutes.forgotpassword,
        component: ForgotPassword,
        layout: null,
    },
    {
        path: config.authRoutes.profile,
        component: Profile,
    },
    {
        path: config.authRoutes.appointment, //set appointment
        component: MakeAppointment,
        layout: RoomLayout,
    },
    {
        path: config.authRoutes.allappointmentsuser,
        component: AllAppointmentsUser,
        layout: DefaultLayout,
    },
    {
        path: config.authRoutes.paymentSuccess,
        component: PaymentSuccess,
        layout: null,
    },
    {
        path: config.authRoutes.paymentError,
        component: PaymentFail,
        layout: null,
    },

    // seller
    {
        path: config.routes.setting,
        component: SettingSeller,
        layout: DefaultLayoutSeller,
    },
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
        path: config.routes.allappointments,
        component: AllAppointmentsSeller,
        layout: DefaultLayoutSeller,
    },
    {
        path: config.routes.updateRoom,
        component: UpdateRoomSeller,
        layout: DefaultLayoutSeller,
    },

    //admin
    {
        path: config.authRoutes.appointments,
        component: AppointmentsAdmin,
        layout: DefaultLayoutAdmin,
    },
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
        path: config.authRoutes.payments,
        component: PaymentsAdmin,
        layout: DefaultLayoutAdmin,
    },
    {
        path: config.authRoutes.getUser,
        component: EditProfileUser,
        layout: DefaultLayoutAdmin,
    },
    {
        path: config.authRoutes.getUserAppointments,
        component: getUserAppointments,
        layout: DefaultLayoutAdmin,
    },
    {
        path: config.authRoutes.getUserPayment,
        component: getUserPayment,
        layout: DefaultLayoutAdmin,
    },
];

export { publicRoutes, privateRoutes };
