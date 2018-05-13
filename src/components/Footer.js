import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  background-color:lavender;
  padding: 0 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow-x: scroll;
  justify-content: space-between;
  height: 60px;
  transform: translateY(70px);
  align-items: center;
  flex-direction: row;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  @media (max-width: 700px) {
    transform: translateX(0px);
  }

`

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <p>Home</p>
        <p>Learn</p>
        <p>Build</p>
        <p>Something</p>
        <p>Something</p>
        <p>Something</p>
      </FooterWrapper>
    );
  }
}
