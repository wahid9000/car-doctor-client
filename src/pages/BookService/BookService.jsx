import { useLoaderData } from "react-router-dom";
import img from '../../assets/images/checkout/checkout.png'

const BookService = () => {
    const service = useLoaderData();
    console.log(service);
    const { title, price, service_id } = service;
    return (
        <div>
            <div className="relative border p-24 w-10/12 mx-auto rounded-xl" style={{ backgroundImage: `url(${img})` }}>
                <div className="absolute bottom-0 flex items-center gap-5 left-0 right-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
                    <h2 className="text-3xl font-bold text-white pl-6">Book Your Service for : {title}</h2>
                </div>
            </div>

            <div className="border my-12 p-16 w-10/12 mx-auto bg-slate-200 rounded-xl">
                <div className="w-8/12 mx-auto space-y-3">
                    <form>
                        <div className=" flex justify-center items-center gap-5">
                            <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs  rounded-md" required />

                            <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs  rounded-md" />
                        </div>
                        <div className="flex justify-center items-center gap-5">
                            <input type="text" placeholder="Your Phone" className="input input-bordered w-full max-w-xs  rounded-md" required />

                            <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs  rounded-md" />
                        </div>
                        <div className="flex justify-center items-center">
                            <textarea className="textarea textarea-bordered rounded-md w-full h-48" placeholder="Bio"></textarea>
                        </div>
                        <div>
                            <button className="btn btn-block btn-warning text-white bg-orange-600 rounded-md mt-5">Book Your Service</button>
                        </div>
                    </form>

                </div>



            </div>

        </div>
    );
};

export default BookService;
