import React from 'react';
import './App.css';
import { ManikinPane } from './ContainerManikinPane';
import { MainArea } from './ContainerMainArea';
import { MegaProvider } from './MegaContext';
import MegaTheme from './MegaTheme';
import { ThemeProvider } from '@material-ui/core';

export const App: React.FC = (): React.ReactElement => {
  return (
    <div className='App'>
      <MegaProvider>
        <ThemeProvider theme={MegaTheme}>
          <ManikinPane></ManikinPane>
          <MainArea></MainArea>
        </ThemeProvider>
      </MegaProvider>
    </div>
  );
};
