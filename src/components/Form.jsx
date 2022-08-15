import React from "react";


const Form = (params) => (
    <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {!params.isRegister && <input type="password" placeholder="Confirm Password" />}
        <button type="submit">
            {params.isRegister ? "Login" : "Register"}
        </button>
    </form>
)

export default Form;