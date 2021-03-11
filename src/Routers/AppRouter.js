import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/header';
import HomePage from '../Body/HomePage';
import { TopStories } from '../Body/TopStories';
import newsByCategory from '../Body/newsByCategory';
import { PopularStories } from '../Body/PopularStories';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/latest"component={TopStories} />
          <Route path="/popular" component={PopularStories} />
          <Route path="/category/categoryName" component={newsByCategory}/>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;