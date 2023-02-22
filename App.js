
import './App.css';
import Nacht from './components/Nacht';
import Tag from './components/tag'
import React,{useState} from 'react';
function App() {
  const [tag, setTag] = useState(false);
  return (
    <div className="App">
      <button onClick={()=>setTag(!tag)}>switch</button>
      {tag? <Tag /> :  <Nacht />}
    </div>
  );
}

export default App;
