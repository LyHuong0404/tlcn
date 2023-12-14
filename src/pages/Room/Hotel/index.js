import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Infor from '~/components/HotelPage/Infor';
import Sidebar from '~/components/HotelPage/Sidebar';
import { detailRoom } from '~/actions/userActions';

function Hotel() {
    const [room, setRoom] = useState('');
    const params = useParams();
    const roomID = params?.id;

    useEffect(() => {
        const fetchData = async () => {
            if (roomID != null) {
                const result = await detailRoom(roomID);
                setRoom(result);
            }
        };
        fetchData();
    }, [roomID]);

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
