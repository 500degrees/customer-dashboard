import React from 'react';
import { getTickets, closeTicket } from '../shared/tickets';
import { clean, transfer } from '../shared/accounts';
import TicketsContainer from './components/TicketsContainer';

export class TicketsPage extends React.Component {

  state = {
    tickets: [],
    message: 'Some message'
  };

  componentDidMount() {
    this.reloadTickets()
  }

  async reloadTickets() {
    if (this.props.token && this.props.token.length > 10) {
      const tickets = await getTickets(this.props.token);
      this.setState({ tickets });
    }
  }

  cleanAccount = email => async () => {
    if (this.props.token && this.props.token.length > 10) {
      console.log('clean account', email);
      this.props.onLoadingUpdate(true);
      await clean(this.props.token, email);
      this.props.onLoadingUpdate(false);
      this.setState({ message: `${email} data cleaned`});
    }
  } 
  
  transferAccount = email => async () => {
    if (this.props.token && this.props.token.length > 10) {
      console.log('transfer account', email);
      this.props.onLoadingUpdate(true);
      await transfer(this.props.token, email);
      this.props.onLoadingUpdate(false);
      this.setState({ message: `${email} data transfered`});
    }
  }  
  
  closeTicket = id => async () => {
    if (this.props.token && this.props.token.length > 10) {
      this.props.onLoadingUpdate(true);
      await closeTicket(this.props.token, id);
      await this.reloadTickets();
      this.props.onLoadingUpdate(false);
    }
  } 

  render() {
    return (
      <div>
        <div style={{ marginBottom: 20  }}>{this.state.message}</div>
        <TicketsContainer 
          tickets={this.state.tickets} 
          cleanAccount={this.cleanAccount} 
          transferAccount={this.transferAccount} 
          closeTicket={this.closeTicket} />
      </div>
    )
  }
}

export default TicketsPage;