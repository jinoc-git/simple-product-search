import React from 'react';
import * as Styled from './style';

export interface IconButtonProps extends Styled.IconBtnStyleProps {
  icon: React.ReactNode;
  iconBtnType: 'button' | 'submit' | 'reset';
  btnName: string;
  className?: string;
  onClick?: () => void;
}

const IconButton = ({
  icon,
  $iconPosition,
  iconBtnType,
  btnName,
  className,
  onClick,
}: IconButtonProps) => {
  return (
    <Styled.IconBtn
      $iconPosition={$iconPosition}
      type={iconBtnType}
      name={btnName}
      aria-label={btnName}
      className={className}
      onClick={onClick}
    >
      {icon}
    </Styled.IconBtn>
  );
};

export default IconButton;
