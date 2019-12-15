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
import { bindActionCreators } from "redux";
import { joinChannel } from "../store/actions";
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

class Channel extends React.Component {
    componentWillReceiveProps(nextProps) {
      // If no channel is initialized, try to join a channel.
      if(nextProps.connected && nextProps.channelId === -1) {
        this.props.joinChannel(0, 0);
      }
    }

    render() {
      const { open, classes } = this.props;
      return (
        <Grid container className={classes.root}>
          <AudioClient />
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
              <AlbumArt title={this.props.song.title} artist={this.props.song.artist} album={this.props.song.album} art={this.props.song.art} withControls />
            </Grid>
            <Grid item xs={7}>
            </Grid>
          </Grid>
        </Grid>
      );
    }
};

const mapStateToProps = state => {
  return {
    song: state.sync.song,
    connected: state.connection.connected,
    channelId: state.sync.channelId
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      joinChannel: (channelId, userId) => dispatch(joinChannel(channelId, userId))
    },
    dispatch
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Channel));