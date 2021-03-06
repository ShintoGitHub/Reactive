import React from 'react'
import { Button, Card,Image } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps{
    activity : IActivity;
    setEditMode : (editMode : boolean) => void;
    setselectedActivities : (activity : IActivity | null) => void;
}

export const ActivityDetails : React.FC<IProps> = ({activity, setEditMode,setselectedActivities}) => {
    return (
        <div>
            <Card>
                <Image src={'/assets/CategoryImages/${activity.category}.png' }></Image>
                <Card.Content>
                    <Card.Header>{activity.title}</Card.Header>
                    <Card.Meta>
                        <span>{activity.date}</span>
                    </Card.Meta>
                    <Card.Description>
                        {activity.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group width={2}>
                        <Button onClick = {() => setEditMode(true)} basic color = 'blue' content ='Edit'></Button>
                        <Button onClick ={() => setselectedActivities(null)} basic color = 'green' content ='Cancel'></Button>
                    </Button.Group>
                </Card.Content>
            </Card>
        </div>
    )
}
