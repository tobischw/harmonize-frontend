import React from "react";
import Sound from "react-sound"

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AudioClient extends React.Component {
    componentDidMount() {
        console.log("Mounted audio client.");
        // TODO: Start audio context here.
    }

    render() {
        return <Sound playFromPosition={this.props.timecode} />;
    }
}

const mapStateToProps = state => {
    return {
        timecode: state.sync.timecode
    };
};
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        /*toggleThemeMode: checked => toggleThemeMode(checked)*/
      },
      dispatch
    );
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AudioClient);
  