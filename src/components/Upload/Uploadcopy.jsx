import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImAttachment } from "react-icons/im";
import "./upload.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { UPLOAD_URL } from "../../api/api";

export default function Uploadcopy() {
  /**
   *  @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const [files, setFiles] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  const [selectedFiles, setSelectedFiles] = useState(undefined);

  const submitForm = (e) => {
    e.preventDefault();
  };

  const handleInput = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    file.isUploading = true;
    setFiles([...files, file]);
    const data = new FormData();
    data.append("file", file);
    console.log("FormData is", [...data]);

    await axios
      .post(
        UPLOAD_URL,
        {
          email: "m.umer@fenris-group.com",
          sessionId: "1657187512",
          fileName: "file1.json",
        },
        {
          headers: {},
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (100 * progressEvent.loaded) / progressEvent.total
            );
            console.log("Progress is ", progress);
            setProgress(progress);
          },
        }
      )
      .then(async (res) => {
        // res.data
        console.log("asdqweqwe", res.data);
        const myHeaders = new Headers({ "Content-Type": file.type });
        await fetch(res.data, {
          method: "PUT",
          headers: myHeaders,
          body: file,
        });
      })
      .catch((err) => {
        console.log("Error upload", err);
      });
    setIsSuccess(true);
    // return { isSuccess, progress };
  };

  //remove files
  const removeFile = (item) => {
    const arr = files.filter((x) => x.name !== item.name);
    setFiles(arr);
  };

  useEffect(() => {}, []);

  // console.log("Files are", files);
  return (
    <>
      <div className="upload-container">
        <div className="border">
          <div className="box">
            <p>Drag and drop upload file or import file from your computer</p>
            <form onSubmit={submitForm}>
              <input
                onChange={handleInput} // HANDLE INPUT !!!
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
            {files.map((item, idx) => (
              <>
                <div key={item} className="box-items">
                  <p>{item.name}</p>
                  <DeleteOutlineIcon
                    onClick={() => removeFile(item)}
                    className="delete-icon"
                  />
                </div>
                <LinearProgress variant="determinate" value={progress} />
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  {`${Math.round(progress)}%`}
                </Typography>
                {/* <LinearProgressWithLabel value={progress} />
                <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography> */}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
