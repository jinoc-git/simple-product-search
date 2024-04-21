import styled from 'styled-components';

export interface InputStyleProps {
  $w: string;
  $h: string;
}

export const IconInputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input<InputStyleProps>`
  width: ${({ $w }) => $w};
  height: ${({ $h }) => $h};
  padding-right: 30px;
  font-size: 18px;
  background-color: transparent;
  border-bottom: 1px solid;
`;
