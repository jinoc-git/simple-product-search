import styled, { css } from 'styled-components';

interface TextBtnProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  bg?: string;
  hoverBg?: string;
  hoverColor?: string;
}

export const TextBtn = styled.button<TextBtnProps>`
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  outline: none;
  border: none;

  color: ${({ color }) => color ?? '#222'};
  background-color: ${({ bg }) => bg ?? '#EEE'};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBg }) => hoverBg};
  }

  &:disabled {
    background-color: #888;
    cursor: default;
  }

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          width: 100px;
          height: 40px;
          border-radius: 8px;
          font-size: 16px;
        `;
      case 'md':
        return css`
          width: 140px;
          height: 45px;
          border-radius: 10px;
          font-size: 18px;
        `;
      case 'lg':
        return css`
          width: 180px;
          height: 50px;
          border-radius: 12px;
          font-size: 20px;
        `;
      default:
        return css`
          width: 100px;
          height: 40px;
          border-radius: 8px;
          font-size: 16px;
        `;
    }
  }}
`;
