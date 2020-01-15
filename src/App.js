import React from 'react';
import NavBar from './Components/Navbar';
import CreateContact from './Components/CreateContact';
import ContactTable from './Components/ContactTable';


function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Contacts</h1>
      <CreateContact />
      <ContactTable />
    </div>
  );
}

export default App;
