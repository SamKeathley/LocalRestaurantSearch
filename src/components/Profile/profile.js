import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './profile.css';

export default function Profile() {


    return (
        <div className="body">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <img src={require("../../assets/960x0.jpg")} alt="" />
                    </div>

                    <div className="col-sm-4">
                        <img src={require("../../assets/dish3.png")} alt="" />
                    </div>

                    <div className="col-sm-4">
                        <img src={require("../../assets/nonfeatured-traditional-mexican-foods.jpg")} alt="" />
                    </div>



                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h1>Restaurant Name </h1>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-1">
                        <p>open</p>
                    </div>
                    <div className="col-sm-2">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>

                    <div className="col-sm-6">

                    </div>

                    <div className="col-sm-3">
                        <p>Phone: (415)-974-6112</p>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <p>Thai, Asian, Spicy</p>
                    </div>

                    <div className="col-sm-7">
                    </div>

                    <div className="col-sm-3">
                        <p>Website: restaurant.com</p>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <p>11:00 AM - 5:00 PM</p>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <p href="#" className="contactButtons">Link Button</p>
                    </div>

                    <div className="col-sm-2">
                        <p href="#" className="contactButtons">Link Button</p>
                    </div>

                    <div className="col-sm-2">
                        <p href="#" className="contactButtons">Link Button</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">

                        <div id="map" className="blackMapClass"></div>

                        <script async defer
                            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDjWfWoYtAhvc6i9C4V5SekngUKeyXOYoc
        &callback=initMap">
                        </script>
                    </div>

                    <div className="col-sm-6">
                        <div className="scrollable">
                            <h1> Comments </h1>
                            <li>Comment 1</li>
                            <li>Comment 1</li>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}