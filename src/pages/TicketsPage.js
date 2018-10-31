import React from 'react';
import { connect } from 'react-redux';
import TicketsContainer from './components/TicketsContainer';
import TransferForm from './components/TransferForm';
import { onFetchTickets, onAccountClean, onAccountTransfer, onCloseTicket } from '../actions';

export class TicketsPage extends React.Component {

  componentDidMount() {
    this.props.fetchTickets();
  }

  cleanAccount = email => async () => {
    this.props.cleanAccount(email);
  }

  transferAccount = email => async () => {
    this.props.transferAccount(email);
  }

  closeTicket = id => async () => {
    // console.log('Closing ticket', id);
    this.props.closeTicket(id);
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
  message: state.tickets.message,
  token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
  fetchTickets: () => dispatch(onFetchTickets()),
  cleanAccount: (email) => dispatch(onAccountClean(email)),
  transferAccount: (email) => dispatch(onAccountTransfer(email)),
  closeTicket: (id) => dispatch(onCloseTicket(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsPage);
