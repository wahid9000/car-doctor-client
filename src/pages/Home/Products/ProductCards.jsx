import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ProductCards = ({ product }) => {
    const { image, name, price, ratings } = product;
    return (
        <div className="card w-9/12 mx-auto md:w-96 bg-base-100 shadow-xl">

            <figure className="px-10 pt-10 bg-slate-200">
                <img src={image} />
            </figure>
            <div className="card-body items-center text-center">
                <p><Rating className="text-warning text-xl"
                    placeholderRating={ratings}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                /></p>
                <h2 className="card-title font-bold">{name}</h2>
                <p className="font-bold text-orange-600">${price}</p>
                <div>
                    <button className="btn btn-warning rounded-md mt-3" >Buy Now</button>
                </div>

            </div>
        </div>
    );
};

export default ProductCards;