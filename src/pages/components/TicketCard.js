import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    marginBottom: 15
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
};

function TicketCard({ classes, ticket, cleanAccount, transferAccount, closeTicket }) {
  return (
    <Card className={classes.card}>
      <CardContent>
        {ticket.createdAt}
        <Typography color="textSecondary" gutterBottom variant="h6">
          <a href={`mailto:${ticket.email}`}>{ticket.email}</a>
        </Typography>
        <Typography component='p' variant="subtitle1">
          {ticket.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={cleanAccount}>Cleanup Account</Button>
        <Button size="small" onClick={transferAccount}>Transfer Account</Button>
        <Button size="small" onClick={closeTicket}>Close Ticket</Button>
      </CardActions>
    </Card>
  );
}

TicketCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicketCard);
