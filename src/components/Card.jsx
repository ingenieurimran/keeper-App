import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(params) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <p>{params.id}</p>
                    <h2 className="name">{params.name}</h2>
                    <Avatar
                        img={params.img}
                    />
                </div>
                <div className="bottom">
                    <Details
                        phone={params.phone}
                        email={params.email}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card