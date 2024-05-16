import httpClient from "@/Utils/httpClient";
import { useState } from "react";

const useRData = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  // const [showModal, setShowModal] = useState(false)

  //   const valueIsValid = validateValue(inputState.value);
  //   const hasError = !valueIsValid && inputState.isTouched;

  const fetchData = async (url) => {
    try {
      const response = await httpClient.get(url);
      // const response = await httpClient.get("//localhost:5000/profile");
      // console.log(response);

      setData(response);
    } catch (error) {
      setError(error?.response);
      // console.log(error?.response);
    }
  };

  // console.log(error);

  return {
    fetchData,
    data,
    error,
    // showModal
  };
};

export default useRData;
