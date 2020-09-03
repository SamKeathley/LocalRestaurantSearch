import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { BsArrowRight } from 'react-icons/bs';
import styles from './home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const [ownerSelected, setOwnerSelected] = useState(false);
    const [foodieSelected, setFoodieSelected] = useState(false);

    const ownerFunc = () => {
        if (!foodieSelected) {
            setOwnerSelected(!ownerSelected)
        }
    }
    const foodieFunc = () => {
        if (!ownerSelected) {
            setFoodieSelected(!foodieSelected)
        }

    }

    return (

        <div className='main-view'
            style={styles}
        >
            <div className='logo' style={styles}>
            </div>
            <div style={{
                display: "flex",
                flexDirection: 'column',
                padding: '25px'
            }}>
                <h2>FIND A LOCAL RESTAURANT IN YOUR AREA</h2>
                <h3>We are helping local businesses!</h3>
            </div>
            <div style={{
                display: "flex",
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div className={ownerSelected ? 'owner-selected' : 'owner'} style={styles} onClick={ownerFunc}>
                    <Link to="/form" style={{ textDecoration: "none" }}><p className='title'> Join us as an Owner!</p></Link>
                </div>
                <div className={foodieSelected ? 'foodie-selected' : 'foodie'} style={styles} onClick={foodieFunc}>
                    <p className='title'> Join us as a Foodie!</p>
                </div>
            </div>
            <IconContext.Provider value={{ color: "orange", className: "arrow" }}>
                <div>
                    <BsArrowRight />
                </div>
            </IconContext.Provider>
        </div >
    );

};

export default Home;

