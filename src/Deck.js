import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles

export const Deck = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap:20px;
  align-items: center;
  justify-content: space-between;


  ${props => props.secondary && css`
    background-color:sand;
  ` }

`;
