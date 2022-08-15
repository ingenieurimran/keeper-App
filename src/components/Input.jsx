import React from "react";

const Input = (params) => (
    <div>
        {<input type={params.text} placeholder={params.placeholder} />}
    </div>
)

export default Input