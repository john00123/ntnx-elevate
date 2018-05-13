import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';
import Nutanix from './Nutanix.svg'
import user from './user.png'

const HeaderWrapper = styled.div`
  display: flex;
  background-color:red;
  padding: 0 20px;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  flex-direction: row;
`

const User =styled.img`
  height: 30px;
`

export default class HeaderPortal extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className='leftSide'>
          <img src={Nutanix} alt="logo" />
          <p>Elevate</p>
        </div>
        <div>
          <User src={user}/>
        </div>

      </HeaderWrapper>
    );
  }
}
