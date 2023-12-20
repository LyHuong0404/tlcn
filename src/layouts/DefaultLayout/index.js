import classNames from 'classnames/bind';
import Footer from '../components/Footer';
import Header from '../components/Header';
import style from './DefaultLayout.module.scss';
import Survey from '~/components/Survey';
import { useSelector } from 'react-redux';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className={cx('wrapper')}>
            {user?.isSurvey && <Survey />}
            <Header></Header>
            <div style={{ marginTop: '120px' }}>{children}</div>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
