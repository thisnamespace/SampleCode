import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  position: absolute;
  margin: auto;
  left: 50%;
  top: 50%;
  margin-left: -34px;
  margin-top: -64px;
  div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 51px;
      height: 51px;
      margin: 6px;
      border: 6px solid #def1f4;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #def1f4 transparent transparent transparent;
  }
  div:nth-child(1) {
      animation-delay: -0.45s;
  }
  div:nth-child(2) {
      animation-delay: -0.3s;
  }
  div:nth-child(3) {
      animation-delay: -0.15s;
  }
  @keyframes lds-ring {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
  }
`

export const Loader = () => (
  <StyledSpinner>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </StyledSpinner>
)