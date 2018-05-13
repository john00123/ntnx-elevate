import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';

const SideBarWrapper = styled.div`
  min-height: calc(100vh - 50px);
  height: 100%;
  width: 200px;
  padding: 30px;
  box-sizing: border-box;
  color:red;
  @media (max-width: 700px) {
    display: none;
    }
`

const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: red;
  ${props => props.secondary && css`
    width:15px;
    margin-left:0;
  `}
`

export class SideBar extends Component {
  render() {
    return (
      <SideBarWrapper>
        <p>Home</p>
        <p>Learn</p>
        <p>Build</p>
        <p>Something</p>
        <Hr secondary/>
        <p>Something</p>
        <p>Something</p>
      </SideBarWrapper>
    );
  }
}
