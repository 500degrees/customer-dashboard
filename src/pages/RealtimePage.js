import React from 'react';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { subscribeToTimer, subscribeDatabaseChanges } from '../shared/realtime';
import { Typography } from '@material-ui/core';
export class RealtimePage extends React.Component {

    state = {
        timer: new Date(),
        stats: [],
    }

    componentDidMount() {
        // this.props.startRealtime();
        subscribeToTimer((err, timer) => this.setState({ timer: new Date(timer) }));
        subscribeDatabaseChanges((err, change) => {
            console.log('Received Stat', change);
            const entries = [change.fullDocument, ...this.state.stats];
            this.setState({ stats: entries });
        });
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: 25 }}>Realtime ({this.state.timer.toLocaleTimeString()})</div>
                {this.state.stats.map(stat => (
                    <Paper style={{ marginBottom: 15, padding: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
                        {stat.player ? 
                            <div>{`${stat.player.firstName}${stat.player.lastName ? ' ' + stat.player.lastName : ''}`} score a {stat.stat.name}</div> :
                            <div>{stat.team.name} team score a {stat.stat.name}</div>
                        }
                        <Typography variant="subtitle1">{stat.createdAt}</Typography>
                        </div>
                    </Paper>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RealtimePage);
