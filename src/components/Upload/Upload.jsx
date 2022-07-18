import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { ImAttachment } from "react-icons/im";
import "./upload.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { UPLOAD_URL } from "../../api/api";
import { CREATE_SESS_URL } from "../../api/api";
import { MyContext } from "../Context";

export default function Upload() {
  /**
   *  @param {React.ChangeEvent<HTMLInputElement>} e
   */

  const { user, setUser, id, setID } = useContext(MyContext);

  const [files, setFiles] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [email, setEmail] = useState(""); // email target

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
    // console.log("FormData is", [...data]);

    // POST: createSession
    // try {
    //   const response = await axios.post(CREATE_SESS_URL, {
    //     email: user,
    //   });
    //   console.log("Response is", response);
    // } catch (error) {
    //   console.log("Login Error !!!", error);
    // }

    // console.log("email", email);

    // POST: createSession
    try {
      const response = await axios.post(CREATE_SESS_URL, {
        email: email,
      });
      console.log("Response", response.data);
      if (response.status === 200) {
        console.log("TEST 1 ");
      } else {
        console.log("TEST 2 ");
      }
      console.log("Response is", response);
      const sessionId = response.body;
      console.log("Session Id", sessionId);
    } catch (error) {
      console.log("Login Error !!!", error);
    }

    await axios
      .post(
        UPLOAD_URL,
        {
          // email: user,
          // sessionId: id,
          // fileName: file,
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
        console.log("Response data", res.data);
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

    // PUT file as binary in request body

    // try {
    //   const response = await axios.post(UPLOAD_URL, {
    //     email,
    //     sessionId,
    //     fileName

    //   });
    //   console.log("Response is", response);
    //     const uploadFileURL = response.body

    //    if (response.status === 200) {
    //     history.push("/upload");
    //   } else alert("File is not uploaded");

    // } catch (error) {
    //   console.log("Login Error !!!", error);
    // }
    // };

    // PUT file as binary in request body

    const myHeaders = new Headers({ "Content-Type": files.type });
    await fetch(
      "https://vf3hmbf48f.execute-api.eu-central-1.amazonaws.com/v1/createUser",
      {
        method: "PUT",
        headers: myHeaders,
        body: files,
      }
    );

    setIsSuccess(true);
  };

  //remove files
  const removeFile = (item) => {
    const arr = files.filter((x) => x.name !== item.name);
    setFiles(arr);
  };

  useEffect(() => {
    console.log("TEST!!");
  }, []);

  console.log("Files are", files);
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
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
