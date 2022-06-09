import React from 'react'
import './App.css';
import Header from './componets/Header';
import NodeList from './componets/NotesList'
import Footer from './componets/Footer';
import AboutPage from './componets/About/AboutPage';
import PageNotFound from './componets/PageNotFound/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        < Header />
        <Routes basename='/notes/'>
          <Route exact path="/" element={<NodeList/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        < Footer />
      </div>
    </Router>
  );
}

export default App;
