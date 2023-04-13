import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Layout from './components/layout';
import Contact from './pages/contact';
import Download from './pages/download';
import HomePage from './pages/homePage';
import Keyword from './pages/keywords';
import LandingPage from './pages/landingPage';
import ResultTable from './pages/resultTable';
import Submit from './pages/submit';
import Blast from './pages/blast';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/browse-keywords" element={<Keyword />} />
          <Route path="/browse-blast" element={<Blast />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      
    </Router>
  );
}

export default App;
