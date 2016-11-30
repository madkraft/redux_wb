import React, { Component } from 'react'

export default class Comments extends Component {
  constructor () {
    super()
  }

  renderComment (comment, i) {
    return (
      <div className='comment' key={i}>
        <strong className='user'>{comment.user}: </strong>
        <span className='commentText'>{comment.text}</span>
        <button>&times;</button>
      </div>
    )
  }

  submitHandler (self, event) {
    event.preventDefault()
    const {postId} = self.props.params
    const author = self.refs.author.value
    const comment = self.refs.comment.value
    
    self.props.addComment(postId, author, comment)
    self.refs.commentForm.reset()
}

  render () {
    const {postComments} = this.props
    
    // refactor refs!!!!
    
    return (
      <div>
        {postComments.map(this.renderComment)}
        <form ref='commentForm' onSubmit={this.submitHandler.bind(null, this)}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}
