import React from "react";


const Note = params => (
    <div className="note">
        <h1>{params.title}</h1>
        <p>{params.content}</p>
    </div>
)

export default Note