import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, redirect } from "react-router-dom";
import { SERVER_ENDPOINTS } from "../config";

export default function HandleRedirectContainer() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const { shortId } = useParams();

  useEffect(() => {
    async function getData() {
      return axios
        .get(`${SERVER_ENDPOINTS}/${shortId}`)
        .then((res) => setUrl(res.data.full))
        .catch((err) => setError(err.message));
    }
    console.log(error);
    getData();
  }, [shortId]);

  useEffect(() => {
    if (url) {
      window.location.replace(url);
      console.log(url);
    }
  }, [url]);
}
