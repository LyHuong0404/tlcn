import '~/assets/css/font-awesome-admin.min.css';
import '~/assets/css/style-admin.css';
import '~/assets/css/mob.css';
import '~/assets/css/bootstrap.css';
import '~/assets/css/materialize.css';

import Header from '../../components/Seller/Header';
import Sidebar from '../../components/Seller/Sidebar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header></Header>
            <div className="container-fluid sb2">
                <div className="row">
                    <Sidebar></Sidebar>
                    {children}
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
