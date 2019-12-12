import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import Sidebar from "../components/Sidebar";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
    height: "100%"
  },
  backdrop: {
    boxSizing: "border-box",
    position: "fixed",
    zIndex: -1,
    width: "100%",
    height: "100%",
    backgroundImage: "url('https://m.media-amazon.com/images/I/51NLJmj8YqL._SS500_.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "blur(50px) grayscale(45%)"
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing.unit * 9,
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit,
    marginTop: theme.spacing.unit * 0,
    overflowX: "hidden"
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

class MainLayout extends Component {
  state = {
    open: false
  };

  handleToggleDrawer = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    const { classes, children } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <div className={classes.backdrop}></div>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: this.state.open
            })}
          >
            {children}
          </main>
        </div>
        <Sidebar open={this.state.open} drawerWidth={drawerWidth} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(MainLayout);
