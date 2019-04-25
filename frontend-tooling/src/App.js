import React from 'react';
import Header from './Header';
import { say } from 'cowsay-browser';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    // this.state.content = 'I am not sure what to do here';
  }


  handleCowSay = () => {
      console.log(say({text: 'generate something in the browser'}));
      }

      render()
      {
          return (

              <main>
                  <Header/>
                  {/*<p>The content is: {this.state.content}</p>*/}
                  <button onClick={this.handleCowSay}>Click Me</button>
                  {/*<button>Click Me</button>*/}
              </main>
          )
      }
}

