import React from 'react';
import { connect } from 'react-redux';
import { subscribeToTimer, subscribeDatabaseChanges } from '../shared/realtime';
export class RealtimePage extends React.Component {

    state = {
        timer: new Date(),
        change: null
    }

    componentDidMount() {
        // this.props.startRealtime();
        subscribeToTimer((err, timer) => this.setState({ timer: new Date(timer) }));
        subscribeDatabaseChanges((err, change) => {
            console.log(change);
            this.setState({ change })
        });
    }

    render() {
        return (
            <div>
                <div>Realtime ({this.state.timer.toLocaleTimeString()})</div>
                <pre>{JSON.stringify(this.state.change, null, 2)}</pre>
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RealtimePage);
