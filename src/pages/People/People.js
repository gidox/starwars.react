import React, { Component } from 'react';
import PeopleDetail from 'components/PeopleDetail/PeopleDetail';

class People extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {}
  }
  render(){
    return(
      <PeopleDetail id={this.props.params.id}/>


    );

  }
}

export default People;
