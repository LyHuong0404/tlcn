import { useParams } from "react-router-dom";

function UpdateAppointment() {
    const params = useParams();
    const appointmentId = params.id;
    
    
    

    return ( <h1>Update Appointment</h1>);
}

export default UpdateAppointment;