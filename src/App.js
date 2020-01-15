import React from 'react';
import Button from '@material-ui/core/Button'
import NavBar from './Components/Navbar'
import ContactTable from './Components/ContactTable'


function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Contacts</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <ContactTable />
    </div>
  );
}

export default App;
