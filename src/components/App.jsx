import React from "react";
import Login from "./Loging";
const isLoggedIn = true;

const App = () => (
    <div className="container">
        {isLoggedIn ? <h1>Hello</h1> : <Login />}
    </div>
)

export default App;
