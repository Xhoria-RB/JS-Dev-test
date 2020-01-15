import React, { Component } from 'react';

const UserContext = React.createContext({});

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.fillUsers = (data) => {
      this.setState({ ...this.state, users: data })
    }

    this.addContact = (contact) => {
      const holder = this.state.users.concat(contact)
      this.setState({ users: holder })
    }

  }

  render() {
    return (
      <UserContext.Provider value={{
        state: this.state.users, fillUsers: this.fillUsers, addContact: this.addContact
      }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContext;
export { UserProvider };
