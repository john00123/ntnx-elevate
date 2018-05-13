import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles

export const Wrapper = styled.section`
  padding: 4em;
  background: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow:
    0 9px 9px 0 rgba(0,0,0,0.02),
    0 3px 3px 0 rgba(0,0,0,0.02),
    0 1px 1px 0 rgba(0,0,0,0.02);

  &:hover{
    cursor: pointer;
    transform: translateY(-2px);
  }
  ${props => props.secondary && css`
    background-color:sand;
  ` }
`;


export class Card extends Component {
  render() {
    return (
      <Wrapper secondary>
        <h1>{this.props.name}</h1>
      </Wrapper>
    );
  }
}
