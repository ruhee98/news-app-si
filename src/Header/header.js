import React, {useRef, useEffect} from 'react';
import styles from './styles';


class HeaderComponent extends React.Component {

    render(){
        return(
           <div>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">News Aggregator</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/latest">Latest</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/popular">Most Popular</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/categories" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/categories/entertainment">Entertainment</a></li>
            <li><a class="dropdown-item" href="/categories/tech">Technology</a></li>
            <li><a class="dropdown-item" href="#">Business</a></li>
            <li><a class="dropdown-item" href="#">Politics</a></li>
            <li><a class="dropdown-item" href="#">Reviews</a></li>
          </ul>
          
        </li>
        
      </ul>
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>

            </div>
           
        )
    }
}



export default HeaderComponent;