import { useEffect, useState } from "react";
import OurTeamSlider from "./OurTeamSlider";

const OurTeam = () => {

    const [team, setTeam] = useState([]);
    useEffect( () => {
        fetch('team.json')
        .then(res => res.json())
        .then(data => setTeam(data))
    } , [])


    return (
        <div className="mb-24">
            <div className="text-center space-y-5">
                <h4 className="text-xl text-orange-600  font-bold">Team</h4>
                <h2 className="text-3xl font-bold">Meet Our Team</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid md:grid-cols-3">
                {
                    team.map(member => <OurTeamSlider
                    key={member._id}
                    member={member}
                    
                    
                    ></OurTeamSlider>)
                }
            </div>
        </div>
    );
};

export default OurTeam;