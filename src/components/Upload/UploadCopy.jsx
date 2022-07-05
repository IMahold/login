import React, { useEffect, useState } from "react";
import { ImAttachment } from "react-icons/im";
import "./upload.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import { UPLOAD_URL } from "../../api/api";

export default function UploadCopy() {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState([]);
  // const [isFilePicked, setIsFilePicked] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const uploadHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    file.isUploading = true;
    setSelectedFile([...selectedFile, file]);
    console.log("File is", file);

    //upload file
    const formData = new FormData();
    formData.append(file.name, file, file.name);
    console.log("FormData is", formData);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      );
    } catch (error) {
      console.log("upload Error", error.message);
    }
  };

  // const onFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedFile([...selectedFile, file]);
  //   setIsFilePicked(true);
  // };

  // console.log("Selected file is", selectedFile);

  // const handleSubmission = async () => {
  //   const formData = new FormData();

  //   formData.append("File", selectedFile);
  //   console.log("Form DATA is", formData);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/upload",
  //       formData,
  //       {
  //         // body: formData,
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //         onUploadProgress: (progressEvent) => {
  //           const progress = (progressEvent.loaded / progressEvent.total) * 50;
  //           setProgress(progress);
  //           // setProgress([...progress, progress]);
  //         },
  //       }
  //     );
  //     console.log("Response is", response);
  //     return { isSuccess, progress };
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const removeFile = (item) => {
    const arr = selectedFile.filter((x) => x.name !== item.name);
    setSelectedFile(arr);
  };

  return (
    <>
      <div className="upload-container">
        <div className="border">
          <div className="box">
            <p>Drag and drop upload file or import file from your computer</p>
            <form onSubmit={onSubmit}>
              <input
                onChange={uploadHandler} // HANDLE INPUT !!!
                type="file"
                id="file"
                name="file"
                hidden
                multiple
                // accept=".json,.xmp"
              />
              <label className="button" htmlFor="file">
                <ImAttachment className="attach-icon" />
                Browse
              </label>
            </form>
          </div>
        </div>

        <div className="uploaded">
          <div className="uploaded-items">
            <p className="upload-p">Uploaded</p>

            {selectedFile.map((item, idx) => (
              <>
                <div key={idx} className="box-items">
                  <p>{item.name}</p>
                  <DeleteOutlineIcon
                    onClick={() => removeFile(item)}
                    className="delete-icon"
                  />
                </div>
                <LinearProgress variant="determinate" value={item.progress} />
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  {`${Math.round(item.progress)}%`}
                </Typography>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
