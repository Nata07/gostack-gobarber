import React from 'react';
import GlobalStyles from './styles/global';
import logo from './assets/download.png';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './pages/Footer';

const App: React.FC = () => (
  <>
    {/* <SignIn/> */}
    <SignUp/>
    <GlobalStyles />

  </>
)

export default App;
