import styled, { css } from "styled-components";

interface ContainerProps{
  isFocused: boolean;
  isField: boolean;
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

  svg {
    margin-right: 16px !important;

  }
`;
