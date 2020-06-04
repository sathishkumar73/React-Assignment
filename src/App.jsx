import React from "react";
import "./styles.css";
import Header from "./Components/Header.jsx";
import Login from "./Components/Login.jsx";
import useFullPageLoader from "./Components/Hooks/usePageLoader";

function App() {
  let [loader, showLoader, hideLoader] = useFullPageLoader();
  return (
    <div className="App">
      <Header />
      <Login callback={value => (value ? showLoader() : hideLoader())} />
      {loader}
    </div>
  );
}

export default App;
