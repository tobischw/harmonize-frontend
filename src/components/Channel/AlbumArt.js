import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { withRouter } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

import { Link, NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: theme.spacing.unit * 64,
        width:  theme.spacing.unit * 48
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
        width: "100%",
        height: "100%"
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

const AlbumArt = props => {
    const { open, classes } = props;
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image="https://m.media-amazon.com/images/I/51NLJmj8YqL._SS500_.jpg"
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        An Awesome Wave
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Alt-J
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        <SkipPreviousIcon />
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        <SkipNextIcon />
                    </IconButton>
                </div>
            </div>
        </Card>
    );
};

export default withRouter(withStyles(styles)(AlbumArt));