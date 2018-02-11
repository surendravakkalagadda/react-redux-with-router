import React,{Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {saveUser} from '../actions';

class Home extends Component {

  constructor(props) {

    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName : ""
      }
    };
  }

  handleSubmit(e){
    e.preventDefault();
  }
  handleRegistercick() {
    this.props.saveUser(this.state.user);
    this.props.history.push("/about");
  }

  handleChange(e) {
   let {name, value} = e.target;
   let user = Object.assign({}, this.state.user);
    if (name ==="firstName") {
      user.firstName=value;
    }
    if (name ==="lastName") {
      user.lastName=value;
    }
     this.setState({user});
  }

  render() {
    return (
      <div>
        <div>Registration Page</div>
        <br/><br/>
        <form onSubmit={() => this.handleSubmit}>
          First NAme :<input name="firstName" value={this.state.user.firstName} onChange={this.handleChange.bind(this)} type="text"/><br/>
          First NAme :<input name="lastName"  value={this.state.user.lastName} onChange={this.handleChange.bind(this)} type="text"/><br/><br/>
          <button onClick={this.handleRegistercick.bind(this)} type="submit">Register</button>

        </form>
      </div>
    );

  }
}

export default withRouter(connect('',{saveUser})(Home));
