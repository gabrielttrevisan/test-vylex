import styled from 'styled-components';

export const DrawerOverlay = styled.div`
  background-color: #00000066;
  backdrop-filter: blur(2px);

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  align-items: stretch;
  justify-content: flex-end;

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  animation-name: fade-in;
  animation-duration: 0.16s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
`

export const DrawerPaper = styled.div`
  background-color: #eeeeeeef;
  backdrop-filter: blur(6px);

  width: 600px;
  height: 100vh;
  box-sizing: border-box;
  padding: 4rem;

  @keyframes slide-in {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  animation-name: slide-in;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
`

export const StateCode = styled.span`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #4a959e;
`

export const StateName = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
  color: #333333;
  margin-top: -0.2rem;
`

export const DailyWeatherCard = styled.div`
  background: #eee;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;

  &> div:first-child {
    font-size: 0.8rem;
    font-weight: 500;
    color: #333;
  }
`
