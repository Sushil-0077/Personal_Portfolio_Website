import React, { useState } from "react";
import './style.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form submission logic here, e.g., sending data to server

        // Clear the form fields after submission
        setFormData({
            name: "",
            email: "",
            message: ""
        });

        // Show success message or perform other actions
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Reset submitted state after 3 seconds
    };

    return (
        <div className="contact_container">
            <h1>Contact Me</h1>
            <form className="contact_form" onSubmit={handleSubmit}>
                <div className="form_group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form_group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form_group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send Message</button>
                {submitted && (
                    <div className="success_message">Message sent successfully!</div>
                )}
            </form>
            <div className="social_media">
                <h2>Connect with me</h2>
                <a href="https://www.facebook.com/sushil0077" target="_blank" rel="noopener noreferrer" className="social_media_link">
                    <FaFacebook size={30} />
                </a>
                <a href="https://www.instagram.com/budha_sushil/" target="_blank" rel="noopener noreferrer" className="social_media_link">
                    <FaInstagram size={30} />
                </a>
                <a href="https://www.linkedin.com/in/sushil-budha-993834283/" target="_blank" rel="noopener noreferrer" className="social_media_link">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </div>
    );
}

export default Contact;
