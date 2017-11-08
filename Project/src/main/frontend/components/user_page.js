import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserPage } from '../actions';
import Loading from './loading';

class UserPage extends Component {
  componentDidMount() {
    this.props.getUserPage();
  }

  render() {
    if (!this.props.user.data) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else {
      return (
        <div>
        <h1 className="title fade-in">Welcome to kewlkvis {this.props.user.data.name}</h1>
        <Link className="question-title fade-in" to={'/question'} >Click me to get to the fun</Link>
        </div>
      );
    }
  }

}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { getUserPage })(UserPage);
