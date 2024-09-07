import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import ItemSelection from './components/ItemSelection';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/login" component={Login} />
            <Route path="/menu" component={Menu} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/item-selection" component={ItemSelection} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
