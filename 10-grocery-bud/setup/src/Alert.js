import React, { useEffect } from "react";

//showAlert() did not pass in any parameters, return to default value
const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
