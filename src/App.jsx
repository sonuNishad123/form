// src/App.js
import React from 'react';
import Form from './Form';


const App = () => {
  return (
    <div className='bg-red-950 h-full w-full'>
      <h1 className="text-3xl font-bold mb-4 flex justify-center text-white ">Registration form</h1>
      <Form />
    </div>
  );
};

export default App;