import { useRef, useState } from 'react';

const useCarousel = (itemCount: number) => {
  const ref = useRef<HTMLUListElement>(null);
  const [curIdx, setCurIdx] = useState(0);

  const onClickLeft = () => {
    if (ref.current === null) return;
    if (curIdx === 0) return;

    ref.current.style.transform = `translateX(-${350 * (curIdx - 1)}px)`;
    setCurIdx((prev) => prev - 1);
  };
  const onClickRight = () => {
    if (ref.current === null) return;
    if (curIdx === itemCount - 1) return;

    ref.current.style.transform = `translateX(-${350 * (curIdx + 1)}px)`;
    setCurIdx((prev) => prev + 1);
  };

  return { ref, curIdx, onClickLeft, onClickRight };
};

export default useCarousel;
