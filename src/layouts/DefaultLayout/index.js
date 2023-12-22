import classNames from 'classnames/bind';
import Footer from '../components/Footer';
import Header from '../components/Header';
import style from './DefaultLayout.module.scss';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div style={{ marginTop: '120px' }}>{children}</div>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
