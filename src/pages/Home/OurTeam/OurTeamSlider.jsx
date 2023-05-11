import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const OurTeamSlider = ({ member }) => {
    const { _id, name, image, designation } = member;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} className=" rounded-xl shadow-2xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{designation}</p>
                <div className="card-actions mt-2">
                    <button className="btn btn-circle btn-outline hover:btn-warning"><FaFacebook></FaFacebook></button>
                    <button className="btn btn-circle btn-outline hover:btn-warning"><FaTwitter></FaTwitter></button>
                    <button className="btn btn-circle btn-outline hover:btn-warning"><FaLinkedin></FaLinkedin></button>
                    <button className="btn btn-circle btn-outline hover:btn-warning"><FaInstagram></FaInstagram></button>
                    
                </div>
            </div>
        </div>
    );
};

export default OurTeamSlider;