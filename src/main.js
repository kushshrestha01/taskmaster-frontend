import React, {Component, Fragment} from 'react';
import {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import mockData from './mock.json';

const API = 'http://taskmaster.us-east-2.elasticbeanstalk.com/task'

function Main(){
  
  const [people, setPeople] = useState([]);

  const _getPeople = () =>{
    // setPeople(mockData)
    //fetch from backend
    console.log(API);
    fetch ( API, {
      mode:'cors',
    })
  };

  useEffect(_getPeople,[]);
  return(
    <ul>
      {people.map( (person) => 
        <li id={person.status} key={person.id}>
          <details>
            <summary>
              <span>Task Title: {person.title}</span>
            </summary>
            <div>
              <span>Task Status: {person.status}</span>
              <Description description={person.description}/>
              <Assignee assignee={person.assignee}/>
            </div>
          </details>
        </li>
        )}
    </ul>
  )
}

function Description(props){
  let description = props.description || [];
  return(
    <section>
      <div>
        <span>Description: {description}</span>
      </div>
    </section> 
  )
};

function Assignee(props){
  let assignee = props.assignee || [];
  return(
    <section>
      <div>
        <span>Assigned to: {assignee}</span>
      </div>
    </section> 
  )
};

export default Main;
