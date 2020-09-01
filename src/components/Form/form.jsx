import React from 'react';

export default function Form() {
    return (
        <div className="container">
            <form>
                <input
                    name="rName"
                    placeholder="Restaurant Name"
                />
                <input
                    name="rAddress"
                    placeholder="Restaurant Address"
                />
                <input
                    name="oName"
                    placeholder="Owner Name"
                />
                <input
                    name="oEmail"
                    placeholder="Owner Email"
                />
                <input
                    name="phone"
                    placeholder="Phone Number"
                />
                <input
                    name="fType"
                    placeholder="Type of Cuisine"
                />
            </form>
        </div>

    );
}