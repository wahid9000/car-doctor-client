import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import image from '../../assets/images/checkout/checkout.png'
import BookingRows from "./BookingRows";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from "react-router-dom";
import { useScrollTop } from "../../hooks/useScrollTop";

const Bookings = () => {

    const { pathName } = useLocation();
    useScrollTop(pathName);

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate();

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("car-doctor-access-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookings(data)
                }
                else{
                    //logout and then navigate
                    navigate('/')
                }
                
            })
    }, [url, navigate])

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                        const remaining = bookings.filter(booking => booking._id !== _id);
                        setBookings(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your Booked Service has been deleted successfully.',
                                'success'
                            )
                        }

                    })
            }
        })
    }

    const handleBookingConfirm = (_id) => {
        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== _id);
                const updated = bookings.find(booking => booking._id === _id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining]
                setBookings(newBookings);
                Swal.fire({
                    title: 'Success!',
                    text: 'Booking Has Been Confirmed!',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
                
            }
        })
    }


    return (
        <div>
            <div className="relative mt-10 md:mt-5 border p-24 w-11/12 md:w-10/12 mx-auto rounded-xl" style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute bottom-0 flex items-center gap-5 left-0 right-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <h2 className="text-3xl font-bold text-white pl-6">Booked Services : {bookings.length}</h2>
                </div>
            </div>

            <div className="overflow-x-auto w-full my-12">
                <table className="table w-10/12 mx-auto">
                    <thead>
                        <tr>
                            <th>
                                <label></label>
                            </th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Service Price</th>
                            <th>Date & Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRows
                                key={booking._id}
                                booking={booking}
                                handleDelete = {handleDelete}
                                handleBookingConfirm = {handleBookingConfirm}
                            ></BookingRows>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;