import React from "react";


function Card(params) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <h2 className="name">{params.name}</h2>
                    <img className="circle-img" src={params.img} alt="test_img"></img>
                </div>
                <div className="bottom">
                    <div className="info">
                        <p>{params.phone}</p>
                        <p>{params.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card