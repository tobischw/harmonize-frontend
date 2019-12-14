import React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import Avatar from '@material-ui/core/Avatar';
import {withRouter} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

import { Link, NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: "fixed",
    top: 0,
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  }
});

const Sidebar = props => {
  const { open, classes } = props;
  const { pathname } = props.location;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(
          classes.drawerPaper,
          classes.drawerPaperClose
        )
      }}
      open={open}
    >
      <List>
        <Link to="/">
          <ListItem button selected={ pathname === '/'  }>
            <ListItemIcon>
            <Avatar alt="CAOS" src="https://i1.sndcdn.com/avatars-000112634876-re19sl-t500x500.jpg" className={classes.avatar} />
            </ListItemIcon>
            <ListItemText primary="CAOS" />
          </ListItem>
        </Link>
        <Link to="/c2">
          <ListItem button>
            <ListItemIcon>
            <Avatar alt="CoolGang" src="https://yt3.ggpht.com/a/AGF-l7-F3yoiNOeKfZInROvXMbsVtRk0dAhleblQeg=s900-c-k-c0xffffffff-no-rj-mo" className={classes.avatar} />
            </ListItemIcon>
            <ListItemText primary="CAOS" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/setting">
          <ListItem button selected={ pathname === '/setting'  }>
            <ListItemIcon >
              <SettingsIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default withRouter(withStyles(styles)(Sidebar));
