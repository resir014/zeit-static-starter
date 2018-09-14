import * as React from 'react';
import styled, { keyframes } from 'react-emotion';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <AppRoot>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </AppIntro>
      </AppRoot>
    );
  }
}

export default App;

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppRoot = styled('div')`
  text-align: center;
`;

const AppHeader = styled('header')`
  background-color: #222;
  height: 180px;
  padding: 20px;
  color: white;
`;

const AppLogo = styled('img')`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`;

const AppTitle = styled('h1')`
  font-size: 1.5em;
`;

const AppIntro = styled('p')`
  font-size: large;
`;
