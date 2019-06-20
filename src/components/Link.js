import React from 'react';

class Link extends React.Component {
  render(){
    return (
      <li>
        <a href="#">{this.props.textLink}</a>
      </li>
    )
  }
}

export default Link