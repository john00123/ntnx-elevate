import React, { Component } from 'react';
import styled, {css} from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles

export const Deck = styled.section`
  width: 100%;
  padding: 30px 30px;

  display: grid;
  align-items: center;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap:20px;

  @media (max-width: 600px) {
    padding: 30px 30px 100px 30px;
  }
`;
