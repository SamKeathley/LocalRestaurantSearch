import React from 'react';

export default function About() {
    return (
        <div className="container">
            <div className="image"><img src={require("../../assets/Aboutus_background.png")} alt="shop" /></div>
            <div className="blurb">
                <h2>FIND A LOCAL RESTAURANT IN YOUR AREA</h2>
                <h3>We are helping local businesses!</h3>

                <p>During the epidemic, many small local restaurants with a history were unable to continue operating due to stay-at-home orders. Our website is dedicated to helping small and medium size restaurants promote their business. We help restaurant owners to reduce some of their expenses by reducing or exempting fees on intermediate platforms. At the same time, our users will also get a more detailed search map of local restaurants.</p>
            </div>

        </div>
    )
}