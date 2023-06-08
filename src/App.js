import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StartSeite from './Seiten/StartSeite';
import Feed from './Seiten/Feed';
import Einreichen from './Seiten/Einreichen';
import IhreIdeen from './Seiten/IhreIdeen'
import HeaderComponent from './Komponenten/HeaderComponent';
import FooterComponent from './Komponenten/FooterComponent';

function App() {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<StartSeite />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/submit" element={<Einreichen/>} />
          <Route path="/my-ideas" element={<IhreIdeen/>} />
          {/* Weitere Routen für andere Seiten */}
        </Routes>

        <FooterComponent />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
