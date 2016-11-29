import React, { Component } from 'react'

export default class Comments extends Component {
  submitHandler (event) {
    event.preventDefault()
    console.log(event)
    console.log(this.refs)
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

  render () {
    const {postComments} = this.props

    return (
      <div>
        {postComments.map(this.renderComment)}
        <form ref='commentForm' onSubmit={this.submitHandler}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}
