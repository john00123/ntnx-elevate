<<<<<<< HEAD
import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import * as c from './Colors.js'
import Home from '../img/Icon/Home.svg'
import Learn from '../img/Icon/Learn.svg'
import Store from '../img/Icon/Store.svg'
import Tool from '../img/Icon/Tool.svg'
import Company from '../img/Icon/Company.svg'
import {MenuItem, Img} from './Sidebar.js'

const FooterWrapper = styled.div`
  display: flex;
  background-color:${c.backgroundColor1};
  color:${c.white}
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: none;
  justify-content: space-between;
  height: 80px;
  transform: translateY(80px);
  align-items: center;
  flex-direction: row;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media screen and (orientation: landscape) {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
  @media (max-width: 600px) {
    transform: translateX(0px);
  }
`


export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <MenuItem vertical> <Img vertical src={Home}/>   <h3>Home</h3>    </MenuItem>
        <MenuItem vertical> <Img vertical src={Learn}/>  <h3>Learn</h3>   </MenuItem>
        <MenuItem vertical> <Img vertical src={Tool}/>   <h3>Build</h3>   </MenuItem>
        <MenuItem vertical> <Img vertical src={Store}/>  <h3>Market</h3>  </MenuItem>
        <MenuItem vertical> <Img vertical src={Company}/><h3>Company</h3> </MenuItem>
      </FooterWrapper>
    );
  }
}
||||||| merged common ancestors
=======
import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import * as c from './Colors.js'
import Home from '../img/Icon/Home.svg'
import Learn from '../img/Icon/Learn.svg'
import Store from '../img/Icon/Store.svg'
import Tool from '../img/Icon/Tool.svg'
import Company from '../img/Icon/Company.svg'

const FooterWrapper = styled.div`
  display: flex;
  background-color:${c.backgroundColor1};
  color:${c.white}
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: none;
  justify-content: space-between;
  height: 60px;
  transform: translateY(70px);
  align-items: center;
  flex-direction: row;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media screen and (orientation: landscape) {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
  @media (max-width: 600px) {
    transform: translateX(0px);
  }
`

const Img = styled.img`
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 10px;
`

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <Img src={Home}/><p>Home  </p>
        <Img src={Learn}/><p>Learn  </p>
        <Img src={Tool}/><p>Build  </p>
        <Img src={Store}/><p>Market  </p>
        <Img src={Company}/><p>Company</p>
      </FooterWrapper>
    );
  }
}
>>>>>>> 47f76a56dfa3779dfce90bb5e2090126ab518d86
