import React from 'react';
import { LoadingSpinner } from './style';
import { LoadingGif } from '../gif';

const Loading = () => {
  return <LoadingSpinner src={LoadingGif} alt="로딩 스피너 gif" />;
};

export default Loading;
