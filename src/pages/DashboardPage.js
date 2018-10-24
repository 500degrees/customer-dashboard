import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

export class DashboardPage extends React.Component {

  render() {
    return (
      <div>
          <Typography variant="h6">Dashboard Page</Typography>
      </div>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
