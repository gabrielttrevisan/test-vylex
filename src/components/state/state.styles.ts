import styled from 'styled-components'

export const StatePath = styled.path<{ title: string }>`
  fill: #b0e0e6;
  transition: all 0.4s ease-out;
  cursor: pointer;
  transform-origin: center center;
  transform: scale(1);
  stroke-width: 0;
  animation-name: pop;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-play-state: running;
  animation-duration: 0.15s;

  &:hover {
    fill: #ffe4b5;
    stroke: #ffe4b5;
    stroke-width: 6px;
  }

  @keyframes pop {
    0% {
      transform: scale(0);
    }
    90% {
      transform: scale(1.09);
    }
    100% {
      transform: scale(1);
    }
  }
`
