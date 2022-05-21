import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
     <div className="container">
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/movie/:imdbID" element={<MovieDetail/>} />
     <Route element={<PageNotFound/>} />
     </Routes>
     </div>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
