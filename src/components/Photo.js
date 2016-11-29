import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Photo extends Component {
    render () {
        const { post, i, comments } = this.props

        return (
            <div>
                <Link to={`/view/${post.code}`}>
                    <img src={post.display_src} alt={post.caption} className='photo' />
                </Link>
                
                <figcaption>
                    <p>{ post.caption }</p>
                    <button onClick={this.props.increment.bind(null, i)} >&hearts; { post.likes }</button>
                    <Link to={`/view/${post.code}`}>
                        <span>Comments: { comments[post.code] ? comments[post.code].length : 0 }</span>
                    </Link>
                </figcaption>
            </div>
        )
    }
}
