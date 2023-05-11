import { FaCalendarAlt, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const Information = () => {
    return (
        <div className="border my-24 flex justify-around px-5 py-20 bg-[#151515] text-white rounded-lg">
            <div className="flex items-center gap-5">
                <div>
                    <FaCalendarAlt></FaCalendarAlt>
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className="text-2xl font-bold">7:00 am - 9.00 pm</h3>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div>
                    <FaPhoneAlt></FaPhoneAlt>
                </div>
                <div>
                    <p>Have a question?</p>
                    <h3 className="text-2xl font-bold">+2545 251 2658</h3>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div>
                    <FaLocationArrow></FaLocationArrow>
                </div>
                <div>
                    <p>Need a Repair? Our address</p>
                    <h3 className="text-2xl font-bold">Liza Street, New York.</h3>
                </div>
            </div>

        </div>
    );
};

export default Information;