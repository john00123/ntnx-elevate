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
  height: 50px;
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
        <MenuItem vertical> <Img vertical  large src={Home}/>        </MenuItem>
        <MenuItem vertical> <Img vertical  large src={Learn}/>    </MenuItem>
        <MenuItem vertical> <Img vertical  large src={Tool}/>      </MenuItem>
        <MenuItem vertical> <Img vertical large  src={Store}/>    </MenuItem>
        <MenuItem vertical> <Img vertical large  src={Company}/> </MenuItem>
      </FooterWrapper>
    );
  }
}
