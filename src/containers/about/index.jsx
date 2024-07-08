import React from "react";
import './style.css';
import profileImage from '../../assets/profile.jpg';
import codingImage from '../../assets/coding.jpeg';
import courses from '../../assets/courses.jpg';

const AboutMe = () => {
    return (
        <div className="about_me_container">
            <section className="section profile_section">
                <div className="profile_info">
                    <h1>Sushil Budha</h1>
                    <p>Freshly graduated with a Bachelor's degree in Computer Science Engineering.</p>
                    <p>Aspiring web developer with skills in front-end development including HTML, CSS, JavaScript, React.js.</p>
                    <p>Proficient in typing and enthusiastic about learning new technologies. 🚀</p>
                    <p>Currently seeking internship opportunities to gain valuable experience. 💼</p>
                </div>
                <img src={profileImage} alt="Profile" className="profile_image slide_in" />
            </section>

            <section className="section">
                <h2>Passion for Coding</h2>
                <div className="content_with_image">
                    <img src={codingImage} alt="Coding" className="coding_image" />
                    <div className="content_info">
                        <p>Passionate about coding and software development.</p>
                        <p>Always striving to improve skills and learn new technologies.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Courses and Skills</h2>
                <div className="content_with_image">
                    <img src={courses} alt="Web Development" className="webdev_image" />
                    <div className="content_info">
                        <p>Completed several courses related to web development, including:</p>
                        <ul>
                            <li>Web Development and its Application</li>
                            <li>Object Oriented Concepts</li>
                            <li>Data Structure and Analysis</li>
                            <li>Database Management System</li>
                            <li>System Software</li>
                            <li>Computer Network and Security</li>
                            <li>Cloud Computing</li>
                            <li>Mobile Application Development</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;
