import React from 'react';
import './App.css';
import ApiCall from './Components/ApiCall';
import Categories from './Components/Categories';
import Creators from './Components/Creators';
import Footer from './Components/Footer';
import Header from'./Components/Header'
import News from './Components/News';
import Sale from './Components/Sale';
import Summary from './Components/Summary';
import Trending from './Components/Trending';
import Work from './Components/Work';
function App() {
  return (
    <>
     <Header/>
     <Summary/>
     <Trending />
     <Creators />
     <Categories />
     <Sale />
     <Work />
     <ApiCall />
     <News />
     <Footer />
    </>
  );
}

export default App;