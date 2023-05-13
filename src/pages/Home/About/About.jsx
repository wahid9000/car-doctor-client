import image1 from '../../../assets/images/about_us/person.jpg'
import image2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen text-center md:text-left mt-12 md:mt-0">
            <div className="hero-content flex-col lg:flex-row gap-8">
                <div className='lg:w-1/2 relative'>
                    <img src={image1} className="w-3/4 h-auto md:h-80 rounded-lg shadow-2xl" />
                    <img src={image2} className="absolute right-5 h-auto md:h-72 top-1/2 w-1/2 rounded-lg shadow-2xl border-8 border-white" />
                </div>
                <div className='lg:w-1/2 space-y-5 mt-6 md:mt-0'>
                    <h4 className='text-xl text-orange-600 font-bold'>About Us</h4>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-warning rounded-md">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;