const authRoutes = {
    login: '/auth/login',
    signup: '/auth/signup',
    authosignup: '/auth/signup/otp',
    logout: '/auth/logout',
    me: '/auth/me',
    forgotpassword: '/auth/forgotpassword',
    profile: '/profile',
    appointment: '/user/appointment',
    updateAppointmentLink: (id) => `/user/appointment/${id}`,
    allappointmentsuser: '/user/allappointments',
    paymentSuccess: '/payment/success',
    paymentError: '/payment/error',
};
export default authRoutes;
