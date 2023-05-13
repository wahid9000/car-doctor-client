import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import image from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useScrollTop } from "../../hooks/useScrollTop";

const BookService = () => {
    
    const { pathName } = useLocation();
    useScrollTop(pathName);


    const service = useLoaderData();
    const { title, price, img, _id } = service;
    console.log(service);
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const bookingInfo = { customerName: name, email, phone, date, img, service_id: _id, service: title, servicePrice: price };
        console.log(bookingInfo);

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    form.reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service Booked Successfully',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                    navigate('/bookings')
                }

            })





    }


    return (
        <div>
            <div className="relative mt-10 md:mt-5 border p-24 w-11/12 md:w-10/12 mx-auto rounded-xl" style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute bottom-0 flex items-center gap-5 left-0 right-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <h2 className="text-3xl font-bold text-white pl-6">Book Your Service</h2>
                </div>
            </div>

            <div className="border my-12 p-8 w-11/12 md:w-10/12 mx-auto bg-slate-200 rounded-xl">
                <div className="md:w-8/12 mx-auto">
                    <div className="text-center text-lg font-bold mb-10">
                        <h2>Service Name: {title}</h2>
                        <h2>Price: ${price}</h2>
                    </div>

                    <form onSubmit={handleBookService} className=" space-y-3">
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="Name">Name:</label>
                                <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered w-full max-w-xs rounded-md mb-3 md:mb-0" required />
                            </div>
                            <div>
                                <label htmlFor="Email">Email:</label>
                                <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full max-w-xs rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="Phone">Phone:</label>
                                <input type="number" name="phone" defaultValue={user?.phone} placeholder="Your Phone" className="input input-bordered w-full max-w-xs rounded-md mb-3 md:mb-0" required />
                            </div>

                            <div>
                                <label htmlFor="Date">Data & Time: </label>
                                <input type="datetime-local" name="date" className="input input-bordered w-full max-w-xs rounded-md text-gray-400" />
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="Book Your Service" className="btn btn-block btn-warning text-white bg-orange-600 rounded-md mt-5" />
                        </div>

                    </form>

                </div>



            </div>

        </div>
    );
};

export default BookService;
