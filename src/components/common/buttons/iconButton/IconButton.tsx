import React from 'react';
import * as Styled from './style';

export interface IconButtonProps extends Styled.IconBtnStyleProps {
  icon: React.ReactNode;
  iconBtnType: 'button' | 'submit' | 'reset';
}

const IconButton = ({ icon, $iconPosition, iconBtnType }: IconButtonProps) => {
  return (
    <Styled.IconBtn $iconPosition={$iconPosition} type={iconBtnType}>
      {icon}
    </Styled.IconBtn>
  );
};

export default IconButton;
