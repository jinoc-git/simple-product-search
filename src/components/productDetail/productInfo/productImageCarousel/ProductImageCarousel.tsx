import React from 'react';
import * as Styled from './style';
import useCarousel from '../../../../hooks/useCarousel';
import IconButton from '../../../common/buttons/iconButton/IconButton';
import IconChevronLeft from '../../../../assets/IconChevronLeft';
import IconChevronRight from '../../../../assets/IconChevronRight';

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
          className="left-btn"
          onClick={onClickLeft}
        />
      )}
      {curIdx !== images.length - 1 && (
        <IconButton
          icon={<IconChevronRight />}
          iconBtnType="button"
          className="right-btn"
          onClick={onClickRight}
        />
      )}
    </Styled.CarouselContainer>
  );
};

export default ProductImageCarousel;
