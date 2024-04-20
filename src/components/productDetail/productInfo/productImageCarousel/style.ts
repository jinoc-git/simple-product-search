import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;

  & .left-btn {
    position: absolute;
    top: 45%;
    left: 10px;
  }

  & .right-btn {
    position: absolute;
    top: 45%;
    right: 10px;
  }
`;

export const CarouselViewSpace = styled.div`
  width: 350px;
  height: 350px;
  margin: 0 auto;
  overflow: hidden;
`;

interface WrapperProps {
  $w: string;
}

export const CarouselItemWrapper = styled.ul<WrapperProps>`
  display: flex;
  width: ${({ $w }) => $w};
  transition: transform 0.3s;
`;

export const CarouselItem = styled.li`
  width: 350px;
  height: 350px;
  border-radius: 15px;
`;

export const CarouselItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
