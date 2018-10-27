import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Header from '../shared/components/Header';
import { drawerWidth } from '../shared/constants';
import SecretRoute from '../shared/components/SecretRoute';
import TicketsPage from './TicketsPage';
import DashboardPage from './DashboardPage';
import SideMenu from './components/SideMenu';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    overflowY: 'auto',
  },
});

export class MainPage extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  navigate = route => () => {
    this.props.history.push(route);
  }

  render() {
    const { classes, theme, loading } = this.props;

    return (
      <div className={classes.root}>
        <Header open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} loading={loading} />
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <SideMenu navigate={this.navigate} />
          </List>
        </Drawer>
        <LinearProgress />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <SecretRoute path="/tickets" component={TicketsPage} />
            <SecretRoute path="/dashboard" component={DashboardPage} />
            <SecretRoute path="/" component={DashboardPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.status.openRequests > 0
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(MainPage));
