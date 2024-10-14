import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./pages/button";
import Form from "./pages/form";
import Calculator from "./pages/calculator";
const login = () => {
  return (
    <>
      <Form />
      <Calculator />
      <Button />
    </>
  );
};

export default login;
