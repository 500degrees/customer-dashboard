import React from 'react';
import { connect } from 'react-redux';
import { getTickets, closeTicket } from '../shared/tickets';
import { clean, transfer } from '../shared/accounts';
import TicketsContainer from './components/TicketsContainer';
import TransferForm from './components/TransferForm';
import { onFetchTickets } from '../actions';

export class TicketsPage extends React.Component {

  componentDidMount() {
    console.log('Fetching tickets');
    this.props.fetchTickets();
  }

  async reloadTickets() {
    if (this.props.token && this.props.token.length > 10) {
      try {
        const tickets = await getTickets(this.props.token);
        this.setState({ tickets });
      } catch (e) {
        this.setState({ message: 'Error retrieving tickets. Please contact administrator' });
      }
    }
  }

  cleanAccount = email => async () => {
    if (this.props.token && this.props.token.length > 10) {
      try {
        console.log('clean account', email);
        this.props.onLoadingUpdate(true);
        await clean(this.props.token, email);
        this.setState({ message: `${email} data cleaned` });
      } catch (e) {
        this.setState({ message: `Error cleaning account for "${email}"` });
      }
      this.props.onLoadingUpdate(false);
    }
  }

  transferAccount = email => async () => {
    if (this.props.token && this.props.token.length > 10) {
      try {
        console.log('transfer account', email);
        this.props.onLoadingUpdate(true);
        await transfer(this.props.token, email);
        this.setState({ message: `${email} data transfered` });
      } catch (e) {
        this.setState({ message: `Error transfering account for "${email}"` });
      }
      this.props.onLoadingUpdate(false);
    }
  }

  closeTicket = id => async () => {
    if (this.props.token && this.props.token.length > 10) {
      try {
        this.props.onLoadingUpdate(true);
        await closeTicket(this.props.token, id);
        await this.reloadTickets();
      } catch (e) {
        this.setState({ message: 'Error closing ticket' });
      }
      this.props.onLoadingUpdate(false);
    }
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: 20 }}>{this.props.message}</div>
        <TransferForm onCleanAccount={this.cleanAccount} onTransferAccount={this.transferAccount} />
        <TicketsContainer
          tickets={this.props.tickets}
          cleanAccount={this.cleanAccount}
          transferAccount={this.transferAccount}
          closeTicket={this.closeTicket} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets.all,
  message: state.tickets.error,
});

const mapDispatchToProps = dispatch => ({
  fetchTickets: () => dispatch(onFetchTickets())
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsPage);