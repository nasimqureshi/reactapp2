import React from 'react';
import ReactDOM from 'react-dom';
const firstName = "Nasimuddin"
const lastName =   "Qureshi"


ReactDOM.render(
  <>
  <h1>My name is {firstName} {lastName}</h1>
  <p><h2>Here are some of my favourit Movies</h2></p>
  <ol>
    <li>English Movies</li>
    <li>Indian Movies</li>
    <li>Pakistani Movies</li>
    <li>Feature Movies</li>
    <li>Travel Movies</li>
    
  </ol>
  </>
  ,document.getElementById('root')
);



