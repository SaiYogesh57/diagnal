import './App.css';
import React, { Suspense } from 'react';
import NavBar from './components/navbar/index';
const ListingPage=React.lazy(()=>import('./components/ListingPage/index'))



function App() {
  return (
    <div className="App">
     
      <NavBar />
      <Suspense fallback={<div>Loading</div>}>
      <ListingPage/>
      </Suspense>

    </div>
  );
}

export default App;
