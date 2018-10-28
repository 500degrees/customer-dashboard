import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import { onFetchDashboardData } from '../actions';
import TotalsCharts from './components/TotalsCharts';
import DailyUsersChart from './components/DailyUsersChart';
import _ from 'lodash';

const todaySDate = new Date();

export class DashboardPage extends React.Component {

  state = {
    startDate: new Date(todaySDate.getFullYear(), todaySDate.getMonth(), todaySDate.getDate(), 0, 0, 0, 0),
    endDate: new Date(todaySDate.getFullYear(), todaySDate.getMonth(), todaySDate.getDate(), 23, 59, 59, 999),
  }

  handleDateChange = propName => (date) => {
    this.setState({ [propName]: date });
    this.props.fetchData(this.state.startDate.toISOString(), this.state.endDate.toISOString());
  }

  componentDidMount() {
    this.props.fetchData(this.state.startDate.toISOString(), this.state.endDate.toISOString());
  }

  render() {
    const { startDate, endDate } = this.state;
    const { data } = this.props;
    const dailyChartData = _.sortBy(data.dailyUsers, [d => new Date(d.dateTime)]);
    const chartData = data && data.totals && data.totals.totalTeams ? [
      { name: "Users", value: data.totals.totalCoaches },
      { name: "Teams", value: data.totals.totalTeams },
      { name: "Players", value: data.totals.totalPlayers },
      { name: "Games", value: data.totals.totalGames },
      { name: "Stats", value: data.totals.totalStats },
    ] : [];
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
          label="to"
          onChange={this.handleDateChange('endDate')}
        />
        <TotalsCharts data={chartData} />
        <DailyUsersChart data={dailyChartData}/>
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
