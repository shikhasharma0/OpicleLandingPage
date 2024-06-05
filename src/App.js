// import React from 'react';
// import LandingPage from './components/LandingPage';

// function App() {
//     return (
//         <div className="App">
//             <LandingPage />
//         </div>
//     );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Blog from './pages/Blog/Blog';
// import Gallery from './pages/Gallery/Gallery';
// import Contact from './pages/Contact/Contact';
// import './App.css';

// function App() {
//     return (
//       <>
//       <Home />
//       <About />
//       <Blog />
//       <Gallery />
//      <Contact/> 

//      </>  

//         // <Router>
//         //     <Navbar />
//         //     <Routes>
//         //         <Route path="/" element={<Home />} />
//         //         <Route path="/about" element={<About />} />
//         //         <Route path="/blog" element={<Blog />} />
//         //         <Route path="/gallery" element={<Gallery />} />
//         //         <Route path="/contact" element={<Contact/>} />
//         //     </Routes>
//         // </Router>
//     );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Blog from './pages/Blog/Blog';
// import Gallery from './pages/Gallery/Gallery';
// import Contact from './pages/Contact/Contact';
// import './App.css';

// function App() {
  
//     return (
//         <Router>
//             <Navbar />
//             <div className="content-container">
//                 <Home />
//                 <About />
//                 <Blog />
//                 <Gallery />
//                 <Contact />
//             </div>
//         </Router>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="content-container">
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="blog">
                    <Blog />
                </section>
                <section id="gallery">
                    <Gallery />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
        </Router>
    );
}

export default App;
