import images from '~/assets/images';
import styles from './Loader.module.scss';
function Loader() {
    return (
        <div id="splash" className={styles.loading}>
            <div id="splash">
                <img src={images.loading} alt='loading icon'/>
            </div>
        </div>
    );
}

export default Loader;
