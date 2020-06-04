import React from "react";
import Spinner from "../Resources/infinity.gif";

export default function FullPageLoader() {
  return (
    <div className="fp-container">
      <img src={Spinner} alt="Loading" className="fp-loader" />
    </div>
  );
}
