import React from 'react';
import TicketCard from './TicketCard';

const TicketsContainer = ({ tickets }) => {
  console.log('tickets', tickets);
  return (
    <div>
      {tickets.map(t => (
        <TicketCard key={t._id} ticket={t}/>
      ))}
    </div>
  )
}

export default TicketsContainer;