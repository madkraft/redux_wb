import React, { Component } from 'react'
import Photo from './Photo'

export default class PhotoGrid extends Component {
  componentDidMount () {
    this.props.fetchPhotoes()
  }

  render() {
    return (
      <div>
        <h2>
            PhotoGrid
        </h2>
        <hr/>
        { this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />) }
      </div>
    );
  }
}
