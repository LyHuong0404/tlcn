import images from '~/assets/images';
import styles from './TemplateMail.module.scss';

function TemplateMail() {
    return (
        <div style={{ display: 'block' }}>
            <div
                style={{
                    zIndex: '999',
                    position: 'fixed',
                    top: '0',
                    right: '0',
                    left: '0',
                    bottom: '0',
                    display: 'flex',
                }}
            >
                <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: '#f5f7f9' }}></div>
                <div
                    style={{
                        margin: 'auto',
                        width: 'fit-content',
                        height: 'fit-content',
                        backgroundColor: '#ffffff',
                        borderRadius: '5px',
                        zIndex: 1,
                        padding: '30px',
                    }}
                >
                    <div style={{ backgroundColor: '#f9dedc', padding: '5px 10px', marginBottom: '8px' }}>
                        <h6 style={{ color: '#d34127' }}>Hello you,</h6>
                        <h6 style={{ color: '#d34127' }}>We have a few new rooms that are just right for you!</h6>
                    </div>
                    <div style={{ display: 'flex', border: '1px solid #f9dedc', padding: '5px', marginBottom: '5px' }}>
                        <img src={images.slider1} alt="Room" width={140} height={100} style={{ marginRight: '10px' }} />
                        <div style={{ color: '#696969', padding: '12px 0' }}>
                            <p>Name</p>
                            <p>dia chi hywrny cywnr cwqunr cwhnrh crywqnyr cgwry cwygrny</p>
                            <>400000/month</>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateMail;
