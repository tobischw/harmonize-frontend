import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { withRouter } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

import { Link, NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        textAlign: 'center'
    },
    cover: {     
        display: 'flex',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: theme.spacing,
        paddingBottom: theme.spacing
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    votable: {
        background: 'rgba(97, 97, 97, 0.5)',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        zIndex: 5
    }
});

const AlbumArt = props => {
    const { open, classes } = props;
    return (
        <Card className={classes.card} elevated>
            <CardMedia
                className={classes.cover}  
                title="Live from space album cover">
                <img src={props.art} width="100%" />
                { props.votable &&
                <div className={classes.votable}>
                    <ThumbUpIcon fontSize="large" />
                </div>
                }
            </CardMedia>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        { props.title }
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        { props.artist } • { props.album }
                    </Typography>
                </CardContent>
                { props.withControls &&
                <div className={classes.controls}>
                    <IconButton aria-label="thumb-down">
                        <ThumbDownIcon />
                    </IconButton>
                    <IconButton aria-label="mute">
                        <VolumeMuteIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="thumb-up">
                        <ThumbUpIcon />
                    </IconButton>
                </div>
                }
            </div>
        </Card>
    );
};

export default withRouter(withStyles(styles)(AlbumArt));
