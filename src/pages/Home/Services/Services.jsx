import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])


    return (
        <div className="mt-24">
            <div>
                <div className="text-center space-y-5">
                    <h4 className="text-xl text-orange-600  font-bold">Service</h4>
                    <h2 className="text-3xl font-bold">Our Service Area</h2>
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-6 justify-center ">
                    {
                        services.map(service => <ServiceCard
                        key={service._id}
                        service = {service}
                        
                        ></ServiceCard>)
                    }
                </div>
                <div className="text-center">
                <Link className="btn btn-outline btn-warning text-orange-900 rounded-md">More Services</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Services;