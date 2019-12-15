import React from "react";
import classNames from "classnames";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import AlbumArt from "../components/Channel/AlbumArt";
import Link from '@material-ui/core/Link';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import AudioClient from "../components/Channel/AudioClient";

import { connect } from "react-redux";

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

    return (
        <Grid container className={classes.root}>
          <Grid container>
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
          <Grid container alignContent="center" style={{height: "100%"}}>
            <Grid item xs={5}>
              <AudioClient />
              <AlbumArt title={props.song.title} artist={props.song.artist} art={props.song.art} withControls />
            </Grid>
            <Grid item xs={7}>
            </Grid>
          </Grid>
        </Grid>
    );
};

const mapStateToProps = state => {
  return {
    song: state.sync.song
  };
};

export default connect(
  mapStateToProps
)(withStyles(styles)(Channel));