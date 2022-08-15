import React from "react";
import Form from "./Form";

const userIsRegistered = false;

const App = () => (
    <div className="container">
        <Form
            isRegister={userIsRegistered}
        />
    </div>
)

export default App;
