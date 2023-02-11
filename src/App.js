import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurantlist from './components/Restaurantlist';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ViewRest from './components/ViewRest';

function App() {
  return (
    <div className="App">

     <Router>
     <Header/>

      <Routes>   
        {/* path setting for restaurant list */}
        <Route path='/' element={<Restaurantlist/>}/>

        {/* path setting for view restaurant */}
        <Route path='/View-restaurant/:id' element={<ViewRest/>}/>





       
       </Routes>

      <Footer/>
      </Router>

    </div>
  );
}

export default App;
