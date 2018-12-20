import React, { Component } from 'react';
import Spinner from './spinner';

export default propName => ChildComponent => {
  return class hocLoader extends Component {

    isPropsEmpty = () => {
      return this.props[propName].length;
    };

    loaderComponent = () => {
      if (!this.isPropsEmpty()) return <div><Spinner/></div>
    };

    render() {
      return (
        <div>
          <ChildComponent {...this.props}/>
          {this.loaderComponent()}
        </div>
      )
    }
  }
}

// const wrappedDataComparison = preloadHOC('data')(DataComparison);
// export default connect(mapStateToProps, mapDispatchToProps)(wrappedDataComparison);
