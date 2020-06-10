import styled, { keyframes } from "styled-components";
import {shade} from 'polished'
import SignBackground from '../../assets/1587470786293-attachment.png';

export const Container = styled.div`

  height: 100vh;

  display:flex;
  align-items: stretch;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100vh;
  max-width: 700px;


`;

const apperFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${apperFromRight} 1.3s;

   form {
    margin: 60px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover{
        color: ${shade(0.2, '#F4EDE8')}
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
        color: ${shade(0.2, '#ff9000')}
      }
    svg {
      margin-right: 10px;
    }
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignBackground}) no-repeat center;
  background-size: cover;
`;
