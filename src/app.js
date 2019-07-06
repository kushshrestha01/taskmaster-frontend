import React, {useState, useEffect} from 'react';
import './app.scss';

import mockData from './mock.json';
console.log(mockData);

function People(){
  
  const [people, setPeople] = useState([]);
  const _getPeople = () =>{
    setPeople(mockData)
    //fetch from backend
  };

  useEffect(_getPeople,[]);
  return(
    <ul>
      {people.map( (person) => 
        <li key={person.id}>
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

function Detail() {
return(
  <div>Task Details</div>
)
}

function App() {
  return (
    <>
      <header>List of All Tasks Available in Database</header>
      <main>
        <People/>
      </main>
      <footer>copy 2019</footer>
    </>
  );
}

export default App;
