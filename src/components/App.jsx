import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";
import Contacts from "./Contacts";
function createCard(contact) {
    return <div>
        <Card
            key={contact.id}
            id={contact.id}
            name={contact.name}
            img={contact.imgUrl}
            phone={contact.phone}
            email={contact.email}
        />
    </div>
}

function App() {
    return <div>
        {Contacts.map(createCard)}
        {/* <Card
            name={Contacts[0].name}
            img={Contacts[0].imgUrl}
            phone={Contacts[0].phone}
            email={Contacts[0].email}
        />
        <Card
            name={Contacts[1].name}
            img={Contacts[1].imgUrl}
            phone={Contacts[1].phone}
            email={Contacts[1].email}
        />
        <Card
            name={Contacts[2].name}
            img={Contacts[2].imgUrl}
            phone={Contacts[2].phone}
            email={Contacts[2].email}
        /> */}
    </div>
}
export default App