import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    card: {
        minWidth: 275,
        marginBottom: 7,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export class RealtimePage extends React.Component {

    render() {
        const { classes, stats } = this.props;
        return (
            <div>
                {stats.map((stat, idx) => {
                    return (<Card key={idx} className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {stat.title} - {stat.statLabel}
                            </Typography>
                            <Typography variant="subtitle1">{(new Date(stat.entryDate)).toLocaleString()}</Typography>
                            <Typography variant="subtitle1">{stat.coach}</Typography>
                            <Typography variant="h5" component="h2">
                                {stat.address || ''}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/place/${stat.address}`}>Google Maps</a>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stats: state.realtime.all
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RealtimePage));
