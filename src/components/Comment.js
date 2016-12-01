import React from 'react'

export default class Comment extends React.Component {
  clickHandler (index) {
    const {postId} = this.props.params
    this.props.removeComment(postId, index)
  }
  
  render () {
    const { comment, index }  = this.props
    return (
      <div className='comment'>
        <strong className='user'>{comment.user}: </strong>
        <span className='commentText'>{comment.text}</span>
        <button onClick={this.clickHandler.bind(this, index)}>&times;</button>
      </div>
    )
  }
}
