import { useState } from 'react';
import axios from 'axios';

export default function Recon() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!file) {
      console.error('No file selected');
      return;
    }
  
    const formData = new FormData();
    formData.append('upload_file', file);
  
    try {
      const response = await axios.post('/api/shazam', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <h1>Shazam API Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".mp3" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
