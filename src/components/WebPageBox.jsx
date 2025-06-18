import React from "react";

const WebPageBox = ({ url }) => {
  return (
    <div
      style={{
        width: "800px",
        height: "600px",
        border: "2px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        margin: "auto",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <iframe
        src={url}
        title="Coding Profile"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        
      />
    </div>
  );
};

export default WebPageBox;
