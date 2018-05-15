import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import * as c from './Colors.js'
import * as i from '../img/Icon/Icons.js'
import {MenuItem, Img} from './Sidebar.js'

const FooterWrapper = styled.div`
  display: flex;
  background-color:${c.backgroundColor1};
  color:${c.white}
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: none;
  justify-content: space-between;
  height: 80px;
  transform: translateY(80px);
  align-items: center;
  flex-direction: row;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media screen and (orientation: landscape) {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
  @media (max-width: 600px) {
    transform: translateX(0px);
  }
`


export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <MenuItem vertical>
          <i.IconHome/>
          <h3>Home</h3>
        </MenuItem>

        <MenuItem vertical>
          <i.IconLearn/>
          <h3>Learn</h3>
        </MenuItem>

        <MenuItem vertical>
          <i.IconBuild/>
          <h3>Build</h3>
        </MenuItem>

        <MenuItem vertical>
          <i.IconMarket/>
          <h3>Market</h3>
        </MenuItem>

        <MenuItem vertical>
          <i.IconCompany/>
          <h3>Company</h3>
        </MenuItem>

      </FooterWrapper>
    );
  }
}
