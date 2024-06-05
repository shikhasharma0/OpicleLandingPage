// import React from 'react';
// import './About.css';

// const About = () => {
//     return (
//         <div className="about-us">
//             <div className="about-section">
//             <h5>Get To Know</h5>
//                 <h1>About Us</h1>
//                 <p>Our company is committed to providing the best service in the industry. We value our customers and strive to meet their needs with utmost professionalism and dedication.</p>
//                 <p>Founded in 2020, we have quickly grown to become a trusted name in the industry. Our team consists of highly skilled professionals who are passionate about their work.</p>
//             </div>

//             {/* <div className="contact-section">
//                 <h2>Contact Us</h2>
//                 <p>Email: contact@company.com</p>
//                 <p>Phone: +123 456 7890</p>
//                 <p>Address: 123 Street, City, Country</p>
//             </div> */}
//         </div>
//     );
// };

// export default About;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './About.css';

// const About = () => {
//     const [team, setTeam] = useState([]);

//     useEffect(() => {
//         axios.get('/api/team')
//             .then(response => setTeam(response.data))
//             .catch(error => console.error('Error fetching team data:', error));
//     }, []);

//     return (
//         <div className="about-us">
//             <h1>About Us</h1>
//             <p>Our company is committed to providing the best service in the industry. We value our customers and strive to meet their needs with utmost professionalism and dedication.</p>
//             <div className="team-section">
//                 {team.map(member => (
//                     <div key={member.name} className="team-member">
//                         <img src={member.image} alt={member.name} className="team-image" />
//                         <h2>{member.name}</h2>
//                         <h3>{member.title}</h3>
//                         <p>{member.bio}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default About;




import React from 'react';
import './About.css';
import ceo from '../../images/ceo.jpg';

const About = () => {
    return (
        <div className="about-us">
            <div className="about-section">
                <h4>Get To Know</h4>
                <h1>About Us</h1>
                <p>Our company is committed to providing the best service in the industry. We value our customers and strive to meet their needs with utmost professionalism and dedication.</p>
                <p>Founded in 2020, we have quickly grown to become a trusted name in the industry. Our team consists of highly skilled professionals who are passionate about their work.
                Central to our success is our unwavering focus on customer-centricity. We recognize that our clients are the lifeblood of our business, and their satisfaction is paramount. That's why we go above and beyond to understand their unique needs and challenges,
                 tailoring our solutions to deliver tangible results and maximum value.
In an ever-evolving landscape, innovation is key to staying ahead of the curve.
 That's why we invest heavily in research and development, leveraging cutting-edge technologies 
 and methodologies to drive continuous improvement and innovation across all facets of our
  operations. From product development to customer service, innovation permeates every aspect of our business,
 enabling us to anticipate market trends and adapt swiftly to changing customer demands.
                </p>
            </div>
            <div className="image-section">
                <img src={ceo} alt="Company" />
            </div>
        </div>
    );
}; 

export default About;

