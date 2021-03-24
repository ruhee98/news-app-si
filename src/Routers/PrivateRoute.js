import React from "react";
import {useAuth} from '../firebase/AuthProvider'
import {Route, Redirect} from 'react-router-dom';
import HeaderComponent from "../Header/header";


export const PrivateRoute = ({component: HeaderWithProfile, ...rest}) => {
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
                // <HeaderComponent {...routeProps} />
                <Redirect to={"/"} />
            )
            }
        }
       
        />
    )

}