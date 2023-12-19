const routes = {
    home: '/',
    search: '/search',
    detailroom: '/room/detail/:id', 
    detailRoomLink: (id) => `/room/detail/${id}`, 
    moreavailableroom: '/moreavailableroom',
    allreviews: '/allreviews',
    


    //seller
    dashboard: '/seller/dashboard',
    allrooms: '/seller/allrooms',
    addroom: '/seller/addroom',
    setting: '/seller/setting',  //profile
    viewcustomer: '/seller/viewcustomer',
    allappointments: '/seller/allappointments',
    updateRoom: '/seller/updateRoom/:id',
    updateRoomLink: (id) => `/seller/updateRoom/${id}`,

    //admin
    dashboards: '/admin/dashboard',
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
