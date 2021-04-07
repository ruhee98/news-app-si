import  React, {Fragment, createContext} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import {Categories} from '../components/Categories';
import NYTNews from '../components/NYTNews';
import SignUp from '../components/UserLogin/SignUp';
import Login from '../components/UserLogin/Login';
import {AuthProvider} from '../firebase/AuthProvider'
import {PrivateRoute} from "./PrivateRoute";
import { ProfilePage } from '../components/UserLogin/ProfilePage';
import { ForgotPasswordPage} from '../components/UserLogin/ForgotPasswordPage';
import { UpdateProfile} from '../components/UserLogin/UpdateProfile';
import SavedList from '../components/SavedList';
import { AppProvider } from '../components/Context';


const AppRouter = () => {

  return (
    <Fragment>
      <div className="container">
    <BrowserRouter>
        <br />
        <AuthProvider>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/nyt-news" component={NYTNews} />
          <Route path="/topics" component={Categories} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/passwordReset" component={ForgotPasswordPage} />
          <PrivateRoute path="/" component={HomePage} exact={true} />
          <AppProvider>
          <PrivateRoute path="/nyt-news" component={NYTNews} />
          <PrivateRoute path="/topics" component={Categories} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/saved-articles" component={SavedList} />
          </AppProvider>
        </Switch>
        </AuthProvider>
        
  </BrowserRouter>
  </div>
    </Fragment>

  );
};

export default AppRouter;