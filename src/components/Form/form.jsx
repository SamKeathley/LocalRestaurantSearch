import React, { useState } from 'react';

export default function Form() {
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
            <form>
                <input
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
                    name="ftype"
                    onChange={handleChange}
                    value={contact.ftype}
                    placeholder="Type of Cuisine"
                />
                <button>Submit</button>
            </form>
        </div>

    );
}