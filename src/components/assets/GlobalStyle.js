import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
 ${reset}
 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

/* body {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.2;
} */

:root {
    --font: 'Noto Sans KR', -apple-system,BlinkMacSystemFont,"Malgun Gothic","맑은 고딕",helvetica,"Apple SD Gothic Neo",sans-serif;
}

html {
    font-family: var(--font);
    scroll-behavior: smooth;
}

a {
    display: block;
    color: inherit;
    text-decoration: none;
}

img {
    vertical-align: top;
}

h2, h3 {
    text-align: center;
}

.title{
font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 0 9px;
}

.sub_title {
    color: #888;
    font-size: 17px;
    padding: 10px 0 50px;
}


`;

export default GlobalStyle;
