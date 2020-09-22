import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { ActivityDetails } from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'
import ActivityList from './ActivityList'

interface IProps{
    activities:IActivity[];
    selectActivities : (id:string) => void;
    selectedActivities : IActivity | null;
    editMode : boolean;
    setEditMode : (editMode:boolean) => void;
    setselectedActivities : (activity : IActivity | null) => void;
    createActivity : (activity : IActivity) => void;
    editActivity : (activity : IActivity) => void;
    deleteActivity : (id: string) => void;
}

export const ActivityDashboard : React.FC<IProps> = ({activities, 
    selectActivities, 
    selectedActivities,
    editMode,
    setEditMode,
    setselectedActivities,
    createActivity,
    editActivity,
    deleteActivity
    }) => {
    return (
        <div>
            <Grid.Column width={1}>
                <ActivityList 
                activities = {activities} 
                selectActivities = {selectActivities} 
                deleteActivity = {deleteActivity} />           
            </Grid.Column>
            <Grid.Column width={2}>
                {selectedActivities && !editMode && (
                    <ActivityDetails 
                    activity = {selectedActivities} 
                    setEditMode = {setEditMode} 
                    setselectedActivities ={setselectedActivities}/>  
                )}
                { editMode && <ActivityForm setEditMode = {setEditMode} 
                activity = {selectedActivities!} createActivity = {createActivity} 
                editActivity = {editActivity} ></ActivityForm>}
                
            </Grid.Column>
        </div>
    )
}

