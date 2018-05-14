import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import * as c from './Colors.js'
import Home from '../img/Icon/Home.svg'
import Learn from '../img/Icon/Learn.svg'
import Store from '../img/Icon/Store.svg'
import Tool from '../img/Icon/Tool.svg'
import Company from '../img/Icon/Company.svg'

const SideBarWrapper = styled.div`
  height: 100%;
  min-height: calc(100vh - 50px);
  width: 200px;
  padding: 30px;
  box-sizing: border-box;
  color:${c.fontColor2};
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media (max-width: 600px) {
    transform: translateX(-150px);
    width: 0;
    padding: 20px 0;
  }
`

//Styling for the horizontal ruler
const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: ${c.borderColor2};
  ${props => props.secondary && css`
    width:10px;
    margin-left:0;
  `}
`
const Img = styled.img`
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 10px;
`

export class SideBar extends Component {
  render() {
    return (
      <SideBarWrapper>
        <Img src={Home}/><span> Home</span><br/>
        <Img src={Learn}/><span> Learn</span><br/>
        <Img src={Tool}/><span> Build</span><br/>
        <Img src={Store}/><span> Market</span><br/>
        <Hr secondary/>
        <Img src={Company}/><span> Nutanix</span><br/>
      </SideBarWrapper>
    );
  }
}
