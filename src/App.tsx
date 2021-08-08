import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Todo from './component/Todo';
import { useState } from 'react';


function App() {

  return (
    <div>
      {/* header section */}
      <Header></Header>

      {/* todo section */}
      <Todo></Todo>
      
      {/* footer section */}
      <Footer></Footer>
    </div>
  );
}

export default App;
