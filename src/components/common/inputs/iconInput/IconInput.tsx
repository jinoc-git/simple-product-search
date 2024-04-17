import React from 'react';
import * as Styled from './style';
import IconButton from '../../buttons/iconButton/IconButton';

interface Props {
  icon: React.ReactNode;
  iconPosition: 'left' | 'right';
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IconInput = (props: Props) => {
  const { icon, iconPosition, name, onChange } = props;

  return (
    <Styled.IconInputContainer>
      <Styled.Input name={name} onChange={onChange} />
      <IconButton icon={icon} iconPosition={iconPosition} />
    </Styled.IconInputContainer>
  );
};

export default IconInput;
