import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h2>
            <Link to='/'>Redux!</Link>
        </h2>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
