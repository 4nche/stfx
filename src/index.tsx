import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from 'styles/globalStyle'
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import "@fontsource/roboto-mono";
import { Provider } from 'react-redux';
import { store } from 'state/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
