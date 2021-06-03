import './App.css';
import React, { useState } from 'react';
import { Upload } from './components/Upload/Upload';
import { Editor } from './components/Editor/Editor';

function App() {

  const [descriptions, setDescription] = useState("");

  if (descriptions && descriptions !== ""){   
    return (
      <div className="App">
          <Editor incomingDescriptions={descriptions} />
      </div>
    );
  }else{
    return (
      <div className="App"><Upload onUploadFile={(data) => setDescription(data) } /></div>)
  }
}

export default App;
