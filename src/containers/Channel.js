import React from "react";
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import AlbumArt from "../components/Channel/AlbumArt";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Link from '@material-ui/core/Link';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const styles = theme => ({
    root: {
      display: 'flex',
      height: '90%'
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    breadcrumbs: {
      fontSize: 32
    }
});

const Channel = props => {
    const { classes } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Grid container className={classes.root}>
          <Grid container xs={12}>
            <Breadcrumbs separator="›" className={classes.breadcrumbs} aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Cool Gang
              </Link>         
              <Link
                color="textPrimary"
                href="/components/breadcrumbs/"
                aria-current="page"
              >
                indie
              </Link>
            </Breadcrumbs>
          </Grid>
          <Grid container xs={12} alignContent="center" style={{height: "100%"}}>
            <Grid item xs={5}>
              <AlbumArt title="California Halo Blue" artist="AWOLNATION" withControls />
            </Grid>
            <Grid item xs={7}>
              
            </Grid>
          </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Channel);