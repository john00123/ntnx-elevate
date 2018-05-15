import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import * as c from './Colors.js';

// Create a Wrapper component that'll render a <section> tag with some styles

const Wrapper = styled.section`
  background: white;
  border-radius: 4px;
  height:auto;
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
`;

const Padding = styled.div`
  padding:30px;
`

const Pstyled = styled.p`
  color: ${c.fontColor2};
`
const Img= styled.img`
  height:200px;
`


export class Card extends Component {
  render() {
    return (
      <Wrapper>
        
        <Padding>
          <h3>{this.props.name}</h3>
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
