import React from 'react';
import Profile from './profile/Profile'
import './App.css';

const handleNameFunc = (name) => alert(name)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile fullName="Hatem MAALEJ" bio="Aaaaaa" profession="Engineer" handleName={handleNameFunc}>
          <img src="/Hatem.png" alt="Hatem's Photo" width="200px" style={{ margin: 20 + 'px' }} />
        </Profile>
      </header>
    </div>
  );
}

export default App;
