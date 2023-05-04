import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { SERVER_ENDPOINTS } from "../config";

export default function HandleRedirectContainer() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      return axios
        .get(`${SERVER_ENDPOINTS}/api/url/${id}`)
        .then((res) => setUrl(res.data.full))
        .catch((err) => setError(err.message));
    }
    getData();
  }, [id]);
}
