import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles

export const Wrapper = styled.section`
  padding: 4em;
  background: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: space-around;
  box-shadow:
    0 9px 9px 0 rgba(0,0,0,0.02),
    0 3px 3px 0 rgba(0,0,0,0.02),
    0 1px 1px 0 rgba(0,0,0,0.02);
  ${props => props.secondary && css`
    background-color:sand;
  ` }
`;


export class Card extends Component {
  render() {
    return (
      <Wrapper secondary>
        <h1>This is a card element</h1>
        <p>This is a card element</p>
      </Wrapper>
    );
  }
}
