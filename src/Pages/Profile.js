import React, { useEffect } from 'react'
import { Switch, useHistory, Link, Route, useRouteMatch } from 'react-router-dom'
import ViewProfile from '../components/ViewProfile'
import EditProfile from '../components/EditProfile'

const Profile = ({ login }) => {
    const history = useHistory()
    useEffect(() => {
        if (!login) {
            history.push('/')
        }
    }, [login, history])

    const { path, url } = useRouteMatch()

    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li>
                    <Link to={`${url}/viewProfile`}>View Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/editProfile`}>Edit Profile</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${path}/viewProfile`} component={ViewProfile} />
                <Route path={`${path}/editProfile`} component={EditProfile} />
            </Switch>

        </div>
    )
}

export default Profile
