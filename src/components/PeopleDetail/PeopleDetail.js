import React, { Component } from 'react';
import peoplesApi from 'api/starwars';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { Link } from 'react-router';


class PeopleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {},
    }
  }
  async componentDidMount() {
    this.initialFetch();

  }
  async initialFetch() {
    if (!this.state.people) return this.setState({ loading: false });
    console.dir(this.state.people)
    const people = await peoplesApi.find(this.props.id);
    
    this.setState({
      people,
      loading: false,
    });
  }
  render(){
    return(
      <div>
        <h1>{this.state.people.name}</h1>  
        <Panel>
          <p><b>Gender:</b> {this.state.people.gender}</p>
          <p><b>Hair color:</b> {this.state.people.hair_rolor}</p>
          <p><b>Eye Color:</b> {this.state.people.eye_color}</p>
          <p><b>Link:</b> <a href={this.state.people.url}>{this.state.people.url}</a></p>
          <p><b>Films links:</b></p>



          
        </Panel>

      </div>

    );

  }
}

export default PeopleDetail;
