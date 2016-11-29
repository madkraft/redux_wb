import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

export default class Single extends Component {
  render() {
    const { posts, params, comments } = this.props
    const i = posts.findIndex(post => post.code === params.postId)
    const post = posts[i]
    const postComments = comments[params.postId] || []

    return (
      <div>
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
}
