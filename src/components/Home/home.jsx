import React, { useEffect, useState } from 'react';

import customer from '../../assets/customer.svg';
import business from '../../assets/shop.svg';
import styles from './home.css';
import { Link } from 'react-router-dom';

export default function Home(props) {

    return (
        <div className='main-view'
            style={styles}
        >
            <div style={{
                backgroundColor: '#C4C4C4',
                width: '30%',
                height: '60%',
                borderRadius: 20,
                borderColor: '#000000',
                borderWidth: 5,
                objectFit: 'contain',
                margin: 10,
                aspectRatio: 2

            }}>
                <img src={customer}
                    style={{
                        width: '50%',
                        height: '50%',
                    }}
                    alt='' />
                <p> Join as a foodie</p>
            </div>
            <div style={{
                backgroundColor: '#C4C4C4',
                width: '30%',
                height: '60%',
                borderRadius: 20,
                borderColor: 'black',
                borderWidth: 5,
                objectFit: 'contain',
                margin: 10

            }}>
                <img src={business}
                    style={{
                        width: '50%',
                        height: '50%',
                    }}
                    alt='' />
                <Link to="/form">
                    <p> Join as an owner</p>
                </Link>
            </div>
        </div>
    );

};

