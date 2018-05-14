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
    width: 0px;
    padding: 30px 0;
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

export const Img = styled.img`
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 15px;
  ${props => props.vertical && css`
    margin-right: 0;
    margin-bottom: 10px;
  `}
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;

  ${props => props.vertical && css`
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
    padding:20px;
  `}

  &:hover{
    color:${c.blue1};
    cursor:pointer;
  }
`


export class SideBar extends Component {
  render() {
    return (
      <SideBarWrapper>
        <MenuItem><Img src={Home}/>  <h3>Home</h3></MenuItem>
        <MenuItem><Img src={Learn}/> <h3>Learn</h3></MenuItem>
        <MenuItem><Img src={Tool}/>  <h3>Build</h3></MenuItem>
        <MenuItem><Img src={Store}/> <h3>Market</h3></MenuItem>
        <Hr secondary/><br/>
        <MenuItem><Img src={Company}/><h3>Company</h3></MenuItem>
      </SideBarWrapper>
    );
  }
}
