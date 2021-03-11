import React from 'react';

import {Link} from 'react-router-dom';

const newsByCategory = ({match}) => (
    <div>
     <ul>
       <li>
        <Link to={`${match.url}/business`}>Business</Link>
      </li>
      <li>
        <Link to={`${match.url}/entertainment`}>Entertainment</Link>
       </li>
     <li>
       <Link to={`${match.url}/tech`}>Technology</Link>
      </li>
    </ul>
    </div>
);

export default newsByCategory;