import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import * as c from './Colors.js';
import {Hr}from './Sidebar.js';

// Create a Wrapper component that'll render a <section> tag with some styles

const Wrapper = styled.section`
  background: white;
  border-radius: 4px;
  height:auto;
  display: flex;
  justify-content:space-between;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow:
    0 9px 9px 0 rgba(0,0,0,0.02),
    0 3px 3px 0 rgba(0,0,0,0.02),
    0 1px 1px 0 rgba(0,0,0,0.02);

  &:hover{
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

const Padding = styled.div`
  padding:30px;
  width:100%;
  > * {
    margin-bottom:10px;
`

const Flexbox = styled.div`
  display:flex;
  justify-content: space-between;
  ${props => props.column && css`
    flex-direction: column;
    justify-items: flex-start;
  `}
`

const Pstyled = styled.p`
  color: ${c.fontColor2};
`
const Img= styled.img`
  height:200px;
  width:200px;
  background-color:${c.blue3};
  border:none;
  border-radius: 0 4px 4px 0;
`


export class Card extends Component {
  render() {
    return (
      <Wrapper>
        <Padding>
          <h3>{this.props.name}</h3>
          <Hr/>
          <Flexbox>
            <p>This is something</p>
            <p>AHV</p>
          </Flexbox>
          <Flexbox>
            <p>This is something</p>
            <p>AHV</p>
          </Flexbox>
          <Flexbox>
            <p>This is something</p>
            <p>AHV</p>
          </Flexbox>
          <Flexbox>
            <p>This is something</p>
            <p>AHV</p>
          </Flexbox>
        </Padding>
      {
        // <h3>{this.props.name}</h3>
        // <hr/>
        // <Pstyled>A fair-market offer</Pstyled>
        // <Pstyled>No Showings</Pstyled>
        // <Pstyled>No double mortgage</Pstyled>
        // <Pstyled>Flexible close date</Pstyled>
        // <Pstyled>Zero days on market</Pstyled>
        // <Pstyled>No doing repairs yourself</Pstyled>
      }
      </Wrapper>
    );
  }
}
