import React from 'react';
import CityList from './City';
import StoreProvider from './Context';
import './App.css';

const App: React.FC = () => (
  <StoreProvider>
    <div className="App">
      <header className="App-header">
        <CityList />
      </header>
    </div>
  </StoreProvider>
);

export default App;