import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
import NavBar from 'components/NavBar/NavBar'
import peoples from 'api/starwars';
import { Grid, Row, Col } from 'react-bootstrap';
import People from 'components/People/People';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      peoples: [],
      loading: true,

    };

  }

  async componentDidMount() {
    this.initialFetch();

  }
  async initialFetch() {
    if (!this.state.peoples) return this.setState({ loading: false });
    const news = await peoples.get();
    
    this.setState({
      news,
      page: this.state.page + 1,
      loading: false,
      // poly,
    });
  }
  render() {
    return (
      <div>
        <NavBar />
        <Grid>
          <Row className="show-grid">
            <Col sm={3}>      
            </Col>
            <Col sm={6}>
              {this.state.peoples.map(people =>
                (<People
                  key={people.name}                  
                  name={people.name}
                  gender={people.gender}
                  hairColor={people.hair_color}
                  eyeColor={people.eye_color}
                  url={people.url}

                />))}      
            </Col>
            <Col sm={3}>      
            </Col>
          </Row>
        </Grid>

      </div> 

    );
  }
}

export default App;
