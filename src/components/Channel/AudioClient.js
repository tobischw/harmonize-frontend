import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AudioClient extends React.Component {
    componentDidMount() {
        console.log("Mounted audio client.");

        // TODO: Start audio context here.
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => {
    return {
      client: state.client
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
  