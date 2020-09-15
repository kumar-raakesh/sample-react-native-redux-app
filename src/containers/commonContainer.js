import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from './../actions';
export default function CommonContainer(ComposedComponent) {
  class CommonContainer extends React.Component {
    render() {
      console.log('Container called', this.props);
      debugger;
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      commonReducer: state.commonReducer,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ActionCreators, dispatch),
    };
  }
  return connect(mapStateToProps, mapDispatchToProps)(CommonContainer);
}
