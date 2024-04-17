import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'TheJamsil5Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap');
  ${reset};
  *{
    box-sizing: border-box;
  }
  body { 
    line-height: 1.4;
    font-family: 'Noto Sans KR', sans-serif;
    color: #222;
  }
  h1 {
    font-family: 'TheJamsil5Bold', sans-serif;
    font-size: 24px;
    font-weight: bold;
  }
  h2 {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px; 
    margin: -1px;
    padding: 0;
    border: 0; 
    clip: rect(0 0 0 0); 
    clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    white-space: nowrap;
  }
  h3 { 
    font-family: 'TheJamsil5Bold', sans-serif;
    font-size: 20px;
  }
  h4 {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
  }
`;

export default GlobalStyles;
