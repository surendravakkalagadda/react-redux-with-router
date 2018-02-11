import React, {Component} from "react";
import Home from "./home";
//import {withRouter} from 'react-router';

class Root extends Component{



    render(){

        return(
            <div>
              <br/><br/>
              {this.props.children}
            </div>
        );
    }
}

export default Root;
