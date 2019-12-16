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
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

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
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    voteGrid: {
      justifyContent: 'space-around',
      overflow: 'hidden',
      padding: theme.spacing
    },
    songTile: {
      height: 'inherit'
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
                ShureGang
              </Link>
              <Link
                color="textPrimary"
                href="/components/breadcrumbs/"
                aria-current="page"
              >
                cool
              </Link>
            </Breadcrumbs>
          </Grid>
          <Grid container alignContent="center" height="100%" spacing={5}>
            <Grid item xs={4} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <AlbumArt title={this.props.song.title} artist={this.props.song.artist} album={this.props.song.album} art={this.props.song.art} withControls />
            </Grid>
            <Grid item xs={7} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className={classes.voteGrid}>
              <GridList height="100%" className={classes.gridList} cols={2.3} spacing={20} cellHeight="auto" style={{padding: 20}}>
                { 
                [...Array(6)].map((e, i) => 
                  <GridListTile height="100%" className={classes.songTile} boxShadow={1}>
                    <AlbumArt title={this.props.song.title} artist={this.props.song.artist} album={this.props.song.album} art={this.props.song.art} votable />
                  </GridListTile>
                )}
              </GridList>
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
    channelId: state.sync.channelId,
    timecode: state.sync.timecode,
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