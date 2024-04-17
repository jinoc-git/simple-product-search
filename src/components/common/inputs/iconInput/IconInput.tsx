import React from 'react';
import * as Styled from './style';
import IconButton from '../../buttons/iconButton/IconButton';

interface Props {
  icon: React.ReactNode;
  iconPosition: 'left' | 'right';
  w: string;
  h: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IconInput = (props: Props) => {
  const { icon, iconPosition, w, h, name, onChange } = props;

  return (
    <Styled.IconInputContainer>
      <Styled.Input name={name} onChange={onChange} $w={w} $h={h} />
      <IconButton icon={icon} iconPosition={iconPosition} />
    </Styled.IconInputContainer>
  );
};

export default IconInput;
