import About from "../About/About";
import Banner from "../Banner/Banner";
import Information from "../Information/Information";
import OurTeam from "../OurTeam/OurTeam";
import Products from "../Products/Products";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Information></Information>
            <Products></Products>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;