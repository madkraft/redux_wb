import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators.js'
import Main from './Main'

function mapStateToProps (state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)