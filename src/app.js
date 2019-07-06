import React, {Fragment} from 'react';
import './app.scss';
import Footer from './footer.js';
import Header from './header.js';
import Main from './main.js';

function App() {
  return (
    <Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </Fragment>
  );
}

export default App;
