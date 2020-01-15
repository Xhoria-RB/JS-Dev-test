import React, { Component } from 'react';
import remove from 'lodash/remove';

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
    this.updateContact = (id, data) => {
      const arrUsers = this.state.users
      const index = arrUsers.findIndex(el => el.id === id);
      arrUsers[index] = { ...arrUsers[index], ...data };
      this.setState({ users: arrUsers })

    }

    this.deleteContact = (id) => {
      const arrUsers = this.state.users;
      remove(arrUsers, (el) => el.id === id);
      this.setState({ users: arrUsers });
    }

  }

  render() {
    return (
      <UserContext.Provider value={{
        state: this.state.users,
        fillUsers: this.fillUsers,
        addContact: this.addContact,
        updateContact: this.updateContact,
        deleteContact: this.deleteContact
      }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContext;
export { UserProvider };
