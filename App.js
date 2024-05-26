import React from 'react';
import './App.css';

function App() {
  const showAlert = () => {
    alert('Botão clicado!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={showAlert}>Clique aqui</button>
      </header>
    </div>
  );
}

export default App;
