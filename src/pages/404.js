import React from 'react';
import { Link } from 'gatsby';

const NotFound = () => (
  <div
    style={{
      padding: '2rem'
    }}
  >
    <h1>Uh oh!</h1>
    <p>You're lost :(</p>
    <Link to="/">Go home</Link>
  </div>
)

export default NotFound;
