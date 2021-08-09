import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Todo from './component/Todo';
import { useState } from 'react';


function App() {

  return (
    <div>
      {/* header section */}
      <Header/>

      {/* todo section */}
      <Todo/>
      
      {/* footer section */}
      <Footer/>
    </div>
  );
}

export default App;
