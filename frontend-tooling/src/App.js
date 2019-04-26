import React from 'react';
import Header from './Header';
import cowsay from 'cowsay-browser';
import faker from 'faker';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    // Jerome - when the state changes, the component re-renders
    this.state = {
        content: '',
        option: ''

    };

  }

  handleCowSay = () => {
      this.setState({
          content: cowsay.say({
              text: faker.lorem.words(10),
              cow: '',
              eyes: 'oo',
              T: ';;',
              f: 'mutilated.cow'
          })
      })
  }

  handleMenu = () => {
      this.setState((previousState) => {
          return {
              cowfile: previousState.cowfile,
          }
      })
  }


      render()
      {
          return <main>
              <Header/>
              <pre>{this.state.content}</pre>
              <button onClick={this.handleCowSay}>Click Me</button>
              <select>
                  <option onClick={this.handleMenu} value="cow">Cow</option>
              </select>
          </main>
      }

  }

  // TODO - work on the menu that enables you to change the type of cowfile currently being used
