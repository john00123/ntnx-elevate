import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: blue;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: space-between;
  ${props => props.secondary && css`
    background-color:LIGHTSTEELBLUE;
  ` }
`;


export class Card extends Component {

  render() {
    return (
      <Wrapper secondary>
        <Title>This is a card element</Title>
        <p>This is a card element</p>
      </Wrapper>
    );
  }
}
