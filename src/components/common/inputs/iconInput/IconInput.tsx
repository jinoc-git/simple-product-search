import React from 'react';
import * as Styled from './style';
import IconButton, {
  IconButtonProps,
} from '../../buttons/iconButton/IconButton';

interface Props extends IconButtonProps, Styled.InputStyleProps {
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IconInput = ({ name, placeholder, onChange, $w, $h, ...rest }: Props) => {
  return (
    <Styled.IconInputContainer>
      <Styled.Input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        $w={$w}
        $h={$h}
      />
      <IconButton {...rest} />
    </Styled.IconInputContainer>
  );
};

export default IconInput;
