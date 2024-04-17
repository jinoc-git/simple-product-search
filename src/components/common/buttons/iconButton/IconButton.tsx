import React from 'react';
import * as Styled from './style';

interface Props {
  icon: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const IconButton = ({ icon, iconPosition }: Props) => {
  return <Styled.IconBtn $iconPosition={iconPosition}>{icon}</Styled.IconBtn>;
};

export default IconButton;
