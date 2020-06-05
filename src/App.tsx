import React from 'react';
import GlobalStyles from './styles/global';
import logo from './assets/download.png';
import SignIn from './pages/SignIn';
import Footer from './pages/Footer';

const App: React.FC = () => (
  <>
    <SignIn/>
    <GlobalStyles />

  </>
)

export default App;
