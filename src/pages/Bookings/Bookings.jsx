import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import image from '../../assets/images/checkout/checkout.png'

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    return (
        <div>
            <div className="relative mt-10 md:mt-5 border p-24 w-11/12 md:w-10/12 mx-auto rounded-xl" style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute bottom-0 flex items-center gap-5 left-0 right-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <h2 className="text-3xl font-bold text-white pl-6">Booked Services : {bookings.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default Bookings;