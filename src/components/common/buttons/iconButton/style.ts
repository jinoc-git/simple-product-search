import styled, { css } from 'styled-components';

interface IconBtnProps {
  $iconPosition?: 'left' | 'right';
}

export const IconBtn = styled.button<IconBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 2px;
  border: none;
  cursor: pointer;
  background-color: transparent;

  ${({ $iconPosition }) => {
    if ($iconPosition) {
      return css`
        position: absolute;
        top: 5px;
        ${$iconPosition}: 5px;
      `;
    }
  }}
`;
