import React from "react";
import NavBar from "../components/navbar/NavBar";

export default function Homepage() {
  return (
    <>
      {/* only on this page */}
      <NavBar />

      <main style={{ paddingTop: "4.5rem" }}>
        <h1>Welcome to My Site</h1>
        {/* …rest of your homepage */}
      </main>
    </>
  );
}
