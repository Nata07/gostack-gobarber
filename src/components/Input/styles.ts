import styled, { css } from "styled-components";
import Tooltip from '../Tooltip';

interface ContainerProps{
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}


  ${props => props.isFocused && css`
    color: #ff900f;
    border-color: #ff900f;
  `}

  ${props => props.isField && css`
    color: #ff900f;
  `}




  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #F4EDE8;



    &::placeholder {
      color: #666360;
    }

  }

  > svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  span {
    background: #c53030 !important;
    color: #FFF;

    &::before {
      border-color: #c53030 transparent !important;
    }
  }

  svg {
    margin: 0;
  }

`;
