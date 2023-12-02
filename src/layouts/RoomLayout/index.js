/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import 'classnames/bind';
import '~/assets/css/bootstrap.min.css';
import '~/assets/css/jquery-ui.css';
import '~/assets/css/ie.css';
import '~/assets/css/style.css';
import '~/assets/css/owl.carousel.css';
import '~/assets/css/select-style.css';
import '~/assets/css/font-awesome.min.css';

import 'react-datepicker/src/stylesheets/datepicker.scss';
import DefaultLayout from '~/layouts/DefaultLayout';
import Steps from '~/components/Steps';

function RoomLayout({ children }) {
    return (
        <DefaultLayout>
            <div className="container">
                <Steps step={4}></Steps>
                {children}
            </div>
        </DefaultLayout>
    );
}

export default RoomLayout;
