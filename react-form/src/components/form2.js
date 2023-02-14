import { useState } from "react";
import "../App.css";
import Data from "./displayData";

function Form2(props) {
  const initialValues = {
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  };
  const formValues1 = props.props;
  const setform2Submission = props.props2;
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
    if (Object.keys(formErrors).length === 0 ){
      setIsSubmit(true);
      setform2Submission(true);    }

  };


  const validate = (values) => {
    const errors = {};
    if (!values.address1) {
      errors.address1 = "address line 1 is required!";
    }
    if (!values.address2) {
      errors.address2 = "address Line 2  is required!";
    }
    if (!values.city) {
      errors.city = "city is required!";
    }
    if (!values.state) {
      errors.state = "state is required!";
    }
    if (!values.country) {
      errors.country = "country is required!";
    }
    if (!values.pincode) {
      errors.pincode = "pincode is required!";
    }
    return errors;
  };

  return (
    <div className="Container">
      {isSubmit ? null:
      <form onSubmit={handleSubmit}>
        <div className="formDiv">
          <div className="twolableDiv">
            <div className="lableDiv">
              <input
                type="text"
                name="address1"
                placeholder="address line 1"
                value={formValues.address1}
                onChange={handleChange}
              />
            </div>
            <div className="lableDiv">
              <input
                type="text"
                name="address2"
                placeholder="address line 2"
                value={formValues.address2}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="twoErrorDiv">
            <p>{formErrors.address1}</p>
            <p>{formErrors.address2}</p>
          </div>
          <div className="twolableDiv">
            <div className="lableDiv">
            <select id="city" name="city" value={formValues.city}  onChange={handleChange}>
                <option>select city</option>
                <option value="Guwahati">Guwahati</option>
                <option value="Dibrugarh">Dibrugarh</option>
                <option value="Panaji">Panaji</option>
                <option value="Mapusa">Mapusa</option>
                <option value="Ahemdabad">Ahemdabad</option>
                <option value="Surat">Surat</option>
                <option value="Rajkot Pradesh">Rajkot Pradesh</option>
                <option value="Jamnagar">Jamnagar</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Bhavnagar">Bhavnagar</option>
                <option value="Kullu">Kullu</option>v
                <option value="Manali">Manali</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Kanpur">Kanpur</option>
                <option value="Noida">Noida</option>
                <option value="Allahabad">Allahabad</option>
                <option value="Uttarkashi">Uttarkashi</option>
                <option value="Dehradun">Dehradun</option>
                <option value="Rishikesh">Rishikesh</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Howrah">Howrah</option>
              </select>
            </div>
            <div className="lableDiv">
              <select id="state" name="state" value={formValues.state}  onChange={handleChange}>
                <option>select state</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>
          <div className="twoErrorDiv">
            <p>{formErrors.city}</p>
            <p>{formErrors.state}</p>
          </div>
          <div className="twolableDiv">
            <div className="lableDiv">
              <select id="country" name="country" value={formValues.country}  onChange={handleChange}>
                <option>select country</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Nepal">Nepal</option>
              </select>
            </div>
            <div className="lableDiv">
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formValues.pincode}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="twoErrorDiv">
            <p>{formErrors.country}</p>
            <p>{formErrors.pincode}</p>
          </div>
          <div className="divButton">
            <button type="submit">Next</button>
          </div>
        </div>
      </form> }
      <div>
        {isSubmit ? <Data props1={formValues}  props2={formValues1} /> : null}
        </div>
    </div>
  );
}

export default Form2;
