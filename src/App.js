import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StartSeite from './Seiten/StartSeite';
import Feed from './Seiten/Feed';
import Einreichen from './Seiten/Einreichen';
import IhreIdeen from './Seiten/IhreIdeen';
import Impressum from './Seiten/Impressum';
import Datenschutz from './Seiten/Datenschutz';
import HeaderComponent from './Komponenten/HeaderComponent';
import FooterComponent from './Komponenten/FooterComponent';

function App() {
  const [ideas, setIdeas] = useState([]);

  const handleIdeaSubmit = (newIdea) => {
    console.log('Neue Idee:', newIdea);
    setIdeas([...ideas, newIdea]);
  };

  const handleIdeaDelete = (ideaId) => {
    const updatedIdeas = ideas.filter((idea) => idea.id !== ideaId);
    setIdeas(updatedIdeas);
  };

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
          <Route
            path="/submit"
            element={<Einreichen onIdeaSubmit={handleIdeaSubmit} />}
          />
          <Route
            path="/my-ideas"
            element={<IhreIdeen ideas={ideas} onDelete={handleIdeaDelete} />}
          />
          <Route path="/Impressum" element={<Impressum />} />
          <Route path="/Datenschutz" element={<Datenschutz />} />
          {/* Weitere Routen für andere Seiten */}
        </Routes>

        <FooterComponent />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

