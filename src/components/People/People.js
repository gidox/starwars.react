import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { Link } from 'react-router';

class People extends Component {

  render() {
    return (

      <div>
      <Panel header={this.props.name} bsStyle="primary">
        <p><b>Gender:</b> {this.props.gender}</p>
        <p><b>Hair color:</b> {this.props.hairColor}</p>
        <p><b>Eye Color:</b> {this.props.eyeColor}</p>
        <p><b>Link:</b> <a href={this.props.url}>{this.props.url}</a></p>
        <p className="text-center"><Link to="people/1">More Info</Link></p>


        
      </Panel>

      </div> 

    );
  }
}

export default People;