import React from 'react';
import { Button, TextField, withStyles, Typography, Paper } from "@material-ui/core";

const styles = theme => ({
    container: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        padding: theme.spacing.unit * 2,
    },
    formContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    textField: {
      marginRight: theme.spacing.unit,
      width: 200,
    },
    actionsContainer: {
        display: 'flex',
        flexDirection: 'row',
    }
});

export class TransferForm extends React.Component {
    state = {
        email: '',
      };
    
      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    render() {
        const { onCleanAccount, onTransferAccount, classes } = this.props;
        return (
            <Paper className={classes.container} >
                <form className={classes.formContainer} noValidate autoComplete="off">
                    <Typography variant="caption">Manual Transfer</Typography>
                    <TextField
                        id="email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                    />
                    <div className={classes.actionsContainer}>
                        <Button onClick={onCleanAccount(this.state.email)}>Clean</Button>
                        <Button onClick={onTransferAccount(this.state.email)}>Transfer</Button>
                    </div>
                </form>
            </Paper>
        )
    }
}

export default withStyles(styles)(TransferForm);
