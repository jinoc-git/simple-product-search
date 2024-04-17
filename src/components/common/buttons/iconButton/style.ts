import styled, { css } from 'styled-components';

export interface IconBtnStyleProps {
  $iconPosition?: 'left' | 'right';
}

export const IconBtn = styled.button<IconBtnStyleProps>`
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
