export const adminMenu = [

    { //quản lí người dùng
        name: 'menu.admin.manage-user', 
        menus: [
            {
                name: 'menu.admin.crud',link: '/system/user-manage'
               
            },
            {
                name: 'menu.admin.crud-redux',link: '/system/user-redux'
               
            },
            {
                name: 'menu.admin.manage-doctor',link: '/system/user-doctor '
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {
                name: 'menu.admin.manage-admin',link: '/system/user-admin'
               
            },
 
        ]
    },
    { //quản lí phòng khám
        name: 'menu.admin.clinic', 
        menus: [
            {
                name: 'menu.admin.manage-clinic',link: '/system/manage-clinic'
               
            },
           
        ]
    },
    { //quản lí quản lí chuyên khoa
        name: 'menu.admin.specialty', 
        menus: [
            {
                name: 'menu.admin.manage-specialty',link: '/system/manage-specialty'
               
            },
           
        ]
    },
    { //quản lí quản lí cẩm nang
        name: 'menu.admin.handbook', 
        menus: [
            {
                name: 'menu.admin.manage-handbook',link: '/system/manage-handbook'
               
            },
           
        ]
    },
];