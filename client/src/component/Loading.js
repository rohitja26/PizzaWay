import React from "react";

export default function Loading() {
  return (
    <div>
      <div
        className="spinner-border"
        role="status"
        style={{ height: "50px", width: "50px", marginTop: "100px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
