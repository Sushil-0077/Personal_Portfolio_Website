import React from "react";
import './style.css';
import profile from '../../assets/profile.jpg'
const Home = () => {
    return (
        <div className="main_container">
            <div className="information">
                <h1>PERSONAL DETAILS</h1>
                <h3>NAME: SUSHIL BUHDA</h3>
                <h3>AGE: 23</h3>
                <h3>GENDER: MALE</h3>
                <h3>PHONE: 9866774354</h3>
                <h3>PERMANENT ADDRESS: GOTHIGAUN, JUMLA, NEPAL</h3>
                <h3>CURRENT ADDRESS: NEW BANESHWOR, KATHMANDU</h3>
            </div>
            <div className="pic">
                <img src={profile} alt="Profile" />
            </div>
        </div>
    );
}

export default Home;
