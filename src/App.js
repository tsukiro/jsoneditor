import './App.css';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import React, { useState } from 'react';
import { Upload } from './components/Upload/Upload';

function App() {

  const [descriptions, setDescription] = useState([]);
  const downloadFile = async () => {
    const fileName = "file";
    const json = JSON.stringify(descriptions);
    const blob = new Blob([json],{type:'application/json'});
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleChange = (data) => {setDescription(data); };
  if (descriptions && descriptions !== ""){   
    return (
      <div className="App">
          <Editor
            value={descriptions}
            onChange={handleChange}
          />
          <button
            onClick={() => downloadFile()}>{"Descargar JSON"}
          </button>
      </div>
    );
  }else{
    return (<Upload onUploadFile={(data) => setDescription(data) } />)
  }
}

export default App;
