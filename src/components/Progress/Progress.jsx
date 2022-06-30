import React, { useState } from "react";
import axios from "axios";

import LinearProgress from "@mui/material/LinearProgress";

import Box from "@mui/material/Box";

export default function LinearProgressWithLabel() {
  const [files, setFiles] = useState("");
  // const [filename, setFilename] = useState("Choose File");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");

  // const onChange = (e) => {
  //   setFile(e.target.files[0]);
  //   setFilename(e.target.files[0].name);
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    file.isUploading = true;
    setFiles([...files, file]);

    //upload file
    const formData = new FormData();
    formData.append(file.name, file, file.name);

    // axios
    //   .post("http://localhost:3000/upload", formData)
    //   .then((res) => {
    //     file.isUploading = false;
    //     setFiles([...files, file]);
    //   })
    //   .catch((err) => {
    //     console.log("Error", err);
    //   });
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <form onSubmit={onSubmit}>
        <input type="file" hidden />
        <label htmlFor="file">Upload</label>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={uploadPercentage} />
          </Box>
        </Box>
      </form>
    </div>
  );
}
