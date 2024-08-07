import React from "react";

function DownloadButton({ onClick, className, children }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default DownloadButton;
