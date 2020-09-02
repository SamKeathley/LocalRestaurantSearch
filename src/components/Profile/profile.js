import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './profile.css';

export default function Profile() {


    return (
        <div className="body">
            <Container className="foodImages">
                <Row>
                    <Col sm={4}>
                        <img src={require("../../assets/960x0.jpg")} alt="" />
                    </Col>
                    <Col sm={4}>
                        <img src={require("../../assets/dish3.png")} alt="" />
                    </Col>
                    <Col sm={4}>
                        <img src={require("../../assets/nonfeatured-traditional-mexican-foods.jpg")} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={4}>
                        <h1>Restaurant Name </h1>
                    </Col>

                </Row>
            </Container>

            <Container>
                <Row>
                    <Col sm={1}>
                        <p>open</p>
                    </Col>
                    <Col sm={2}>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </Col>

                    <Col sm={6}>

                    </Col>

                    <Col sm={3}>
                        <p>Phone: (415)-974-6112</p>
                    </Col>

                </Row>
            </Container>

            <Container>
                <Row>
                    <Col sm={2}>
                        <p>Thai, Asian, Spicy</p>
                    </Col>

                    <Col sm={7}>
                    </Col>

                    <Col sm={3}>
                        <p>Website: restaurant.com</p>
                    </Col>

                </Row>
            </Container>

            <Container>
                <Row>
                    <Col sm={2}>
                        <p>11:00 AM - 5:00 PM</p>
                    </Col>

                </Row>
            </Container>

            <Container>
                <Row>
                    <Col sm={2}>
                        <button variant="outline-primary" className="contactButtons">Link Button</button>
                    </Col>

                    <Col sm={2}>
                        <button variant="outline-primary" className="contactButtons">Link Button</button>
                    </Col>

                    <Col sm={2}>
                        <button variant="outline-primary" className="contactButtons">Link Button</button>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col sm={6}>
                        <div id="map" className="blackMapClass"></div>

                        <script async defer
                            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDjWfWoYtAhvc6i9C4V5SekngUKeyXOYoc
        &callback=initMap">
                        </script>
                    </Col>

                    <Col sm={6}>
                        <div className="scrollable">
                            <h1>Comments </h1>
                            <li>Comment 1</li>
                            <li>Comment 1</li>
                        </div>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}