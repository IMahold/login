import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Typography from "@mui/material/Typography";
// import LinearProgress from "@mui/material/LinearProgress";
import { UPLOAD_URL } from "../../api/api";
import { CREATE_SESS_URL } from "../../api/api";
import { MyContext } from "../Context";
import { UploadFile } from "@mui/icons-material";
import FilesProgress from "../FilesProgress/FilesProgress";
import UploadContainer from "./UploadContainer";

export default function Uploadcopy() {
  /**
   *  @param {React.ChangeEvent<HTMLInputElement>} e
   */

  const { user, setUser, id, setID } = useContext(MyContext);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  // create an object

  // const objArr = [
  //   {
  //     selectedFiles1: 100,
  //   },
  //   {
  //     selectedFiles2: 100,
  //   },
  //   {
  //     selectedFiles3: 5,
  //   },
  //   {
  //     selectedFiles4: 20,
  //   },
  // ];
  const [progress, setProgress] = useState([]);
  // const [email, setEmail] = useState(""); // email target

  // const [selectedFiles, setSelectedFiles] = useState(undefined);

  // useEffect(() => {
  //   async function upload() {
  //     const url = await handleInput(selectedFiles, setProgress);
  //     console.log("URL is", url);
  //   }

  //   upload();
  //   console.log("Upload is", upload);
  // }, []);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFiles);
  };

  const handleInput = (e) => {
    setSelectedFiles(e.target.files[0]);
    setIsSuccess(true);
    // selectedFiles(e.target.files[0]);
    // const file = e.target.files[0];
    // if (!file) {
    //   return;
    // }
    // file.isUploading = true;
    // setSelectedFiles([...selectedFiles, file]);
    // const data = new FormData();
    // data.append("file", file);
    // console.log("FormData is", [...data]);
  };

  // useEffect(() => {}, [selectedFiles]);

  //remove files
  const removeFile = (item) => {
    const arr = selectedFiles.filter((x) => x.name !== item.name);
    setSelectedFiles(arr);
  };

  console.log("Selected files are", selectedFiles);
  // console.log("Test !!!!");

  return (
    <>
      <div className="upload-container">
        <UploadContainer onSubmit={submitForm} onChange={handleInput} />

        <div className="uploaded">
          <div className="uploaded-items">
            <p className="upload-p">Uploaded</p>

            {selectedFiles.map((item, idx) => (
              <FilesProgress
                removeFile={removeFile}
                progress={progress}
                idx={idx}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
