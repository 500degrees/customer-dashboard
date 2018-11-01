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
            // console.log('Received Stat', change);
            if (change && change.fullDocument && change.operationType === 'insert' && change.fullDocument._id) {
                const entries = [change.fullDocument, ...this.state.stats];
                this.setState({ stats: entries });
            }
        });
    }

    render() {
        const { stats } = this.state;
        const validStats =  stats.filter(s => s && s._id);
        return (
            <div>
                <div style={{ marginBottom: 25 }}>Realtime ({this.state.timer.toLocaleTimeString()})</div>
                {validStats.map(stat => (
                    <Paper key={stat._id} style={{ marginBottom: 15, padding: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
                            {stat.player ? 
                                <Typography variant="subtitle1">{`${stat.player.firstName}${stat.player.lastName ? ' ' + stat.player.lastName : ''}`} - {stat.stat.name}</Typography> :
                                <Typography variant="subtitle1">{stat.team.name} team - {stat.stat.name}</Typography>
                            }
                            <Typography variant="subtitle1">{(new Date(stat.createdAt)).toLocaleString()}</Typography>
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
