import React, { Component } from 'react';
import './css/App.css';
import HeaderPortal from './components/Header.js'
import {Card} from './components/Card.js'
import {SideBar} from './components/Sidebar.js'
import {PageLayout}from './components/PageLayout.js'
import {Deck}from './components/Deck.js'
import Footer from './components/Footer.js'


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
        <Footer/>

      </div>
    );
  }
}

export default App;
