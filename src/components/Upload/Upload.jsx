import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImAttachment } from "react-icons/im";
import "./upload.css";
// import { RiDeleteBin5Line } from "react-icons/ri";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Upload() {
  /**
   *  @param {React.ChangeEvent<HTMLInputElement>} e
   */

  const [files, setFiles] = useState([]);

  // const handleInput = async (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   file.isUploading = true;
  //   setFiles([...files, file]);

  //   // upload file

  //   const formData = new FormData();
  //   formData.append(file.name, file, file.name);

  //   axios
  //     .post("http://localhost:8080/upload", formData)
  //     .then((res) => {
  //       file.isUploading = false;
  //       setFiles([...files, file]);
  //     })
  //     .catch((err) => {
  //       //inform the user
  //       console.log("Error message", err);
  //       removeFile(file.name);
  //     });
  // };

  //remove files

  // const removeFile = (filename) => {
  //   setFiles(files.filter((file) => file.name !== filename));
  // };

  const handleInput = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    file.isUploading = true;
    setFiles([...files, file]);
    // console.log("FILES", file);
    const data = new FormData();
    data.append("file", file);
    /**
     * set is uploading=true after fetch request to show to
     * here comes the fetch axios...
     */
  };

  const removeFile = (item) => {
    const arr = files.filter((x) => x.name !== item.name);
    setFiles(arr);
  };

  useEffect(() => {
    console.log("TEST!!");
  }, [files]);

  console.log(files);
  return (
    <div className="upload-container">
      <div className="border">
        <div className="box">
          <p>Drag and drop upload file or import file from your computer</p>
          <form action="">
            <input
              onChange={handleInput}
              type="file"
              id="file"
              name="file"
              hidden="hidden"
              multiple
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
          {files.map((item) => (
            <div className="box-items">
              <p>{item.name}</p>
              <DeleteOutlineIcon
                onClick={() => removeFile(item)}
                className="delete-icon"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
