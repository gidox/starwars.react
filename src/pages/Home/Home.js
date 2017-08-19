import React, { Component } from 'react';
import peoplesApi from 'api/starwars';
import { Grid, Row, Col } from 'react-bootstrap';
import People from 'components/People/People';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [],
      loading: true,

    };

  }

  async componentDidMount() {
    this.initialFetch();

  }
  async initialFetch() {
    if (!this.state.people) return this.setState({ loading: false });
    const people = await peoplesApi.get();
    console.log(people);
    this.setState({
      people,
      page: this.state.page + 1,
      loading: false,
      // poly,
    });
  }
  render() {
    return (
      <div>       
        
        <Grid>
          <Row className="show-grid">
            <Col sm={1}>      
            </Col>
            <Col sm={10}>
              {this.state.loading && (
                <b className="text-center">Loading...</b>
              )}
              {this.state.people.map((people, index) =>
                (
                  <Col sm={3}>
                    <People
                    id={index}
                    key={people.name}                  
                    name={people.name}
                    gender={people.gender}
                    hairColor={people.hair_color}
                    eyeColor={people.eye_color}
                    url={people.url}
                  
                    />
                  </Col>
                ))}      
                  
            </Col>
            <Col sm={1}>      
            </Col>
          </Row>
        </Grid>

      </div> 

    );
  }
}

export default Home;
