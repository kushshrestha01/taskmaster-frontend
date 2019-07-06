import React from 'react';
import Description from './description.js';
import Assignee from './assignee.js';

// https://reactjs.org/docs/faq-ajax.html
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('http://taskmaster.us-east-2.elasticbeanstalk.com/task')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
      {items.map( (item) => 
        <li id={item.status} key={item.id}>
          <details>
            <summary>
              <span>Task Title: {item.title}</span>
            </summary>
            <div>
              <span>Task Status: {item.status}</span>
              <Description description={item.description}/>
              <Assignee assignee={item.assignee}/>
            </div>
          </details>
        </li>
        )}
    </ul>
      );
    }
  }
}