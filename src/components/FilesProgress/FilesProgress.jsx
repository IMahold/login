import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Typography from "@mui/material/Typography";

export default function FilesProgress({ removeFile, item, progress, idx }) {
  return (
    <div>
      <div key={idx} className="box-items">
        <p>{item.name}</p>
        <DeleteOutlineIcon
          onClick={() => removeFile(item)}
          className="delete-icon"
        />
      </div>
      <LinearProgress variant="determinate" value={progress} />
      <Typography variant="caption" component="div" color="text.secondary">
        {`${Math.round(progress)}%`}
      </Typography>
    </div>
  );
}
