import React from "react";
import "../../App.css";
import json from "./conf.json";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

function Confirmation(props) {
const navigate = useNavigate();
const {state} = useLocation();
const {accountFrom, accountTo, amount} = state;

const handleSubmit = (e) => {
    e.preventDefault();
    // let axiosConfig = {
    //   headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       "Access-Control-Allow-Origin": "*",
    //   }
    // };
    // const req = { accountFrom, accountTo, amount };
    //
    // axios.post(`/json`, req, axiosConfig)
    //  .then(res => console.log('success', res))
    //  .catch(err => console.log('Login: ', err));
      navigate("/success", {state:{acctFrom: accountFrom, acctTo: accountTo, amt: amount }})
      };

  return (
    <div className="container">,
      <form onSubmit={handleSubmit}>
       <div className="ui form">
          <h2>Confirmation page</h2>
            <div className="field">
              <label>Debit From ID </label>
              <h4>{accountFrom}</h4>
          </div>
          <div className="field">
            <label>Credit To ID</label>
            <h4>{accountTo}</h4>
          </div>
          <div className="field">
            <label>Amount to be deducted</label>
            <h4>{amount}</h4>
          </div>
        </div>
        <button className="fluid ui button blue">Confirm</button>
      </form>
    </div>
  );
}

export default Confirmation;
