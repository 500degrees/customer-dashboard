import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CastIcon from '@material-ui/icons/Cast';
import DashboardIcon from '@material-ui/icons/DashboardOutlined'

export default ({ navigate }) => {
    return (
        <div>
            <ListItem button onClick={navigate('dashboard')}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={navigate('tickets')}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Tickets" />
            </ListItem>
            <ListItem button onClick={navigate('realtime')}>
                <ListItemIcon>
                    <CastIcon />
                </ListItemIcon>
                <ListItemText primary="Realtime" />
            </ListItem>
        </div>
    )
}