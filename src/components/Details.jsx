import React from "react";


function Details(params) {
    return <div>
        <p className="info">{params.phone}</p>
        <p className="info">{params.email}</p>
    </div>
}

export default Details