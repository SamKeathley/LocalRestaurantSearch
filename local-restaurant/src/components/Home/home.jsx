import React, {useEffect, useState} from 'react';
import Figure from 'react-bootstrap/Figure';
import customer from '../../assets/customer.svg';
import business from '../../assets/shop.svg';
import styles from './home.css';

export default function Home(props) {

    return (
        <div className = 'main-view'

            style = {{
                display: 'flex',
                flexDirection : "row",
                alignItems: 'center',
                justifyContent: 'center'
                
            }}
        >
        <Figure>
            <Figure.Image
            width = '20%'
            height = '20%'
            src = {customer}
             />
             <Figure.Caption>
                 Customer
             </Figure.Caption>
        </Figure>
        <Figure>
            <Figure.Image
             src = {business}
             />
             <Figure.Caption>
                 Business
             </Figure.Caption>
        </Figure>
        </div>
    );

};

