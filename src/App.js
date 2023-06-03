import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartSeite from './Seiten/StartSeite';
import HeaderComponent from './Komponenten/HeaderComponent';
import FooterComponent from './Komponenten/FooterComponent'

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
          <Route exact path="/" component={StartSeite} />
          {/* Weitere Routen für andere Seiten */}
        </Routes>

        <FooterComponent />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;