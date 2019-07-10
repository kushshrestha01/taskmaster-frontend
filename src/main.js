import React from 'react';
import Description from './description.js';
import Assignee from './assignee.js';


// https://reactjs.org/docs/faq-ajax.html
// https://www.fullstackreact.com/articles/deploying-a-react-app-to-s3/

// const API = 'http://taskmaster.us-east-2.elasticbeanstalk.com/task';
const API = 'http://localhost:5000/task'

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
    fetch( API, {
      mode:'cors',
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        
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
        <div>
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
                  <img alt="" width="150" src={`${item.pic}` }></img>
                  <img alt="" src={`${item.resized}` }></img>
                  {console.log("pic" + item.pic)}
                  {console.log("resized" + item.resized)}
                </div>
                <div className="App" id={item.pic}>
                  <form action={`${API}/${item.id}/images`} method="post" encType="multipart/form-data">
                    <label>
                      <span>Upload Image</span>
                      <input name="file" type="file" />
                    </label>
                    <button>Save</button>
                  </form>
                </div>

              </details>
            </li>
          )}
      </ul>
    </div>
      );
    }
  }
}