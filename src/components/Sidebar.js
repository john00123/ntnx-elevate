import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import * as c from './Colors.js'
import * as i from '../img/Icon/Icons.js'

const SideBarWrapper = styled.div`
  height: 100%;
  min-height: calc(100vh - 50px);
  width: 150px;
  padding: 30px 20px;
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
    margin-top:25px;
  `}
`


export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2px;
  position: relative;
  border-radius: 3px;
  padding: 8px 10px;
  svg{
    fill:${c.fontColor2};
    margin-right:15px;
  }
  &:hover{
    color:${c.fontColor1};
    cursor:pointer;
    svg { fill:${c.fontColor1}}
    background-color: rgba(0,0,0,0.04);

  }

  ${props => props.vertical && css`
    flex-direction: column;
    justify-content: center;
    margin-bottom:0;
    color: ${c.borderColor1};
    &:hover{
      color:white;
      svg{fill:white}
    }
    svg{
      width:16px;
      height:16px;
      fill:${c.borderColor1}
      margin-right:0;
      margin-bottom:15px
    }
  `}

  ${props => props.badge && css `
    &::after{
      content:'';
      height: 4px;
      width: 4px;
      position: absolute;
      left: 20px;
      top: 8px;;
      border-radius:4px;
      background-color:${c.red1};
    }
    `}


`


export class SideBar extends Component {
  render() {
    return (
      <SideBarWrapper>

        <MenuItem badge>
          <i.IconHome/>
          <h3>Home</h3>
        </MenuItem>

        <MenuItem>
          <i.IconLearn/>
          <h3>Learn</h3>
        </MenuItem>

        <MenuItem>
          <i.IconBuild/>
          <h3>Build</h3>
        </MenuItem>

        <MenuItem>
          <i.IconMarket/>
          <h3>Market</h3>
        </MenuItem>

        <Hr secondary/><br/>
        <MenuItem>
          <i.IconCompany/>
          <h3>Company</h3>
        </MenuItem>

      </SideBarWrapper>
    );
  }
}
