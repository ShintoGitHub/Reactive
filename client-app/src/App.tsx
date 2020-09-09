import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Header } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'

class App extends Component {

  state={
    values:[]
  } 

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
        .then((response) =>{
         // console.log(response);
          this.setState({
            values:response.data
          })
        })    
  }

  render(){
    return (
      <div>
      <Header as='h2' icon='users' content='Reactivities' />        
      <List>
        {this.state.values.map((value : any) =>(
              <li key={value.id}>{value.name}</li>
            ))}
      </List>
      </div>
    );
  }

  
}

export default App;
