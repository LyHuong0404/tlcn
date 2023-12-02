import { useLocation } from 'react-router-dom';
import Infor from '~/components/HotelPage/Infor';
import Sidebar from '~/components/HotelPage/Sidebar';

function Hotel() {
    const location = useLocation();
    const room = location?.state?.room;

    return (
        <>
            <div className="row htlfndr-page-content">
                <Infor data={room}></Infor>
                <Sidebar data={room}></Sidebar>
            </div>
        </>
    );
}

export default Hotel;
