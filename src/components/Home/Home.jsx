import { useState } from "react";
import "../../App.css";
import { useNavigate  } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const initialValues = { accountFrom: "64233398", accountTo: "", amount: "", avlBalance: "900000" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.accountTo) {
      errors.accountTo = "Account To ID is required";
    } else if (values.accountTo.length < 6 || values.accountTo.length > 8) {
      errors.accountTo = "Account To ID should be between 6 to 8 digits";
    }
    if (!values.amount) {
      errors.amount = "Amount is required";
    } else if (parseInt(values.amount) < 1) {
      errors.amount = "Amount must be more than 0";
    } else if (parseInt(values.avlBalance) < parseInt(values.amount)){
        errors.amount = "Amount cannot exceed the available balance";
    }
    return errors;
  };

  return (
    <div className="container">
    {Object.keys(formErrors).length === 0 && isSubmit ? (
       navigate("/confirmation", {state:formValues})
     ) : null}
      <form onSubmit={handleSubmit}>
        <h1>Money Transfer</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Account From ID:</label>
            <input
              type="number"
              name="accountFrom"
              placeholder="Account From"
              value={formValues.accountFrom}
              onChange={handleChange}
              disabled={true}
            />
            <p className="acctFromInfo">Available balance: 900000</p>
          </div>
          <p>{formErrors.accountFrom}</p>
          <div className="field">
            <label>Account To ID:</label>
            <input
              type="number"
              name="accountTo"
              placeholder="Account To"
              value={formValues.accountTo}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.accountTo}</p>
          <div className="field">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="amount"
              value={formValues.amount}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.amount}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Home;
