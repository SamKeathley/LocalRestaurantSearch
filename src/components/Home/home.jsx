import React, {useEffect, useState} from 'react';

import styles from './home.css';

const Home = () => {

    const [ownerSelected, setOwnerSelected] = useState(false);
    const [foodieSelected, setFoodieSelected] = useState(false);
    const ownerFunc = () => {
        setOwnerSelected(!ownerSelected)
    }
    const foodieFunc = () => {
        setFoodieSelected(!foodieSelected)
    }


    return (
        
        <div className = 'main-view'
            style = {styles}
        >
        <div className='logo' style = {styles}>
        </div>
        <div style = {{
            display: "flex",
            flexDirection: 'column',
            padding: '15px'
        }}>
            <h1>FIND A LOCAL RESTAURANT IN YOUR AREA</h1>
            <h2>We are helping local businesses!</h2>  
        </div>
        <div style = {{
            display: "flex",
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "center"
        }}>
        <div className = {ownerSelected ? 'owner-selected': 'owner'} style = {styles} onClick = {ownerFunc}>
            <p className='title'> Join us as an Owner!</p>
        </div>
        <div className = {foodieSelected ? 'foodie-selected' : 'foodie'} style = {styles} onClick = {foodieFunc}>
            <p className='title'> Join us as a Foodie!</p>
        </div>
        </div>
        </div>
    );

};

export default Home;

