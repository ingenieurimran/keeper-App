import React from "react";

function Footer() {
    const date = new Date().getFullYear()
    return (<div className="footer">
        <h1>Copyright {<i class="fa-regular fa-copyright"></i>} {date}</h1>
    </div>)
}
export default Footer