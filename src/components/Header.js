import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import Nutanix from '../img/Nutanix.svg'
import user from '../img/user.png'

const HeaderWrapper = styled.div`
  display: flex;
  background-color:white;
  padding: 0 20px;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  flex-direction: row;
`

const User = styled.img`
  height: 30px;
`

const Left =styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-start;
  > *{
    margin-right: 10px;
  }
`

const Right =styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 0;
  justify-content: flex-end;
  > *{
    margin-left: 10px;
  }
`

export default class HeaderPortal extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Left>
          <img src={Nutanix} alt="logo"/>
          <p>Elevate</p>
        </Left>
        <Right>
          <p> Username </p>
          <User src={user}/>
        </Right>

      </HeaderWrapper>
    );
  }
}
