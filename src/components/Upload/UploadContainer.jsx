import React from "react";
import { ImAttachment } from "react-icons/im";
import "./upload.css";

export default function UploadContainer({ submitForm, handleInput }) {
  return (
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
  );
}
