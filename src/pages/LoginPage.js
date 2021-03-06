import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { onLogin } from '../actions';
import { LinearProgress } from '@material-ui/core';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: '',
  }

  siginIn = e => {
    e.preventDefault();
    this.props.requestLogin(this.state.email, this.state.password);
  }

  updateField = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  }

  render() {
    const { classes, location, loggedIn, loading } = this.props;
    const { from } = location.state || { from: { pathname: "/" } };
    if (loggedIn) {
      return <Redirect to={from} />;
    }
    return (
      <React.Fragment>
        <CssBaseline />
        {loading ? <LinearProgress /> : null}
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={this.siginIn}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={this.updateField('email')} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.updateField('password')}
                />
              </FormControl>
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.siginIn}
              >
                Sign in
            </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    )
  }
}

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  loading: state.status.openRequests > 0
});

const mapDispatchToProps = dispatch => ({
  requestLogin: (email, password) => dispatch(onLogin(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginPage));
