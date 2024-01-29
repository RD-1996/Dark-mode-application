import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import {ThemeProvider} from "./themeContext"

const App = () => {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/about" element={<About />}/>
      <Route path ="/blog" element={<Blog />}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App