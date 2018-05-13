import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const SideBarWrapper = styled.div`
  min-height: calc(100vh - 50px);
  height: 100%;
  width: 200px;
  padding: 30px;
  box-sizing: border-box;
  color:#627386;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  @media (max-width: 700px) {
    transform: translateX(-150px);
    width: 0;
    padding: 20px 0;
  }
`

const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: #B8BFCA;
  ${props => props.secondary && css`
    width:10px;
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
