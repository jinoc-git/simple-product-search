import React from 'react';
import * as Styled from './style';
import IconButton, {
  IconButtonProps,
} from '../../buttons/iconButton/IconButton';

interface Props extends IconButtonProps, Styled.InputStyleProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IconInput = (props: Props) => {
  const { icon, $iconPosition, iconBtnType, $w, $h, name, onChange } = props;

  return (
    <Styled.IconInputContainer>
      <Styled.Input name={name} onChange={onChange} $w={$w} $h={$h} />
      <IconButton
        icon={icon}
        $iconPosition={$iconPosition}
        iconBtnType={iconBtnType}
      />
    </Styled.IconInputContainer>
  );
};

export default IconInput;
