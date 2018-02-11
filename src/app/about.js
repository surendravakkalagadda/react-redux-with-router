import React,{Component} from 'react';
import {connect} from 'react-redux';

class About extends Component {

  render() {
    if (this.props.user) {
      return (
        <div>
        <div>FirstName : {this.props.user.firstName}</div>
        <div>Last Name : {this.props.user.lastName}</div>
        </div>
      );
    }
    return (
      <div>About Page</div>
    );

  }
}

function mapStateToProps(state) {
    return {
       user : state.user
    }
}
export default connect(mapStateToProps)(About);
