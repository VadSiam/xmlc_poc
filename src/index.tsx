import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Container, CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#92a8d1',
      main: '#89abe3',
      dark: '#4e6186',
      contrastText: '#000',
    },
    secondary: {
      light: '#f6b7cb',
      main: '#f49ac2',
      dark: '#9f617a',
      contrastText: '#000',
    },
    background: {
      paper: '#ffffff',
      default: '#f4f5f7',
    },
  },
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Container maxWidth="md">
            <App />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

