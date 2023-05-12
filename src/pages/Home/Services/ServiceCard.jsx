import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div>
            <div className="card  w-9/12 mx-auto md:w-96 bg-base-100 shadow-sm rounded-lg border h-96">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-orange-600 font-semibold">Price : ${price}</p>

                        <Link to={`/book/${_id}`}><button className="btn btn-warning rounded-md bg-orange-600"><span className="text-white mr-1">Book</span><FaArrowRight className="text-white"></FaArrowRight></button></Link>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default ServiceCard;