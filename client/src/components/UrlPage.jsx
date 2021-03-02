import React, { useState } from "react";
import axios from "axios";
import { api } from "../config.json";

const Urlpage = () => {
  const [formState, setFormState] = useState({ longurl: "" });
  const [response, setResponse] = useState([]);

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    axios.post(api, { redirect: formState.longurl }).then((res) => {
      console.log(res);
      setResponse(res.data);
    });
  };

  return (
    <form>
      <label>
        Long URL
        <input
          className="text"
          name="longurl"
          value={formState.longurl}
          onChange={changeHandler}
        />
      </label>
      <br />
      <button type="button" className="btn" onClick={onClick}>
        Create!
      </button>
      {response ? <p>{Object.values(response).join("\n")}</p> : null}
    </form>
  );
};

export default Urlpage;
