import React, { useState } from "react";
import { ImAttachment } from "react-icons/im";
import "./upload.css";

export default function Upload() {
  return (
    <div className="upload-container">
      <div className="box">
        <p>Drag and drop upload file or import file from your computer</p>

        <input type="file" id="file" name="file" hidden="hidden" />
        <label className="button" htmlFor="file">
          <ImAttachment className="attach-icon" />
          Browse
        </label>
      </div>
    </div>
  );
}
