import React from 'react';
import './Gallery.css';

// Importing images (replace with your actual image paths)
import ceo from '../../images/ceo.jpg';
import cofounder from '../../images/cofounder.jpg';
import manager from '../../images/manager.jpg';
import director from '../../images/director.jpg';

const teamMembers = [
    {
        name: 'John Doe',
        position: 'CEO',
        image: ceo,
        description: 'John has over 20 years of experience in the industry and leads the company with a vision for innovation.',
        blog: 'John recently spoke about the future of technology in a keynote address at the Tech Innovators Conference.'
    },
    {
        name: 'Jane Smith',
        position: 'Co-Founder',
        image: cofounder,
        description: 'Jane co-founded the company and brings her extensive knowledge in business development and strategy.',
        blog: 'Jane shared her insights on startup growth and sustainability in her latest blog post on the company website.'
    },
    {
        name: 'Michael Brown',
        position: 'Manager',
        image: manager,
        description: 'Michael manages our operations with a focus on efficiency and customer satisfaction.',
        blog: 'Michael discussed the importance of operational excellence in a recent interview with Business Weekly.'
    },
    {
        name: 'Emily Davis',
        position: 'Director',
        image: director,
        description: 'Emily directs our marketing efforts, ensuring our brand reaches the right audience with impactful messages.',
        blog: 'Emily highlighted key marketing strategies for 2024 in her latest article in Marketing Today.'
    },
];

const Gallery = () => {
    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <p>Meet our company member.</p>
            <div className="gallery__container">
                {teamMembers.map((member, index) => (
                    <div className="gallery__card" key={index}>
                        <img src={member.image} alt={member.name} className="gallery__image" />
                        <div className="gallery__details">
                            <h3>{member.name}</h3>
                            <h4>{member.position}</h4>
                            <p>{member.description}</p>
                            <blockquote>{member.blog}</blockquote>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

