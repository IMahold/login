import React, { useState } from "react";
import { ImAttachment } from "react-icons/im";
import "./upload.css";

export default function Upload() {
  /**
   *  @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleInput = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    console.log("FILES", file);
    const data = new FormData();
    data.append("file", file);
    /**
     * set is uploading=true after fetch request to show to
     * here comes the fetch axios...
     */
  };
  return (
    <div className="upload-container">
      <div className="box">
        <p>Drag and drop upload file or import file from your computer</p>

        <input
          onChange={handleInput}
          type="file"
          id="file"
          name="file"
          hidden="hidden"
        />
        <label className="button" htmlFor="file">
          <ImAttachment className="attach-icon" />
          Browse
        </label>
      </div>
    </div>
  );
}
