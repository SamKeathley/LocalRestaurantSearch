import React, { useState } from 'react';
import './form.css';

export default function Register() {
    const [contact, setContact] = useState({
        rname: "",
        address: "",
        oname: "",
        email: "",
        phone: "",
        ftype: ""
    });

    function handleChange(event) {
        const { value, name } = event.target;

        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });

        event.preventDefault();
    }

    return (
        <div className="container">
            <form className="registration">
                <input
                    className="rname"
                    name="rname"
                    onChange={handleChange}
                    value={contact.rname}
                    placeholder="Restaurant Name"
                />
                <input
                    name="address"
                    onChange={handleChange}
                    value={contact.address}
                    placeholder="Restaurant Address"
                />
                <input
                    name="oname"
                    onChange={handleChange}
                    value={contact.oname}
                    placeholder="Owner Name"
                />
                <input
                    name="email"
                    onChange={handleChange}
                    value={contact.email}
                    placeholder="Owner Email"
                />
                <input
                    name="phone"
                    onChange={handleChange}
                    value={contact.phone}
                    placeholder="Phone Number"
                />
                <input
                    className="ftype"
                    name="ftype"
                    onChange={handleChange}
                    value={contact.ftype}
                    placeholder="Type of Cuisine"
                />
                <input className="submit" type="submit" value="Submit" />
            </form>
        </div>

    );
}