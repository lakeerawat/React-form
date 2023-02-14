import { useState } from "react";
import "../App.css";
import Form2 from "./form2";

function Form1() {
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    email: "",
    bithday: "",
    age: "",
    bloodGroup: "",
    height: "",
    weight: "",
    gender: "",
    maritalStatus: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [form2Submission, setform2Submission] = useState(false);
  const [form1Submission, setForm1Submission] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
      setForm1Submission(true);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "first name is !";
    }
    if (!values.middleName) {
      errors.middleName = "middle name is !";
    }
    if (!values.lastName) {
      errors.lastName = "last name is !";
    }
    if (!values.mobile) {
      errors.mobile = "mobile no. is !";
    }
    if (!values.bithday) {
      errors.bithday = "birthday is !";
    }
    if (!values.age) {
      errors.age = "age is !";
    }
    if (!values.bloodGroup) {
      errors.bloodGroup = "bloodgroup is !";
    }
    if (!values.height) {
      errors.height = "height is !";
    }
    if (!values.weight) {
      errors.weight = "weight is !";
    }
    if (!values.gender) {
      errors.gender = "gender is !";
    }
    if (!values.maritalStatus) {
      errors.maritalStatus = "marital status is !";
    }
    if (!values.email) {
      errors.email = "Email is !";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  return (
    <div className="Container">
      <div className="header">
        <div className="div1">
          <span className={`${form1Submission ? "spanNum2" : "spanNum"}`}>
            1
          </span>
          <div className="hline"></div>
          <span className={`${form2Submission ? "spanNum2" : "spanNum"}`}>
            2
          </span>
          <div className="hline"></div>
          <span className={`${form2Submission ? "spanNum2" : "spanNum"}`}>
            3
          </span>
        </div>
        <div className="div2">
          <span>USER INFORMATION</span>
          <span>ADDRESS DETAILS</span>
          <span>THANK YOU</span>
        </div>
      </div>
      {form1Submission ? null : (
        <form onSubmit={handleSubmit}>
          <div className="formDiv">
            <div className="twolableDiv">
              <div className="lableDiv">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formValues.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="lableDiv">
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name"
                  value={formValues.middleName}
                  onChange={handleChange}
                />
              </div>
            </div>
            {formErrors.firstName === "" &&
            formErrors.middleName === "" ? null : (
              <div className="twoErrorDiv">
                <p>{formErrors.firstName}</p>
                <p>{formErrors.middleName}</p>
              </div>
            )}
            <div className="twolableDiv">
              <div className="lableDiv">
                <input
                  type="test"
                  name="lastName"
                  placeholder="Last Name"
                  value={formValues.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="lableDiv">
                <input
                  type="phone"
                  name="mobile"
                  placeholder="Mobile"
                  value={formValues.mobile}
                  onChange={handleChange}
                />
              </div>
            </div>
            {formErrors.lastName === "" && formErrors.mobile === "" ? null : (
              <div className="twoErrorDiv">
                <p>{formErrors.lastName}</p>
                <p>{formErrors.mobile}</p>
              </div>
            )}
            <div className="twolableDiv">
              <div className="lableDiv">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div className="lableDiv">
                <input
                  type="date"
                  name="bithday"
                  placeholder="Birthday"
                  value={formValues.bithday}
                  onChange={handleChange}
                />
              </div>
            </div>
            {formErrors.email === "" && formErrors.bithday === "" ? null : (
              <div className="twoErrorDiv">
                <p>{formErrors.email}</p>
                <p>{formErrors.bithday}</p>
              </div>
            )}
            <div className="twolableDiv">
              <div className="lableDiv">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formValues.age}
                  onChange={handleChange}
                />
              </div>
              <div className="lableDiv">
                <input
                  type="text"
                  name="bloodGroup"
                  placeholder="Blood Group"
                  value={formValues.bloodGroup}
                  onChange={handleChange}
                />
              </div>
            </div>
            {formErrors.age === "" && formErrors.bloodGroup === "" ? null : (
              <div className="twoErrorDiv">
                <p>{formErrors.age}</p>
                <p>{formErrors.bloodGroup}</p>
              </div>
            )}
            <div className="twolableDiv">
              <div className="lableDiv">
                <input
                  type="text"
                  name="height"
                  placeholder="Height"
                  value={formValues.height}
                  onChange={handleChange}
                />
              </div>
              <div className="lableDiv">
                <input
                  type="text"
                  name="weight"
                  placeholder="Weight"
                  value={formValues.weight}
                  onChange={handleChange}
                />
              </div>
            </div>
            {formErrors.height === "" && formErrors.weight === "" ? null : (
              <div className="twoErrorDiv">
                <p>{formErrors.height}</p>
                <p>{formErrors.weight}</p>
              </div>
            )}
            {/* Gender and Marital Satus Starts */}
            <div className="twolableDiv">
              <div className="genderDiv">
                <div className="genderTag">Gender</div>
                <div className="genderOption">
                  <label>
                    <input
                      type="radio"
                      value="Male"
                      name="gender"
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Female"
                      name="gender"
                      onChange={handleChange}
                    />
                    Female
                  </label>
                </div>
                {formErrors.gender === "" ? null : <p>{formErrors.gender}</p>}
              </div>
              <div className="genderDiv">
                <div className="genderTag">Marital Status</div>
                <div className="genderOption">
                  <label>
                    <input
                      type="radio"
                      value="Single"
                      name="maritalStatus"
                      onChange={handleChange}
                    />
                    Single
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Married"
                      name="maritalStatus"
                      onChange={handleChange}
                    />
                    Married
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Divorced"
                      name="maritalStatus"
                      onChange={handleChange}
                    />
                    Divorced
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Widowed"
                      name="maritalStatus"
                      onChange={handleChange}
                    />
                    Widowed
                  </label>
                </div>
                {formErrors.maritalStatus === "" ? null : (
                  <p>{formErrors.maritalStatus}</p>
                )}
              </div>
            </div>
            {/* Gender and Marital Satus Starts */}
            <div className="divButton">
              <button type="submit">Next</button>
            </div>
          </div>
        </form>
      )}
      {form1Submission ? (
        <Form2 props={formValues} props2={setform2Submission} />
      ) : null}
    </div>
  );
}

export default Form1;
