import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Contacts from './contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      {id: 1, firstName: 'bob', phone: '8012345678'},
      {id: 2, firstName: 'kelly', phone: '9874536512'},
      {id: 3, firstName: 'alex', phone: '5673487223'}
    ]
  }

  render() {
    const { contacts } = this.state
    return (
      <Container>
        <Header as='h1'>React Contact List</Header>
        <Contacts contacts={contacts} />
      </Container>
    );
  }
}

export default App;
