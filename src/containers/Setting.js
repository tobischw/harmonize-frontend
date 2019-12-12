import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import PaletteIcon from "@material-ui/icons/Palette";
import Divider from '@material-ui/core/Divider';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { toggleThemeMode } from "../store/reducers/settings";

const Settings = props => (
  <div>
    <Typography variant="h4" gutterBottom>Settings</Typography>
    <Divider style={{marginBottom: 10 }}/>
    <Card>
      <CardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <PaletteIcon />
            </ListItemIcon>
            <ListItemText primary="Dark Mode" />
            <ListItemSecondaryAction>
              <Switch
                onChange={(e, checked) => props.toggleThemeMode(checked)}
                checked={props.settings.darkMode}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  </div>
);

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleThemeMode: checked => toggleThemeMode(checked)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
