import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

interface IProps {
    openHandleCreateForm: () => void;
}

export const NavBar :React.FC<IProps> = ({openHandleCreateForm}) => {
    return (
        <div>
        <Menu fixed = 'top' inverted>
            <Container>
                <Menu.Item header as={NavLink} exact to = '/'>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight:'10px'}}></img>
                </Menu.Item>
                <Menu.Item name='Activities' as= {NavLink} to = '/activities'/>
                <Menu.Item >
                   <Button onClick = {openHandleCreateForm} positive content="Create Activity"></Button>
                </Menu.Item>
            </Container>         
        </Menu>
        </div>
    )
}
