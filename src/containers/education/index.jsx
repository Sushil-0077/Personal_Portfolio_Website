import React from 'react';
import './style.css';

const educationData = [
    {
        institute_link: 'https://www.facebook.com/EliteSecondaryBoardingSchool/',
        level: 'Class 10',
        result: '3.45/ 4',
        institution: 'Elite English Secondary Boarding School',
        location: 'Surkhet, Nepal',
        location_link:'https://maps.app.goo.gl/grtSVRhqQTtcaGwJ8',
    },
    {
        institute_link: 'https://academy.united.edu.np/',
        level: 'Class 11 & 12',
        result: 'CGPA: 3.07/4',
        institution: 'United Academy',
        location: 'Lalitpur, Nepal',
        location_link:'https://maps.app.goo.gl/qhJ5d9DzgUAs8N8R8',
    },
    {
        institute_link: 'https://atria.edu/home.php',
        level: 'B.Tech in Computer Science',
        result: 'CGPA: 8.2/10',
        institution: 'Atria Institute of Technology',
        location: 'Karnataka, India',
        location_link:'https://maps.app.goo.gl/KFSqVNeAMgYSinPD8',
    },
];

const Education = () => {
    return (
        <div className="education_container">
            <h1 className="education_title">Education</h1>
            <div className="education_content">
                {educationData.map((edu, index) => (

                    <div className="education_card" key={index}>
                        <div className="education_card_inner">
                            <h2 className="education_level">{edu.level}</h2>
                            <p className="education_result">{edu.result}</p>
                            <a className='education_link' href={edu.institute_link}>
                                <p className="education_institution">{edu.institution}</p>
                                </a>
                               <a className='location_links' href={edu.location_link}> 
                               <p className="education_location">{edu.location}</p>
                               </a>
                            


                        </div>
                    </div>


                ))}
            </div>
        </div>
    );
};

export default Education;
