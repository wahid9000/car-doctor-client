import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {title, img, price} = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm rounded-lg border">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-orange-600 font-semibold">Price : ${price}</p>
                    <button className="btn btn-sm btn-circle  bg-orange-600"><FaArrowRight className="text-white"></FaArrowRight></button>
                    </div>
                    
            
                </div>
            </div>
            
        </div>
    );
};

export default ServiceCard;