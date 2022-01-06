import React from "react";
import "../../App.css";
import {useLocation} from 'react-router-dom';

function Success(props) {
const {state} = useLocation();
const {acctFrom, acctTo, amt} = state;

  return (
    <div className="container">
    <form>
    <div className="ui message success">Notification sent to both account holders, Debited from account number {acctFrom} and credited to account number {acctTo}.
           Amount transferred is {amt}</div>
       <div className="ui form">
          <h2>Transaction success!</h2>
        </div>
      </form>
    </div>
  );
}

export default Success;
