import { useState } from 'react';
import Editor from '@monaco-editor/react';

import './App.css';

function App() {
  const [codigo, setCodigo] = useState<string | undefined>('// Hello, World!');
  const [linguagem, setLinguagem] = useState<string>('javascript');

  return (
    <div className="ide-container">
      
      {/* (Header) */}
      <div className="ide-header">
        <h2 className="ide-title">Coday</h2>
        
        {/* Linguage dropdown */}
        <select 
          className="language-selector"
          value={linguagem} 
          onChange={(e) => setLinguagem(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="html">HTML</option>
        </select>
      </div>

      {/* Monaco Editor container  */}
      <div className="editor-container">
        <Editor
          height="100%"
          theme="vs-dark"
          language={linguagem}
          value={codigo}
          onChange={(value) => setCodigo(value)}
          options={{
            minimap: { enabled: false },
            fontSize: 16,
            wordWrap: 'on'
          }}
        />
      </div>

    </div>
  );
}

export default App;