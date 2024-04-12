import React, { useState } from 'react';

import './App.css';

function App() {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <input type="file" accept=".jpg,.jpeg,.png" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;
