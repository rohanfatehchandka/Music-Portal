// import { useState } from 'react';
// import axios from 'axios';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default function Shazam() {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('upload_file', file);
//     console.log("Inside recon")
//     const options = {
//       method: 'POST',
//       url: 'https://shazam-api6.p.rapidapi.com/shazam/recognize/',
//       headers: {
//         'X-RapidAPI-Key': '778f33a79emsh0a59a326c68d68dp1eea41jsn1f82a19e5412',
//         'X-RapidAPI-Host': 'shazam-api6.p.rapidapi.com',
//         'Content-Type': 'multipart/form-data',
//       },
//       data: formData,
//     };

//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Shazam API Upload</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="file" accept=".mp3" onChange={handleFileChange} />
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// }
import { useState } from 'react';
import axios from 'axios';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function Shazam() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('upload_file', file);

    const options = {
      method: 'POST',
      url: 'https://shazam-api6.p.rapidapi.com/shazam/recognize/',
      headers: {
        'X-RapidAPI-Key': '2NXpXxCJSHmshQc6rgBxJAngB5Orp14ok76jsnb9XUcWR0VGFt',
        'X-RapidAPI-Host': 'shazam-api6.p.rapidapi.com',
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    };
    console.log("Inside recon")
    try {
      const response = await axios.request(options);
      console.log(response.data);
      console.log(response.data.track.title);
      console.log(response.data.track.subtitle);
      if (response.data && response.data.track && response.data.track.title && response.data.track.subtitle) {
        setTitle(response.data.track.title);
        setSubtitle(response.data.track.subtitle);
      }
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
      {/* {title && subtitle && (
        <div>
          <h2>Title: {title}</h2>
          <h3>Subtitle: {subtitle}</h3>
        </div>
      )} */}

      <div>

      </div>
    </div>
  );
}
