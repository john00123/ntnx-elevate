import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderPortal from './Header.js'
import {Card} from './Card.js'
import {SideBar} from './Sidebar.js'
import {PageLayout}from './PageLayout.js'
import {Deck}from './Deck.js'




class App extends Component {

  render() {
    return (
      <div>
        <HeaderPortal/>
        <PageLayout>
          <SideBar/>
          <Deck>
            <Card name='this.state.name'/>
            <Card name='Vanjie'/>
            <Card name='Vanjie'/>
            <Card name='Vanjie'/>
          </Deck>
        </PageLayout>

      </div>
    );
  }
}

export default App;
