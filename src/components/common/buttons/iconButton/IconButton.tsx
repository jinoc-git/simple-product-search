import React from 'react';
import * as Styled from './style';

export interface IconButtonProps extends Styled.IconBtnStyleProps {
  icon: React.ReactNode;
  iconBtnType: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

const IconButton = ({ icon, $iconPosition, iconBtnType, className, onClick }: IconButtonProps) => {
  return (
    <Styled.IconBtn
      $iconPosition={$iconPosition}
      type={iconBtnType}
      className={className}
      onClick={onClick}
    >
      {icon}
    </Styled.IconBtn>
  );
};

export default IconButton;
