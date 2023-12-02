import { useNavigate } from 'react-router-dom';
import { registerSeller } from '~/actions/userActions';

function RegisterSeller() {
    const navigate = useNavigate();

    const handleRegiterSeller = () => {
        const callAPI = async () => {
            try {
                const data = await registerSeller();
                if (data.success) {
                    navigate('/seller/dashboard');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        callAPI();
    };
    return (
        <div className="htlfndr-user-panel col-md-9 col-sm-8 htlfndr-setting-page" id="htlfndr-user-tab-5">
            <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
                vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
                sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                eget qu
            </p>
            <input type="checkbox"/>ccwqerwwc
            <button type="submit" onClick={handleRegiterSeller}>
                Register Seller
            </button>
        </div>
    );
}

export default RegisterSeller;
