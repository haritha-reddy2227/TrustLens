import React from "react";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h2>TrustLens</h2>
      <div>v0.1</div>
    </header>
  );
}
