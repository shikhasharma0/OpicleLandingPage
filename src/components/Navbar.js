// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//     return (
//         <nav>
//             <div className='container'>
//                 <div className="navbar-logo">Opicle</div>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/blog">Blog</Link></li>
//                 <li><Link to="/gallery">Gallery</Link></li>
//                 <li><Link to="/projects">Projects</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//             </ul>
//             <div className="navbar-buttons">
//                     <button className="sign-up-btn">Sign Up</button>
//                     <button className="login-btn">Login</button>
//                 </div>
//                 </div>
//         </nav>
//     );
// };

// export default Navbar;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//     return (
//         <nav>
//             <div className="container">
//                 <div className="navbar-logo">Opicle</div>
//                 <ul className="navbar-menu">
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/blog">Blog</Link></li>
//                     <li><Link to="/gallery">Gallery</Link></li>
//                     {/* <li><Link to="/projects">Projects</Link></li> */}
//                     <li><Link to="/contact">Contact</Link></li>
//                 </ul>
//                 <div className="navbar-buttons">
//                     <button className="sign-up-btn">Sign Up</button>
//                     <button className="login-btn">Login</button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="navbar-logo">Opicle</div>
                <ul className="navbar-menu">
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="blog" smooth={true} duration={500}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="gallery" smooth={true} duration={500}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="navbar-buttons">
                    <button className="sign-up-btn">Sign Up</button>
                    <button className="login-btn">Login</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
