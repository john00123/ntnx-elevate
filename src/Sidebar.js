import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';

const SideBarWrapper = styled.div`
  height: 100%;
  @media (max-width: 700px) {
    display: none;
    }
`

export class SideBar extends Component {
  render() {
    return (
      <SideBarWrapper>
        <p>This is a card element</p>
      </SideBarWrapper>
    );
  }
}
