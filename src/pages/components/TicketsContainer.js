import React from 'react';
import TicketCard from './TicketCard';

const TicketsContainer = ({ tickets, cleanAccount, transferAccount, closeTicket }) => {
  return (
    <div>
      {tickets && tickets.length > 0 ? tickets.map(t => (
        <TicketCard key={t._id} ticket={t} cleanAccount={cleanAccount(t.email)} transferAccount={transferAccount(t.email)} closeTicket={closeTicket(t._id)} />
      )) : <div>No tickets... :)</div>}
    </div>
  )
}

export default TicketsContainer;