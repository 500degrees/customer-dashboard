import React from 'react';
import TicketCard from './TicketCard';

const TicketsContainer = ({ tickets, cleanAccount, transferAccount, closeTicket }) => {
  return (
    <div>
      {tickets.map(t => (
        <TicketCard key={t._id} ticket={t} cleanAccount={cleanAccount(t._id)} transferAccount={transferAccount(t._id)} closeTicket={closeTicket(t._id)} />
      ))}
    </div>
  )
}

export default TicketsContainer;