import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import TheLayout from './views/Pages/TheLayout';
import { PersistGate } from 'redux-persist/integration/react'
import persister, { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}></Provider>
        <PersistGate loading={null} persistor={persister}>
          <BrowserRouter>
            <TheLayout></TheLayout>
          </BrowserRouter>
        </PersistGate>
      
      
    </div>
  );
}

export default App;
