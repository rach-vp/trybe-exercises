import React  from 'react';
import Task from './Component';
import './App.css';

const hardSkills = ['HTML', 'CSS', 'JavaScript', 'Jest'];

function App() {
  return (
    <div className="App">
      <h1>What I've learned so far?</h1>
      <ul>
       { hardSkills.map(skill => <Task value={skill}/>) }
      </ul>
    </div>
  );
}

export default App;
