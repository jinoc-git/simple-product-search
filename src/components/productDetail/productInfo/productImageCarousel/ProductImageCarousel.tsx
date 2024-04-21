import React from 'react';
import * as Styled from './style';
import useCarousel from '../../../../hooks/useCarousel';
import IconButton from '../../../common/buttons/iconButton/IconButton';
import IconChevronLeft from '../../../../assets/icon/IconChevronLeft';
import IconChevronRight from '../../../../assets/icon/IconChevronRight';

interface Props {
  images: string[];
}

const ProductImageCarousel = ({ images }: Props) => {
  const { ref, curIdx, onClickLeft, onClickRight } = useCarousel(images.length);

  return (
    <Styled.CarouselContainer>
      <Styled.CarouselViewSpace>
        <Styled.CarouselItemWrapper ref={ref} $w={`${350 * images.length}px`}>
          {images.map((url, idx) => {
            return (
              <Styled.CarouselItem key={url}>
                <Styled.CarouselItemImage src={url} alt={`product-image-${idx}`} />
              </Styled.CarouselItem>
            );
          })}
        </Styled.CarouselItemWrapper>
      </Styled.CarouselViewSpace>
      {curIdx !== 0 && (
        <IconButton
          icon={<IconChevronLeft />}
          iconBtnType="button"
          btnName="왼쪽 화살표 버튼"
          className="left-btn"
          onClick={onClickLeft}
        />
      )}
      {curIdx !== images.length - 1 && (
        <IconButton
          icon={<IconChevronRight />}
          iconBtnType="button"
          btnName="오른쪽 화살표 버튼"
          className="right-btn"
          onClick={onClickRight}
        />
      )}
    </Styled.CarouselContainer>
  );
};

export default ProductImageCarousel;
