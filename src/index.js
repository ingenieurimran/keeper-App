import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import Card from './components/Card';
import Contacts from './components/Contacts';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <div>
    {/* <App /> */}
    <h1 className='heading'>My Contact</h1>
    <Card
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
    />
  </div >
);

