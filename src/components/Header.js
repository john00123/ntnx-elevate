import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import Nutanix from '../img/Nutanix.svg'
import user from '../img/user.png'
import * as c from './Colors.js'

const HeaderWrapper = styled.div`
  display: flex;
  background-color:white;
  padding: 0 30px;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  flex-direction: row;
  position: relative;
  ${'' /* @media screen and (orientation: landscape) {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  } */}

`

const User = styled.img`
  height: 30px;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

  > *{
    margin-right: 10px;
    font-weight: 500;
    color:${c.fontColor1};
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 0;
  justify-content: flex-end;
  > *{
    margin-left: 15px;
    font-weight: 500;
  }
`

const Hamburger = styled.span`
  width: 16px;
  position: relative;
  margin-right: 30px;
  height: 24px;
  &::before, &:after{
    content: '';
    display: block;
    height: 2px;
    width: 16px;
    background-color: ${c.borderColor1};
    position: absolute;
  }

  &:before{
    top:8px;
  }

  &::after{
    bottom:8px;
  }
`

export default class HeaderPortal extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Left>
          <Hamburger/>
          <p>ElevatePartner</p>
        </Left>
        <img src={Nutanix} alt="logo"/>
        <Right>
          <p> Username </p>
          <User src={user}/>
        </Right>

      </HeaderWrapper>
    );
  }
}
