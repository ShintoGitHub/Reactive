import React from 'react'
import { Button, Item, ItemContent, Label } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps{
    activities:IActivity[]
    selectActivities : (id:string) => void;
    deleteActivity : (id: string) => void;
}

const ActivityList : React.FC<IProps> = ({activities, selectActivities, deleteActivity}) =>{
   
    return (
        <div>
            <Item.Group>
                {activities.map(activity =>                
                     <Item key = {activity.id}>
                     <Item.Content>
                         <Item.Header>{activity.title}</Item.Header>
                         <Item.Meta>{activity.date}</Item.Meta>
                         <Item.Description>
                             <div>{activity.description}</div>
                             <div>{activity.venue}</div>
                         </Item.Description>
                         <Item.Extra>
                             <Button onClick={()=> selectActivities(activity.id)} floated='right' content='View' color='blue'></Button>
                             <Button onClick={()=> deleteActivity(activity.id)} floated='right' content='Delete' color='red'></Button>
                             <Label basic content = {activity.category}></Label>
                         </Item.Extra>
                     </Item.Content>
                 </Item>
                    )};
            </Item.Group>
        </div>
    )
}

export default ActivityList;
