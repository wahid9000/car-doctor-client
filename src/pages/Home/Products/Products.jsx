import { useEffect, useState } from "react";
import ProductCards from "./ProductCards";

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="mb-24">
            <div className="text-center space-y-5">
                <h4 className="text-xl text-orange-600  font-bold">Popular Products</h4>
                <h2 className="text-3xl font-bold">Browse Our Products</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                {
                    products.map(product => <ProductCards
                    key={product._id}
                    product = {product}
                    ></ProductCards>)
                }
            </div>

            <div className="text-center mt-12">
                <button className="btn btn-outline btn-warning rounded-md font-bold ">More Products</button>
            </div>
        </div>
    );
};

export default Products;