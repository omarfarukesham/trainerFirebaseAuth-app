import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const{booking_id} = useParams()
    return (
        <div>
            this is booking page {booking_id}
        </div>
    );
};

export default Booking;