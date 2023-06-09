// The MIT License (MIT)

// Copyright (c) 2023 Toshiya Marukubo (https://codepen.io/toshiya-marukubo/pen/dypmMQq)

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import styled, { keyframes } from 'styled-components';

export default function Preloader() {
  return (
    <Container>
      <div className='background background0'></div>
      <div className='background background1'></div>
      <div className='background background2'></div>
      <div className='background background3'></div>
      <div className='background background4'></div>
      <div className='background background5'></div>
      <div className='background background6'></div>
      <div className='background background7'></div>
      <div className='criterion'>
        <div className='text text0'>L</div>
        <div className='text text1'>o</div>
        <div className='text text2'>a</div>
        <div className='text text3'>d</div>
        <div className='text text4'>i</div>
        <div className='text text5'>n</div>
        <div className='text text6'>g</div>
        <div className='text text7'>🍩</div>
        <div className='frame frame0'></div>
        <div className='frame frame1'></div>
        <div className='frame frame2'></div>
        <div className='frame frame3'></div>
        <div className='frame frame4'></div>
        <div className='frame frame5'></div>
        <div className='frame frame6'></div>
        <div className='frame frame7'></div>
        <div className='particle particle00'></div>
        <div className='particle particle01'></div>
        <div className='particle particle02'></div>
        <div className='particle particle03'></div>
        <div className='particle particle04'></div>
        <div className='particle particle05'></div>
        <div className='particle particle06'></div>
        <div className='particle particle07'></div>
        <div className='particle particle08'></div>
        <div className='particle particle09'></div>
        <div className='particle particle010'></div>
        <div className='particle particle011'></div>
        <div className='particle particle10'></div>
        <div className='particle particle11'></div>
        <div className='particle particle12'></div>
        <div className='particle particle13'></div>
        <div className='particle particle14'></div>
        <div className='particle particle15'></div>
        <div className='particle particle16'></div>
        <div className='particle particle17'></div>
        <div className='particle particle18'></div>
        <div className='particle particle19'></div>
        <div className='particle particle110'></div>
        <div className='particle particle111'></div>
        <div className='particle particle20'></div>
        <div className='particle particle21'></div>
        <div className='particle particle22'></div>
        <div className='particle particle23'></div>
        <div className='particle particle24'></div>
        <div className='particle particle25'></div>
        <div className='particle particle26'></div>
        <div className='particle particle27'></div>
        <div className='particle particle28'></div>
        <div className='particle particle29'></div>
        <div className='particle particle210'></div>
        <div className='particle particle211'></div>
        <div className='particle particle30'></div>
        <div className='particle particle31'></div>
        <div className='particle particle32'></div>
        <div className='particle particle33'></div>
        <div className='particle particle34'></div>
        <div className='particle particle35'></div>
        <div className='particle particle36'></div>
        <div className='particle particle37'></div>
        <div className='particle particle38'></div>
        <div className='particle particle39'></div>
        <div className='particle particle310'></div>
        <div className='particle particle311'></div>
        <div className='particle particle40'></div>
        <div className='particle particle41'></div>
        <div className='particle particle42'></div>
        <div className='particle particle43'></div>
        <div className='particle particle44'></div>
        <div className='particle particle45'></div>
        <div className='particle particle46'></div>
        <div className='particle particle47'></div>
        <div className='particle particle48'></div>
        <div className='particle particle49'></div>
        <div className='particle particle410'></div>
        <div className='particle particle411'></div>
        <div className='particle particle50'></div>
        <div className='particle particle51'></div>
        <div className='particle particle52'></div>
        <div className='particle particle53'></div>
        <div className='particle particle54'></div>
        <div className='particle particle55'></div>
        <div className='particle particle56'></div>
        <div className='particle particle57'></div>
        <div className='particle particle58'></div>
        <div className='particle particle59'></div>
        <div className='particle particle510'></div>
        <div className='particle particle511'></div>
        <div className='particle particle60'></div>
        <div className='particle particle61'></div>
        <div className='particle particle62'></div>
        <div className='particle particle63'></div>
        <div className='particle particle64'></div>
        <div className='particle particle65'></div>
        <div className='particle particle66'></div>
        <div className='particle particle67'></div>
        <div className='particle particle68'></div>
        <div className='particle particle69'></div>
        <div className='particle particle610'></div>
        <div className='particle particle611'></div>
        <div className='particle particle70'></div>
        <div className='particle particle71'></div>
        <div className='particle particle72'></div>
        <div className='particle particle73'></div>
        <div className='particle particle74'></div>
        <div className='particle particle75'></div>
        <div className='particle particle76'></div>
        <div className='particle particle77'></div>
        <div className='particle particle78'></div>
        <div className='particle particle79'></div>
        <div className='particle particle710'></div>
        <div className='particle particle711'></div>
      </div>
    </Container>
  );
}

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  font-family: 'Aaargh', sans-serif;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.loading};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99999;
  animation: ${fadeOut} 1s ease-out 7.5s forwards;

  /*
  * variable
  */
  .criterion {
    font-size: 1.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 0;
    width: 0;
    transform: translate(-20px, -20px);
  }
  /*
  *background
  */
  .background {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 0;
    -webkit-animation: background-animation 2s ease-in-out 4s 1 normal forwards;
    animation: background-animation 2s ease-in-out 4s 1 normal forwards;
  }
  .background0 {
    left: 0%;
    height: 100vh;
    background-color: #eb4747;
  }
  .background1 {
    left: 12.5%;
    height: 100vh;
    background-color: #ebc247;
  }
  .background2 {
    left: 25%;
    height: 100vh;
    background-color: #99eb47;
  }
  .background3 {
    left: 37.5%;
    height: 100vh;
    background-color: #47eb70;
  }
  .background4 {
    left: 50%;
    height: 100vh;
    background-color: #47ebeb;
  }
  .background5 {
    left: 62.5%;
    height: 100vh;
    background-color: #4770eb;
  }
  .background6 {
    left: 75%;
    height: 100vh;
    background-color: #9947eb;
  }
  .background7 {
    left: 87.5%;
    height: 100vh;
    background-color: #eb47c2;
  }
  .background8 {
    left: 100%;
    height: 100vh;
    background-color: #eb4747;
  }
  /*
  *text
  */
  .text {
    position: absolute;
    width: 40px;
    line-height: 40px;
    opacity: 0;
    overflow: hidden;
  }
  .text::after {
    z-index: -1;
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 40px;
  }
  .text0 {
    left: -140px;
    top: 0;
    -webkit-animation: text-animation0 1s ease-in-out 1s 1 normal forwards, text2-animation0 2s ease-in-out 5s 1 normal forwards;
    animation: text-animation0 1s ease-in-out 1s 1 normal forwards, text2-animation0 2s ease-in-out 5s 1 normal forwards;
  }
  .text0::after {
    -webkit-animation: text-after-animation0 2s ease-in-out 3s 1 normal forwards;
    animation: text-after-animation0 2s ease-in-out 3s 1 normal forwards;
  }
  .text1 {
    left: -100px;
    top: 0;
    -webkit-animation: text-animation1 1s ease-in-out 1.2s 1 normal forwards, text2-animation1 2s ease-in-out 5s 1 normal forwards;
    animation: text-animation1 1s ease-in-out 1.2s 1 normal forwards, text2-animation1 2s ease-in-out 5s 1 normal forwards;
  }
  .text1::after {
    -webkit-animation: text-after-animation1 2s ease-in-out 3s 1 normal forwards;
    animation: text-after-animation1 2s ease-in-out 3s 1 normal forwards;
  }
  .text2 {
    left: -60px;
    top: 0;
    -webkit-animation: text-animation2 1s ease-in-out 1.4s 1 normal forwards, text2-animation2 2s ease-in-out 5s 1 normal forwards;
    animation: text-animation2 1s ease-in-out 1.4s 1 normal forwards, text2-animation2 2s ease-in-out 5s 1 normal forwards;
  }
  .text2::after {
    -webkit-animation: text-after-animation2 2s ease-in-out 3s 1 normal forwards;
    animation: text-after-animation2 2s ease-in-out 3s 1 normal forwards;
  }
  .text3 {
    left: -20px;
    top: 0;
    -webkit-animation: text-animation3 1s ease-in-out 1.6s 1 normal forwards, text2-animation3 2s ease-in-out 5s 1 normal forwards;
    animation: text-animation3 1s ease-in-out 1.6s 1 normal forwards, text2-animation3 2s ease-in-out 5s 1 normal forwards;
  }
  .text3::after {
    -webkit-animation: text-after-animation3 2s ease-in-out 3s 1 normal forwards;
    animation: text-after-animation3 2s ease-in-out 3s 1 normal forwards;
  }
  .text4 {
    left: 20px;
    top: 0;
    -webkit-animation: text-animation4 1s ease-in-out 1.8s 1 normal forwards, text2-animation4 2s ease-in-out 5s 1 normal forwards;
    animation: text-animation4 1s ease-in-out 1.8s 1 normal forwards, text2-animation4 2s ease-in-out 5s 1 normal forwards;
  }
  .text4::after {
    -webkit-animation: text-after-animation4 2s ease-in-out 3s 1 normal forwards;
    animation: text-after-animation4 2s ease-in-out 3s 1 normal forwards;
  }
  .text5 {
    left: 60px;
    top: 0;
    -webkit-animation: text-animation5 1s ease-in-out 2s 1 normal forwards, text2-animation5 2s ease-in-out 5s 1 normal forwards;
    animation: text-animation5 1s ease-in-out 2s 1 normal forwards, text2-animation5 2s ease-in-out 5s 1 normal forwards;
  }
  .text5::after {
    -webkit-animation: text-after-animation5 2s ease-in-out 3s 1 normal forwards;
    animation: text-after-animation5 2s ease-in-out 3s 1 normal forwards;
  }
  .text6 {
    left: 100px;
    top: 0;
    -webkit-animation: text-animation6 1s ease-in-out 2.2s 1 normal forwards, text2-animation6 2s ease-in-out 5s 1 normal forwards;
    animation: text-animation6 1s ease-in-out 2.2s 1 normal forwards, text2-animation6 2s ease-in-out 5s 1 normal forwards;
  }
  .text6::after {
    -webkit-animation: text-after-animation6 2s ease-in-out 3s 1 normal forwards;
    animation: text-after-animation6 2s ease-in-out 3s 1 normal forwards;
  }
  .text7 {
    left: 140px;
    top: 0;
    -webkit-animation: text-animation7 1s ease-in-out 2.4s 1 normal forwards, text2-animation7 2s ease-in-out 5s 1 normal forwards;
    animation: text-animation7 1s ease-in-out 2.4s 1 normal forwards, text2-animation7 2s ease-in-out 5s 1 normal forwards;
  }
  .text7::after {
    -webkit-animation: text-after-animation7 2s ease-in-out 3s 1 normal forwards;
    animation: text-after-animation7 2s ease-in-out 3s 1 normal forwards;
  }
  .text8 {
    left: 180px;
    top: 0;
    -webkit-animation: text-animation8 1s ease-in-out 2.6s 1 normal forwards, text2-animation8 2s ease-in-out 5s 1 normal forwards;
    animation: text-animation8 1s ease-in-out 2.6s 1 normal forwards, text2-animation8 2s ease-in-out 5s 1 normal forwards;
  }
  .text8::after {
    -webkit-animation: text-after-animation8 2s ease-in-out 3s 1 normal forwards;
    animation: text-after-animation8 2s ease-in-out 3s 1 normal forwards;
  }
  @-webkit-keyframes text-animation0 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes text-animation0 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @-webkit-keyframes text-animation1 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes text-animation1 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @-webkit-keyframes text-animation2 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes text-animation2 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @-webkit-keyframes text-animation3 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes text-animation3 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @-webkit-keyframes text-animation4 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes text-animation4 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @-webkit-keyframes text-animation5 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes text-animation5 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @-webkit-keyframes text-animation6 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes text-animation6 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @-webkit-keyframes text-animation7 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes text-animation7 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @-webkit-keyframes text-animation8 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes text-animation8 {
    0% {
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
      transform: scale(3, 3);
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  }
  @-webkit-keyframes text-after-animation0 {
    0% {
      width: 0px;
      background-color: #eb4747;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @keyframes text-after-animation0 {
    0% {
      width: 0px;
      background-color: #eb4747;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text-after-animation1 {
    0% {
      width: 0px;
      background-color: #ebc247;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @keyframes text-after-animation1 {
    0% {
      width: 0px;
      background-color: #ebc247;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text-after-animation2 {
    0% {
      width: 0px;
      background-color: #99eb47;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @keyframes text-after-animation2 {
    0% {
      width: 0px;
      background-color: #99eb47;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text-after-animation3 {
    0% {
      width: 0px;
      background-color: #47eb70;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @keyframes text-after-animation3 {
    0% {
      width: 0px;
      background-color: #47eb70;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text-after-animation4 {
    0% {
      width: 0px;
      background-color: #47ebeb;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @keyframes text-after-animation4 {
    0% {
      width: 0px;
      background-color: #47ebeb;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text-after-animation5 {
    0% {
      width: 0px;
      background-color: #4770eb;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @keyframes text-after-animation5 {
    0% {
      width: 0px;
      background-color: #4770eb;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text-after-animation6 {
    0% {
      width: 0px;
      background-color: #9947eb;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @keyframes text-after-animation6 {
    0% {
      width: 0px;
      background-color: #9947eb;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text-after-animation7 {
    0% {
      width: 0px;
      background-color: #eb47c2;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @keyframes text-after-animation7 {
    0% {
      width: 0px;
      background-color: #eb47c2;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text-after-animation8 {
    0% {
      width: 0px;
      background-color: #eb4747;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @keyframes text-after-animation8 {
    0% {
      width: 0px;
      background-color: #eb4747;
      opacity: 1;
    }
    50% {
      width: 40px;
      opacity: 1;
    }
    100% {
      left: 40px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text2-animation0 {
    0% {
      left: -140px;
      opacity: 1;
    }
    50% {
      left: -100px;
      opacity: 0;
    }
    100% {
      left: -100px;
      opacity: 0;
    }
  }
  @keyframes text2-animation0 {
    0% {
      left: -140px;
      opacity: 1;
    }
    50% {
      left: -100px;
      opacity: 0;
    }
    100% {
      left: -100px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text2-animation1 {
    0% {
      left: -100px;
      opacity: 1;
    }
    50% {
      left: -60px;
      opacity: 0;
    }
    100% {
      left: -60px;
      opacity: 0;
    }
  }
  @keyframes text2-animation1 {
    0% {
      left: -100px;
      opacity: 1;
    }
    50% {
      left: -60px;
      opacity: 0;
    }
    100% {
      left: -60px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text2-animation2 {
    0% {
      left: -60px;
      opacity: 1;
    }
    50% {
      left: -20px;
      opacity: 0;
    }
    100% {
      left: -20px;
      opacity: 0;
    }
  }
  @keyframes text2-animation2 {
    0% {
      left: -60px;
      opacity: 1;
    }
    50% {
      left: -20px;
      opacity: 0;
    }
    100% {
      left: -20px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text2-animation3 {
    0% {
      left: -20px;
      opacity: 1;
    }
    50% {
      left: 20px;
      opacity: 0;
    }
    100% {
      left: 20px;
      opacity: 0;
    }
  }
  @keyframes text2-animation3 {
    0% {
      left: -20px;
      opacity: 1;
    }
    50% {
      left: 20px;
      opacity: 0;
    }
    100% {
      left: 20px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text2-animation4 {
    0% {
      left: 20px;
      opacity: 1;
    }
    50% {
      left: 60px;
      opacity: 0;
    }
    100% {
      left: 60px;
      opacity: 0;
    }
  }
  @keyframes text2-animation4 {
    0% {
      left: 20px;
      opacity: 1;
    }
    50% {
      left: 60px;
      opacity: 0;
    }
    100% {
      left: 60px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text2-animation5 {
    0% {
      left: 60px;
      opacity: 1;
    }
    50% {
      left: 100px;
      opacity: 0;
    }
    100% {
      left: 100px;
      opacity: 0;
    }
  }
  @keyframes text2-animation5 {
    0% {
      left: 60px;
      opacity: 1;
    }
    50% {
      left: 100px;
      opacity: 0;
    }
    100% {
      left: 100px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text2-animation6 {
    0% {
      left: 100px;
      opacity: 1;
    }
    50% {
      left: 140px;
      opacity: 0;
    }
    100% {
      left: 140px;
      opacity: 0;
    }
  }
  @keyframes text2-animation6 {
    0% {
      left: 100px;
      opacity: 1;
    }
    50% {
      left: 140px;
      opacity: 0;
    }
    100% {
      left: 140px;
      opacity: 0;
    }
  }
  @-webkit-keyframes text2-animation7 {
    0% {
      left: 140px;
      opacity: 1;
      top: 0;
      transform: scale(1, 1);
    }
    50% {
      left: 180px;
      opacity: 1;
      transform: scale(1, 1);
    }
    65% {
      top: 0;
      transform: scale(1, 1);
    }
    70% {
      transform: scale(3, 3) rotate(90deg);
      top: -30px;
    }
    75% {
      left: 180px;
      top: 0;
      opacity: 1;
      transform: scale(2, 2) rotate(90deg);
    }
    85% {
      left: 180px;
    }
    100% {
      left: 1000px;
      opacity: 0;
      transform: scale(2, 2) rotate(90deg);
    }
  }
  @keyframes text2-animation7 {
    0% {
      left: 140px;
      opacity: 1;
      top: 0;
      transform: scale(1, 1);
    }
    50% {
      left: 180px;
      opacity: 1;
      transform: scale(1, 1);
    }
    65% {
      top: 0;
      transform: scale(1, 1);
    }
    70% {
      transform: scale(3, 3) rotate(90deg);
      top: -30px;
    }
    75% {
      left: 180px;
      top: 0;
      opacity: 1;
      transform: scale(2, 2) rotate(90deg);
    }
    85% {
      left: 180px;
    }
    100% {
      left: 1000px;
      opacity: 0;
      transform: scale(2, 2) rotate(90deg);
    }
  }
  @-webkit-keyframes text2-animation8 {
    0% {
      left: 180px;
      opacity: 1;
    }
    50% {
      left: 220px;
      opacity: 0;
    }
    100% {
      left: 220px;
      opacity: 0;
    }
  }
  @keyframes text2-animation8 {
    0% {
      left: 180px;
      opacity: 1;
    }
    50% {
      left: 220px;
      opacity: 0;
    }
    100% {
      left: 220px;
      opacity: 0;
    }
  }
  /*
  *frame
  */
  .frame {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    opacity: 0;
  }
  .frame0 {
    left: -140px;
    top: 0;
    -webkit-animation: frame-animation0 1s ease-in-out 0ms 1 normal forwards;
    animation: frame-animation0 1s ease-in-out 0ms 1 normal forwards;
    background-color: #eb4747;
  }
  .frame1 {
    left: -100px;
    top: 0;
    -webkit-animation: frame-animation1 1s ease-in-out 200ms 1 normal forwards;
    animation: frame-animation1 1s ease-in-out 200ms 1 normal forwards;
    background-color: #ebc247;
  }
  .frame2 {
    left: -60px;
    top: 0;
    -webkit-animation: frame-animation2 1s ease-in-out 400ms 1 normal forwards;
    animation: frame-animation2 1s ease-in-out 400ms 1 normal forwards;
    background-color: #99eb47;
  }
  .frame3 {
    left: -20px;
    top: 0;
    -webkit-animation: frame-animation3 1s ease-in-out 600ms 1 normal forwards;
    animation: frame-animation3 1s ease-in-out 600ms 1 normal forwards;
    background-color: #47eb70;
  }
  .frame4 {
    left: 20px;
    top: 0;
    -webkit-animation: frame-animation4 1s ease-in-out 800ms 1 normal forwards;
    animation: frame-animation4 1s ease-in-out 800ms 1 normal forwards;
    background-color: #47ebeb;
  }
  .frame5 {
    left: 60px;
    top: 0;
    -webkit-animation: frame-animation5 1s ease-in-out 1000ms 1 normal forwards;
    animation: frame-animation5 1s ease-in-out 1000ms 1 normal forwards;
    background-color: #4770eb;
  }
  .frame6 {
    left: 100px;
    top: 0;
    -webkit-animation: frame-animation6 1s ease-in-out 1200ms 1 normal forwards;
    animation: frame-animation6 1s ease-in-out 1200ms 1 normal forwards;
    background-color: #9947eb;
  }
  .frame7 {
    left: 140px;
    top: 0;
    -webkit-animation: frame-animation7 1s ease-in-out 1400ms 1 normal forwards;
    animation: frame-animation7 1s ease-in-out 1400ms 1 normal forwards;
    background-color: #eb47c2;
  }
  .frame8 {
    left: 180px;
    top: 0;
    -webkit-animation: frame-animation8 1s ease-in-out 1600ms 1 normal forwards;
    animation: frame-animation8 1s ease-in-out 1600ms 1 normal forwards;
    background-color: #eb4747;
  }
  @-webkit-keyframes frame-animation0 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @keyframes frame-animation0 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @-webkit-keyframes frame-animation1 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @keyframes frame-animation1 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @-webkit-keyframes frame-animation2 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @keyframes frame-animation2 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @-webkit-keyframes frame-animation3 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @keyframes frame-animation3 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @-webkit-keyframes frame-animation4 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @keyframes frame-animation4 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @-webkit-keyframes frame-animation5 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @keyframes frame-animation5 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @-webkit-keyframes frame-animation6 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @keyframes frame-animation6 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @-webkit-keyframes frame-animation7 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @keyframes frame-animation7 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @-webkit-keyframes frame-animation8 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  @keyframes frame-animation8 {
    0% {
      transform: translateY(-1000px);
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
  /*
  *particle
  */
  .particle {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .particle00 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation00 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation00 1s ease-in-out 1s 1 normal forwards;
  }
  .particle01 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation01 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation01 1s ease-in-out 1s 1 normal forwards;
  }
  .particle02 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation02 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation02 1s ease-in-out 1s 1 normal forwards;
  }
  .particle03 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation03 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation03 1s ease-in-out 1s 1 normal forwards;
  }
  .particle04 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation04 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation04 1s ease-in-out 1s 1 normal forwards;
  }
  .particle05 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation05 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation05 1s ease-in-out 1s 1 normal forwards;
  }
  .particle06 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation06 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation06 1s ease-in-out 1s 1 normal forwards;
  }
  .particle07 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation07 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation07 1s ease-in-out 1s 1 normal forwards;
  }
  .particle08 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation08 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation08 1s ease-in-out 1s 1 normal forwards;
  }
  .particle09 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation09 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation09 1s ease-in-out 1s 1 normal forwards;
  }
  .particle010 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation010 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation010 1s ease-in-out 1s 1 normal forwards;
  }
  .particle011 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation011 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation011 1s ease-in-out 1s 1 normal forwards;
  }
  .particle012 {
    left: -140px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation012 1s ease-in-out 1s 1 normal forwards;
    animation: particle-animation012 1s ease-in-out 1s 1 normal forwards;
  }
  .particle10 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation10 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation10 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle11 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation11 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation11 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle12 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation12 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation12 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle13 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation13 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation13 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle14 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation14 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation14 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle15 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation15 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation15 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle16 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation16 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation16 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle17 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation17 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation17 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle18 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation18 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation18 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle19 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation19 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation19 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle110 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation110 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation110 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle111 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation111 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation111 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle112 {
    left: -100px;
    opacity: 0;
    background-color: #ebc247;
    -webkit-animation: particle-animation112 1s ease-in-out 1.2s 1 normal forwards;
    animation: particle-animation112 1s ease-in-out 1.2s 1 normal forwards;
  }
  .particle20 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation20 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation20 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle21 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation21 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation21 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle22 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation22 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation22 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle23 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation23 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation23 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle24 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation24 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation24 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle25 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation25 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation25 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle26 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation26 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation26 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle27 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation27 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation27 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle28 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation28 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation28 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle29 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation29 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation29 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle210 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation210 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation210 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle211 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation211 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation211 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle212 {
    left: -60px;
    opacity: 0;
    background-color: #99eb47;
    -webkit-animation: particle-animation212 1s ease-in-out 1.4s 1 normal forwards;
    animation: particle-animation212 1s ease-in-out 1.4s 1 normal forwards;
  }
  .particle30 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation30 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation30 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle31 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation31 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation31 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle32 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation32 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation32 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle33 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation33 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation33 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle34 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation34 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation34 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle35 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation35 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation35 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle36 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation36 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation36 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle37 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation37 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation37 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle38 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation38 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation38 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle39 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation39 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation39 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle310 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation310 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation310 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle311 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation311 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation311 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle312 {
    left: -20px;
    opacity: 0;
    background-color: #47eb70;
    -webkit-animation: particle-animation312 1s ease-in-out 1.6s 1 normal forwards;
    animation: particle-animation312 1s ease-in-out 1.6s 1 normal forwards;
  }
  .particle40 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation40 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation40 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle41 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation41 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation41 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle42 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation42 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation42 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle43 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation43 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation43 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle44 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation44 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation44 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle45 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation45 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation45 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle46 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation46 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation46 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle47 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation47 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation47 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle48 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation48 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation48 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle49 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation49 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation49 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle410 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation410 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation410 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle411 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation411 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation411 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle412 {
    left: 20px;
    opacity: 0;
    background-color: #47ebeb;
    -webkit-animation: particle-animation412 1s ease-in-out 1.8s 1 normal forwards;
    animation: particle-animation412 1s ease-in-out 1.8s 1 normal forwards;
  }
  .particle50 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation50 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation50 1s ease-in-out 2s 1 normal forwards;
  }
  .particle51 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation51 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation51 1s ease-in-out 2s 1 normal forwards;
  }
  .particle52 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation52 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation52 1s ease-in-out 2s 1 normal forwards;
  }
  .particle53 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation53 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation53 1s ease-in-out 2s 1 normal forwards;
  }
  .particle54 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation54 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation54 1s ease-in-out 2s 1 normal forwards;
  }
  .particle55 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation55 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation55 1s ease-in-out 2s 1 normal forwards;
  }
  .particle56 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation56 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation56 1s ease-in-out 2s 1 normal forwards;
  }
  .particle57 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation57 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation57 1s ease-in-out 2s 1 normal forwards;
  }
  .particle58 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation58 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation58 1s ease-in-out 2s 1 normal forwards;
  }
  .particle59 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation59 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation59 1s ease-in-out 2s 1 normal forwards;
  }
  .particle510 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation510 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation510 1s ease-in-out 2s 1 normal forwards;
  }
  .particle511 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation511 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation511 1s ease-in-out 2s 1 normal forwards;
  }
  .particle512 {
    left: 60px;
    opacity: 0;
    background-color: #4770eb;
    -webkit-animation: particle-animation512 1s ease-in-out 2s 1 normal forwards;
    animation: particle-animation512 1s ease-in-out 2s 1 normal forwards;
  }
  .particle60 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation60 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation60 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle61 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation61 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation61 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle62 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation62 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation62 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle63 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation63 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation63 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle64 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation64 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation64 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle65 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation65 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation65 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle66 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation66 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation66 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle67 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation67 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation67 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle68 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation68 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation68 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle69 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation69 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation69 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle610 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation610 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation610 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle611 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation611 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation611 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle612 {
    left: 100px;
    opacity: 0;
    background-color: #9947eb;
    -webkit-animation: particle-animation612 1s ease-in-out 2.2s 1 normal forwards;
    animation: particle-animation612 1s ease-in-out 2.2s 1 normal forwards;
  }
  .particle70 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation70 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation70 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle71 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation71 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation71 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle72 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation72 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation72 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle73 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation73 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation73 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle74 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation74 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation74 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle75 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation75 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation75 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle76 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation76 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation76 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle77 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation77 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation77 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle78 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation78 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation78 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle79 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation79 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation79 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle710 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation710 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation710 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle711 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation711 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation711 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle712 {
    left: 140px;
    opacity: 0;
    background-color: #eb47c2;
    -webkit-animation: particle-animation712 1s ease-in-out 2.4s 1 normal forwards;
    animation: particle-animation712 1s ease-in-out 2.4s 1 normal forwards;
  }
  .particle80 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation80 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation80 1s ease-in-out 2.6s 1 normal forwards;
  }
  .particle81 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation81 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation81 1s ease-in-out 2.6s 1 normal forwards;
  }
  .particle82 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation82 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation82 1s ease-in-out 2.6s 1 normal forwards;
  }
  .particle83 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation83 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation83 1s ease-in-out 2.6s 1 normal forwards;
  }
  .particle84 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation84 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation84 1s ease-in-out 2.6s 1 normal forwards;
  }
  .particle85 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation85 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation85 1s ease-in-out 2.6s 1 normal forwards;
  }
  .particle86 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation86 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation86 1s ease-in-out 2.6s 1 normal forwards;
  }
  .particle87 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation87 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation87 1s ease-in-out 2.6s 1 normal forwards;
  }
  .particle88 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation88 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation88 1s ease-in-out 2.6s 1 normal forwards;
  }
  .particle89 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation89 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation89 1s ease-in-out 2.6s 1 normal forwards;
  }
  .particle810 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation810 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation810 1s ease-in-out 2.6s 1 normal forwards;
  }
  .particle811 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation811 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation811 1s ease-in-out 2.6s 1 normal forwards;
  }
  .particle812 {
    left: 180px;
    opacity: 0;
    background-color: #eb4747;
    -webkit-animation: particle-animation812 1s ease-in-out 2.6s 1 normal forwards;
    animation: particle-animation812 1s ease-in-out 2.6s 1 normal forwards;
  }
  @-webkit-keyframes particle-animation00 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -40px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation00 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -40px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation01 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -53.39745959999999px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation01 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -53.39745959999999px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation02 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -90px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation02 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -90px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation03 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -140px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation03 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -140px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation04 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -190px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation04 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -190px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation05 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -226.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation05 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -226.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation06 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -240px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation06 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -240px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation07 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -226.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation07 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -226.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation08 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -190px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation08 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -190px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation09 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -140px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation09 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -140px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation010 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -90px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation010 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -90px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation011 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -53.39745959999999px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation011 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -53.39745959999999px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation012 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -40px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation012 {
    0% {
      left: -140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -40px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation10 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 0px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation10 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 0px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation11 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -13.39745959999999px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation11 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -13.39745959999999px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation12 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -50px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation12 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -50px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation13 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -100px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation13 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -100px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation14 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -150px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation14 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -150px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation15 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -186.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation15 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -186.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation16 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -200px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation16 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -200px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation17 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -186.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation17 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -186.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation18 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -150px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation18 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -150px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation19 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -100px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation19 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -100px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation110 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -50px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation110 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -50px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation111 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -13.39745959999999px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation111 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -13.39745959999999px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation112 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 0px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation112 {
    0% {
      left: -100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 0px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation20 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 40px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation20 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 40px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation21 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 26.60254040000001px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation21 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 26.60254040000001px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation22 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -10px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation22 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -10px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation23 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -60px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation23 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -60px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation24 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -110px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation24 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -110px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation25 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -146.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation25 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -146.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation26 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -160px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation26 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -160px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation27 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -146.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation27 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -146.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation28 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -110px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation28 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -110px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation29 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -60px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation29 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -60px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation210 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -10px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation210 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -10px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation211 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 26.60254040000001px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation211 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 26.60254040000001px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation212 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 40px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation212 {
    0% {
      left: -60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 40px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation30 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 80px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation30 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 80px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation31 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 66.60254040000001px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation31 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 66.60254040000001px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation32 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 30px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation32 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 30px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation33 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -20px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation33 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -20px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation34 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -70px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation34 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -70px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation35 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -106.60254040000001px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation35 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -106.60254040000001px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation36 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -120px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation36 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -120px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation37 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -106.60254040000001px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation37 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -106.60254040000001px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation38 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -70px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation38 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -70px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation39 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -20px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation39 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -20px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation310 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 30px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation310 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 30px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation311 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 66.60254040000001px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation311 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 66.60254040000001px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation312 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 80px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation312 {
    0% {
      left: -20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 80px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation40 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 120px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation40 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 120px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation41 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 106.60254040000001px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation41 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 106.60254040000001px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation42 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 70px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation42 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 70px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation43 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 20px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation43 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 20px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation44 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -30px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation44 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -30px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation45 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -66.60254040000001px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation45 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -66.60254040000001px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation46 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -80px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation46 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -80px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation47 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -66.60254040000001px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation47 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -66.60254040000001px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation48 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -30px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation48 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -30px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation49 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 20px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation49 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 20px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation410 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 70px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation410 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 70px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation411 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 106.60254040000001px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation411 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 106.60254040000001px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation412 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 120px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation412 {
    0% {
      left: 20px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 120px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation50 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 160px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation50 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 160px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation51 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 146.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation51 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 146.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation52 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 110px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation52 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 110px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation53 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 60px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation53 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 60px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation54 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 10px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation54 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 10px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation55 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -26.60254040000001px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation55 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -26.60254040000001px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation56 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -40px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation56 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -40px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation57 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -26.60254040000001px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation57 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: -26.60254040000001px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation58 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 10px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation58 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 10px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation59 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 60px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation59 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 60px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation510 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 110px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation510 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 110px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation511 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 146.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation511 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 146.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation512 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 160px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation512 {
    0% {
      left: 60px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 160px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation60 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 200px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation60 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 200px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation61 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 186.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation61 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 186.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation62 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 150px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation62 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 150px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation63 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 100px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation63 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 100px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation64 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 50px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation64 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 50px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation65 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 13.39745959999999px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation65 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 13.39745959999999px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation66 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 0px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation66 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 0px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation67 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 13.39745959999999px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation67 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 13.39745959999999px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation68 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 50px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation68 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 50px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation69 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 100px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation69 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 100px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation610 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 150px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation610 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 150px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation611 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 186.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation611 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 186.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation612 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 200px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation612 {
    0% {
      left: 100px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 200px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation70 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 240px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation70 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 240px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation71 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 226.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation71 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 226.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation72 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 190px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation72 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 190px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation73 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 140px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation73 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 140px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation74 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 90px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation74 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 90px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation75 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 53.39745959999999px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation75 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 53.39745959999999px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation76 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 40px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation76 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 40px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation77 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 53.39745959999999px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation77 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 53.39745959999999px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation78 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 90px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation78 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 90px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation79 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 140px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation79 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 140px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation710 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 190px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation710 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 190px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation711 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 226.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation711 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 226.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation712 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 240px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation712 {
    0% {
      left: 140px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 240px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation80 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 280px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation80 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 280px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation81 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 266.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation81 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 266.6025404px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation82 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 230px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation82 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 230px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation83 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 180px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation83 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 180px;
      top: 100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation84 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 130px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation84 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 130px;
      top: 86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation85 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 93.39745959999999px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation85 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 93.39745959999999px;
      top: 50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation86 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 80px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation86 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 80px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation87 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 93.39745959999999px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation87 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 93.39745959999999px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation88 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 130px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation88 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 130px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation89 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 180px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation89 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 180px;
      top: -100px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation810 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 230px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation810 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 230px;
      top: -86.60254040000001px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation811 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 266.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation811 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 266.6025404px;
      top: -50px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes particle-animation812 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 280px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @keyframes particle-animation812 {
    0% {
      left: 180px;
      top: 0;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      left: 280px;
      top: 0px;
      opacity: 1;
      transform: scale(0, 0);
    }
  }
  @-webkit-keyframes background-animation {
    0% {
      width: 0;
    }
    50% {
      width: 12.5%;
      opacity: 1;
    }
    100% {
      opacity: 0;
      width: 25%;
    }
  }
  @keyframes background-animation {
    0% {
      width: 0;
    }
    50% {
      width: 12.5%;
      opacity: 1;
    }
    100% {
      opacity: 0;
      width: 25%;
    }
  }
`;
