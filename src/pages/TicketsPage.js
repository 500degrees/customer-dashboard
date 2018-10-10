import React from 'react';
import { getTickets, closeTicket } from '../shared/tickets';
import TicketsContainer from './components/TicketsContainer';

export class TicketsPage extends React.Component {

  state = {
    tickets: []
  };

  componentDidMount() {
    this.reloadTickets()
  }

  async reloadTickets() {
    const tickets = await getTickets();
    this.setState({ tickets });
  }

  cleanAccount = id => () => {
    console.log('clean account', id);
  } 
  
  transferAccount = id => () => {
    console.log('transfer account', id);
  }  
  
  closeTicket = id => async () => {
    this.props.onLoadingUpdate(true);
    console.log('close account', id);
    await closeTicket('123', id);
    this.reloadTickets();
    this.props.onLoadingUpdate(false);
  } 

  render() {
    return (
      <div>
        <TicketsContainer tickets={this.state.tickets} cleanAccount={this.cleanAccount} transferAccount={this.transferAccount} closeTicket={this.closeTicket}/>
      </div>
    )
  }
}

export default TicketsPage;