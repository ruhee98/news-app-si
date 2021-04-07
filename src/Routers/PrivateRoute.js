import React from "react";
import {useAuth} from '../firebase/AuthProvider'
import {Route, Redirect} from 'react-router-dom';


export const PrivateRoute = ({component: HeaderWithProfile, HeaderComponent, ...rest}) => {
    const {currentUser} = useAuth();

    return (
        <Route
        //takes all rest of the props of routes
        {...rest}
        //checks if the route has current user
        render={routeProps => {
            return currentUser ? (
                <HeaderWithProfile {...routeProps} />

            ) : (
                <Redirect to={"/"} />
            )
            }
        }
       
        />
    )

}