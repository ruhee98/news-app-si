import  React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../Body/HomePage';
import {Categories} from '../Body/Categories';
import { topStories } from '../Body/TopStories';
import NYTNews from '../Body/PopularStories';
import SignUp from '../Body/SignUp';
import Login from '../Body/Login';
import {AuthProvider} from '../firebase/AuthProvider'
import {PrivateRoute} from "./PrivateRoute";
import { ProfilePage } from '../Body/ProfilePage';
import { ForgotPasswordPage} from '../Body/ForgotPasswordPage';
import { UpdateProfile} from '../Body/UpdateProfile';
import {ReadingList} from '../Body/ReadingList';
const AppRouter = () => {

  return (
    <Fragment>
      <div className="container">
    <BrowserRouter>
        <br />
        <AuthProvider>
        <Switch>
          <PrivateRoute path="/" component={HomePage} exact={true} />
          <Route path="/latest" component={topStories} />
          <Route path="/nyt-news" component={NYTNews} />
          <Route path="/topics" component={Categories} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/passwordReset" component={ForgotPasswordPage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/saved-articles" component={ReadingList} />
        </Switch>
        </AuthProvider>
        
  </BrowserRouter>
  </div>
    </Fragment>

  );
};

export default AppRouter;