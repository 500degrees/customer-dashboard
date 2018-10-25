import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import { onFetchDashboardData } from '../actions';

const todaySDate = new Date();

export class DashboardPage extends React.Component {

  state = {
    startDate: new Date(todaySDate.getFullYear(), todaySDate.getMonth(), todaySDate.getDate(), 0, 0, 0, 0),
    endDate: new Date(todaySDate.getFullYear(), todaySDate.getMonth(), todaySDate.getDate(), 23, 59, 59, 999),
  }

  handleDateChange = propName => (date) => {
    this.setState({ [propName]: date });
    this.props.fetchData(this.state.startDate, this.state.endDate);
  }

  componentDidMount() {
    this.props.fetchData(this.state.startDate, this.state.endDate);
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
