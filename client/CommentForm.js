import React from 'react';
import ReactDOM from 'react-dom';
import ImagesUploader from 'react-images-uploader';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const comment = {
      email: data.get('email'),
      userId: '5a8ab436726aea287ca8280b',
      text:data.get('text'),
      type: this.props.type,
      parentId: this.props.parent
    }
    fetch('/api/comments', {
      method: 'POST',
      headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     },
      body: ("json", JSON.stringify( comment )),
    }).then(this.props.callback())
    .catch(error => console.error(error));

}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="long">Longitude</label>
      <input id="email" name="email" type="email" />
        <textarea id="text" name="text" />
        <button>Share</button>
      </form>
    );
  }
}
