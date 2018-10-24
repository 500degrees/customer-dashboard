import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import { onFetchDashboardData } from '../actions';

export class DashboardPage extends React.Component {

  state = {
    startDate: new Date(),
    endDate: new Date(),
  }

  handleDateChange = propName => (date) => {
    this.setState({ [propName]: date });
    this.props.fetchData(this.state.startDate, this.state.endDate);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { startDate, endDate } = this.state;
    return (
      <div>
        <Typography variant="h6">Dashboard Page</Typography>
        <DateTimePicker
          style={{ marginRight: 25 }}
          value={startDate}
          label="From"
          onChange={this.handleDateChange('startDate')}
        />
        <DateTimePicker
          value={endDate}
          label="From"
          onChange={this.handleDateChange('endDate')}
        />
        <pre>
          {JSON.stringify(this.props.data, 2)}
        </pre>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.dashboard.data
});

const mapDispatchToProps = dispatch => ({
  fetchData: (from, to) => dispatch(onFetchDashboardData(from, to)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
