import axios from "axios";
import fs from "fs";
import FormData from "form-data";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = new FormData();
    data.append("upload_file", req.body);

    const options = {
      method: "POST",
      url: "https://shazam-api6.p.rapidapi.com/shazam/recognize/",
      headers: {
        "X-RapidAPI-Key": "02acf94f18mshe3df020214f486bp197ecfjsn52387519130b",
        "X-RapidAPI-Host": "shazam-api6.p.rapidapi.com",
        ...data.getHeaders(),
      },
      data: data,
    };

    try {
      const response = await axios.request(options);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
