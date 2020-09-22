import React, {useState, useEffect, Fragment} from 'react';
import { Container, Header } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';
import {Route} from 'react-router-dom'
import { HomePage } from '../../features/home/HomePage';

const App = () => {

  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivities, setselectedActivities] = useState<IActivity | null>(null);

  const handleSelectActivity = (id:string) =>{
    setselectedActivities(activities.filter(a=>a.id === id)[0]);
    setEditMode(false);
  }

  const [editMode, setEditMode] = useState(false);

  const openHandleCreateForm = () => {
    setselectedActivities(null);
    setEditMode(true);
  }

  const handleCreateActivity =(activity : IActivity) => {
      agent.Activities.create(activity).then (() => {
        setActivities([...activities, activity]);
        setselectedActivities(activity);
        setEditMode(false);
    });
  }

  const handleEditActivity = (activity : IActivity) =>{
    agent.Activities.update(activity).then(() => {
      setActivities([...activities.filter(a=>a.id !== activity.id), activity]);
      setselectedActivities(activity);
      setEditMode(false);
    })
    
  }
  const handleDeleteActivity = (id : string) =>{
    setActivities([...activities.filter(a=>a.id !== id)]);
  } 

  useEffect(() =>{
    agent.Activities.list()     
        .then((response) =>{        
          let activities1 : IActivity[] = [];
          response.forEach((activity) =>{
            activity.date = activity.date.split('.')[0];
            activities1.push(activity);
          })
         setActivities(activities1);        
        });
      },[]);

    return (
      <Fragment>    
      <NavBar openHandleCreateForm = {openHandleCreateForm}></NavBar>     
      <Container style={{marginTop:'10em'}}>
        <Route>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/activities' component={()=>(<ActivityDashboard activities = {activities} 
        selectActivities = {handleSelectActivity}
        selectedActivities = {selectedActivities}
        editMode = {editMode}
        setEditMode = {setEditMode} 
        setselectedActivities = {setselectedActivities}
        createActivity = {handleCreateActivity}
        editActivity = {handleEditActivity}
        deleteActivity = {handleDeleteActivity}
        ></ActivityDashboard>)}></Route>


        </Route>
      {/* <ActivityDashboard activities = {activities} 
        selectActivities = {handleSelectActivity}
        selectedActivities = {selectedActivities}
        editMode = {editMode}
        setEditMode = {setEditMode} 
        setselectedActivities = {setselectedActivities}
        createActivity = {handleCreateActivity}
        editActivity = {handleEditActivity}
        deleteActivity = {handleDeleteActivity}
        ></ActivityDashboard> */}
      </Container>   
     
      </Fragment>
    );
}

export default App;
