import React from 'react';
import './style.css';
import resumeFile from './Sushil-Budha-Resume.pdf';
import resumeImage from '../../assets/Resume.jpg';

const Resume = () => {
    return (
        <div className="resume_container">
            <div className="iframe_container">
                <iframe
                    src={resumeImage}
                    title="Resume"
                    className="resume_viewer"
                ></iframe>
            </div>
            <a href={resumeFile} download="Sushil_Budha_Resume.pdf" className="download_button">
                Download Resume
            </a>
        </div>
    );
}

export default Resume;
