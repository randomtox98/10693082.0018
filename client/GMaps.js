import React from 'react';
import ReactDOM from 'react-dom';

export default class GMaps extends React.Component {
  constructor(props) {
      super(props);
  };

componentDidMount() {
  this.refs.iframe.addEventListener('load', this.props.onLoad);
}

render(){
  var mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAQlD_VOPO-MPtsaVRurb7wroYqOMghQWQ&q=${this.props.lat},${this.props.long}`;
  return <iframe id="mapCanvas" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
  src={mapSrc}
  ref="iframe" width={this.props.width} height={this.props.height}/>;
}
};
