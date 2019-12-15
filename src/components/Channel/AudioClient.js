import React from "react";
import Sound from "react-sound"

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AudioClient extends React.Component {
    componentDidMount() {
        console.log("Mounted audio client.");

        // Send hello packet

    }
    
    render() {
        return <Sound url={this.props.source} playFromPosition={this.props.timecode} playStatus={this.props.playStatus}/>;
    }
}

const mapStateToProps = state => {
    return {
        timecode: state.sync.timecode,
        source: state.sync.song.source,
        playStatus: state.sync.playStatus
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
  