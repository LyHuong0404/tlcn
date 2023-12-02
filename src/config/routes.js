const routes = {
    login: '/login',
    signup: '/signup',
    forgotpassword: '/forgotpassword',
    home: '/',
    // profile: '/:nickname',
    // profileLink: (nickname) => `/${nickname}`,
    search: '/search',
    // video: '/videos/:id',
    // videoLink: (id) => `/videos/${id}`,
    detailroom: '/room/:id', //hotel
    detailRoomLink: (id) => `/room/${id}`, //hotel  
    moreavailableroom: '/moreavailableroom',
    allreviews: '/allreviews',
    appointment: '/user/appointment',
    updateAppointmentLink: (id) => `/user/appointment/${id}`,
    allappointmentsuser: '/user/allappointments',

    //seller
    dashboard: '/seller/dashboard',
    allrooms: '/seller/allrooms',
    addroom: '/seller/addroom',
    allcustomers: '/seller/allcustomers',
    setting: '/seller/setting',  //profile
    viewcustomer: '/seller/viewcustomer',
    allappointments: '/seller/allappointments',

    //admin
    dashboards: '/admin/dashboards',
    users: '/admin/users',
    adduser: '/admin/adduser',
    viewprofile: '/admin/viewprofile',
    editprofile: '/admin/editprofile',
    changepassword: '/admin/changepassword',
    listrooms: '/admin/listrooms',
    roomtypes: '/admin/roomtypes',
    addroomtype: '/admin/addroomtype',
};

export default routes;
