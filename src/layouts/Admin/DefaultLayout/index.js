/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { getProfile } from '~/actions/userActions';
import '~/assets/css/bootstrap-reboot4.2.1.css';
import '~/assets/css/bootstrap.min4.2.1.css';
import '~/assets/css/custom.datatables.css';
import '~/assets/css/responsive.css';
import '~/assets/css/styles-seller.css';
import '~/assets/vendors/datatables/datatables.min.css';
import '~/assets/vendors/fontawesome5.7.2/css/all.min.css';

import Header from '~/layouts/components/Admin/Header';
import Sidebar from '~/layouts/components/Admin/Sidebar';

function DefaultLayout({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProfile();
                setUser(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="wrapper">
            <Header user={user}></Header>
            <Sidebar user={user}></Sidebar>
            {children}
        </div>
    );
}

export default DefaultLayout;
