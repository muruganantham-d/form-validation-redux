import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import "./NestedForm.css";
import {
  setName,
  setEmail,
  setAddress,
  setdistrict,
  setCountry,
  setPincode,
  // ////
  setPhone,
  setTenthPercentage,
  setTwelfthPercentage,
  setDiplomaPercentage,
  setUgCGPA,
  setCompany,
  setRelevantExperience,
} from "../Redux/features/formSlice";
import Accordion from "react-bootstrap/Accordion";
const Citys = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thiruvallur",
  "Thiruvarur",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvannamalai",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];
const NestedForm = () => {
  const [formData, setFormData] = useState({});
  const [completed12th, setCompleted12th] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  // section-2 data
  const [name1, setName1] = useState();
  const [email1, setEmail1] = useState();
  const [address1, setAddress1] = useState();
  const [district1, setdistrict1] = useState();
  const [country1, setCountry1] = useState();
  const [pincode1, setPincode1] = useState();

  const [phone1, setPhone1] = useState();
  const [tenthPercentage1, setTenthPercentage1] = useState();
  const [twelfthPercentage1, setTwelfthPercentage1] = useState();
  const [diplomaPercentage1, setDiplomaPercentage1] = useState();
  const [ugCGPA1, setUgCGPA1] = useState();
  const [company1, setCompany1] = useState();
  const [relevantExperience1, setRelevantExperience1] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    ///////////section-1 data

    const errors = {};
    let isValid = true;
    const namePattern = /^[a-zA-Z\s'-]{2,50}$/;
    if (!formData.name) {
      errors.name = "Please enter your name";
      isValid = false;
    } else if (!namePattern.test(formData.name)) {
      errors.name = "Please enter a valid name (2-50 letters)";
      isValid = false;
    }
    // Email
    const emailPattern =
      /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }
    // Address
    if (!formData.address) {
      errors.address = "Please enter your address";
      isValid = false;
    }

    // Country Address=2
    if (!formData.country) {
      errors.country = "Please enter your Address";
      isValid = false;
    }
    // distric city
    if (!formData.district) {
      errors.district = "Please enter your City";
      isValid = false;
    }
    //Pincode
    if (!formData.pincode) {
      errors.pincode = "Please enter your Pincode";
      isValid = false;
    }

    // Phone
    const phonePattern = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    if (!formData.phone) {
      errors.phone = "Please enter your phone number";
      isValid = false;
    } else if (!phonePattern.test(formData.phone)) {
      errors.phone = "Enter 10-digit number.";
      isValid = false;
    }
    // 10th Percentage
    const percentagePattern = /^(100(\.0{1,2})?|\d{1,2}(\.\d{1,2})?)$/;
    if (!formData.tenthPercentage) {
      errors.tenthPercentage = "Please enter your 10th percentage";
      isValid = false;
    } else if (!percentagePattern.test(formData.tenthPercentage)) {
      errors.tenthPercentage = "Invalid percentage value";
      isValid = false;
    }

    // 12th Percentage
    const percentagePattern12 = /^(100(\.0{1,2})?|\d{1,2}(\.\d{1,2})?)$/;
    if (completed12th && !formData.twelfthPercentage) {
      errors.twelfthPercentage = "12th percentage is required";
      isValid = false;
    } else if (
      completed12th &&
      !percentagePattern12.test(formData.twelfthPercentage)
    ) {
      errors.twelfthPercentage = "Invalid percentage value";
      isValid = false;
    }

    // Diploma Percentage
    if (!completed12th && !formData.diplomaPercentage) {
      errors.diplomaPercentage = "Diploma percentage is required";
      isValid = false;
    } else if (
      !completed12th &&
      !percentagePattern12.test(formData.diplomaPercentage)
    ) {
      errors.diplomaPercentage = "Invalid percentage value";
      isValid = false;
    }
    // UG CGPA
    const cgpaPattern = /^([1-9]|10)(\.\d{1,2})?$/;
    if (!formData.ugCGPA) {
      errors.ugCGPA = "Please enter your UG CGPA";
      isValid = false;
    } else if (!cgpaPattern.test(formData.ugCGPA)) {
      errors.ugCGPA = "Invalid UG CGPA value";
      isValid = false;
    }
    // Company name
    const companyPattern = /^[a-zA-Z\s-]+$/;
    if (!formData.company) {
      errors.company = "Please enter your company";
      isValid = false;
    } else if (!companyPattern.test(formData.company)) {
      errors.company = "Invalid company name";
      isValid = false;
    }
    // Relevant experience
    const relevantExperiencePattern = /^\d+(\.\d{1,2})?$/;
    if (!formData.relevantExperience) {
      errors.relevantExperience = "Please enter your relevant experience";
      isValid = false;
    } else if (!relevantExperiencePattern.test(formData.relevantExperience)) {
      errors.relevantExperience = "Invalid relevant experience";
      isValid = false;
    }

    setFormErrors(errors);

    // section-2 data
    if (isValid) {
      setName1(name);
      setEmail1(email);
      setAddress1(address);
      setdistrict1(district);
      setCountry1(country);
      setPincode1(pincode);

      setPhone1(phone);
      setTenthPercentage1(tenthPercentage);
      setTwelfthPercentage1(twelfthPercentage);
      setDiplomaPercentage1(diplomaPercentage);
      setUgCGPA1(ugCGPA);
      setCompany1(company);
      setRelevantExperience1(relevantExperience);
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    //Dispatch form data here
    dispatch(setName(formData.name));
    dispatch(setEmail(formData.email));
    dispatch(setAddress(formData.address));
    dispatch(setdistrict(formData.district));
    dispatch(setCountry(formData.country));
    dispatch(setPincode(formData.pincode));

    dispatch(setPhone(formData.phone));
    dispatch(setTenthPercentage(formData.tenthPercentage));

    dispatch(setUgCGPA(formData.ugCGPA));
    dispatch(setCompany(formData.company));
    dispatch(setRelevantExperience(formData.relevantExperience));
    if (completed12th) {
      dispatch(setTwelfthPercentage(formData.twelfthPercentage));
    } else {
      dispatch(setDiplomaPercentage(formData.diplomaPercentage));
    }
  };

  const {
    name = "",
    email = "",
    address = "",
    district = "",
    country = "",
    pincode = "",
    // ///
    phone = "",
    tenthPercentage = "",
    twelfthPercentage = "",
    diplomaPercentage = "",
    ugCGPA = "",
    company = "",
    relevantExperience = "",
  } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({});
    setCompleted12th(true);
    setFormErrors({});
  };

  ///////////////////////////////Return//////////////////////////////
  return (
    <div>
      <Container className="full">
        <h1 className="hhh1">Form Validation</h1>
        <hr />
        <div className="sections">
          <section>
            <Form onSubmit={handleSubmit} onReset={handleReset}>
              {/* name */}
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  isInvalid={!!formErrors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
              {/* Email */}
              <Form.Group controlId="formName">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  isInvalid={!!formErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>
              {/* Phone Number */}
              <Form.Group controlId="formPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter phone number"
                  name="phone"
                  value={phone}
                  pattern="[0-9]{10}"
                  onChange={handleInputChange}
                  isInvalid={!!formErrors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  +{formErrors.phone}
                </Form.Control.Feedback>
              </Form.Group>
              {/* ////////////////////// Accordian--1 //////////////////////// */}
              <Accordion className="mt-4">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Address Details<spann style={{ color: "red" }}>*</spann>
                  </Accordion.Header>
                  <Accordion.Body>
                    {/* Address */}
                    <Form.Group controlId="formAddress">
                      <Form.Label> Address Line 1</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter address"
                        name="address"
                        value={address}
                        onChange={handleInputChange}
                        isInvalid={!!formErrors.address}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.address}
                      </Form.Control.Feedback>
                    </Form.Group>
                    {/* country*/}
                    <Form.Group controlId="formCounty">
                      <Form.Label>Address Line 2</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Address"
                        name="country"
                        value={country}
                        onChange={handleInputChange}
                        isInvalid={!!formErrors.country}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.country}
                      </Form.Control.Feedback>
                    </Form.Group>
                    {/* District = city*/}
                    <Form.Group controlId="formdistrict">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        as="select"
                        className="form-select"
                        name="district"
                        value={district}
                        onChange={handleInputChange}
                        isInvalid={!!formErrors.district}
                      >
                        <option value="">--Select City--</option>
                        {Citys.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        {formErrors.district}
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* pincode*/}
                    <Form.Group controlId="formPincode">
                      <Form.Label>Pin-Code</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Pin-Code"
                        name="pincode"
                        value={pincode}
                        onChange={handleInputChange}
                        isInvalid={!!formErrors.pincode}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.pincode}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mt-4">
                  <Accordion.Header>
                    Education Details<spann style={{ color: "red" }}>*</spann>
                  </Accordion.Header>
                  <Accordion.Body>
                    {/* 10 th mark percent */}
                    <Form.Group controlId="formTenthPercentage">
                      <Form.Label>10th Percentage</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.01"
                        placeholder="Enter percentage"
                        name="tenthPercentage"
                        value={tenthPercentage}
                        onChange={handleInputChange}
                        isInvalid={!!formErrors.tenthPercentage}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.tenthPercentage}
                      </Form.Control.Feedback>
                    </Form.Group>
                    {/* 12-th Diplamo */}
                    <Form.Group controlId="formCompleted12th">
                      <Form.Label>Completed 12th or Diploma?</Form.Label>
                      <Form.Check
                        inline
                        label="12th"
                        type="radio"
                        id="12th"
                        checked={completed12th}
                        onChange={() => setCompleted12th(true)}
                      />
                      <Form.Check
                        inline
                        label="Diploma"
                        type="radio"
                        id="diploma"
                        checked={!completed12th}
                        onChange={() => setCompleted12th(false)}
                      />
                    </Form.Group>
                    {completed12th ? (
                      <Form.Group controlId="formTwelfthPercentage">
                        <Form.Label>12th Percentage</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.01"
                          placeholder="Enter percentage"
                          name="twelfthPercentage"
                          value={twelfthPercentage}
                          onChange={handleInputChange}
                          isInvalid={!!formErrors.twelfthPercentage}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.twelfthPercentage}
                        </Form.Control.Feedback>
                      </Form.Group>
                    ) : (
                      <Form.Group controlId="formDiplomaPercentage">
                        <Form.Label>Diploma Percentage</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.01"
                          placeholder="Enter percentage"
                          name="diplomaPercentage"
                          value={diplomaPercentage}
                          onChange={handleInputChange}
                          isInvalid={!!formErrors.diplomaPercentage}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formErrors.diplomaPercentage}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )}
                    {/* ugCGPA */}
                    <Form.Group controlId="formUgCGPA">
                      <Form.Label>UG CGPA</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.01"
                        placeholder="Enter CGPA"
                        name="ugCGPA"
                        value={ugCGPA}
                        onChange={handleInputChange}
                        isInvalid={!!formErrors.ugCGPA}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.ugCGPA}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mt-4">
                  <Accordion.Header>
                    Experience Details<spann style={{ color: "red" }}>*</spann>
                  </Accordion.Header>
                  <Accordion.Body>
                    {/* company */}
                    <Form.Group controlId="formCompany">
                      <Form.Label>Company</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter company"
                        name="company"
                        value={company}
                        onChange={handleInputChange}
                        isInvalid={!!formErrors.company}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.company}
                      </Form.Control.Feedback>
                    </Form.Group>
                    {/* expreince */}
                    <Form.Group controlId="formRelevantExperience">
                      <Form.Label>Relevant Experience (in years)</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter experience"
                        name="relevantExperience"
                        value={relevantExperience}
                        onChange={handleInputChange}
                        isInvalid={!!formErrors.relevantExperience}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.relevantExperience}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* Button */}
              <Button variant="success" type="submit" className="mt-3 px-3">
                Submit
              </Button>{" "}
              <Button variant="warning" type="reset" className="mt-3 px-3">
                Reset
              </Button>
            </Form>
          </section>

          {/* ///////////////////////////section -2//////////////////////////////// */}
          <section className="section2">
            <div className="mt-4">
              <Row>
                <Col>
                  <Card className="card-text">
                    <Card.Title className="text-center">
                      Form Details
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      ABCD
                    </Card.Subtitle>
                    <Card.Text>
                      Name: <strong>{name1}</strong>
                    </Card.Text>
                    <Card.Text>
                      Email: <strong>{email1}</strong>
                    </Card.Text>

                    <Card.Text>
                      Address Line 1: <italic>{address1}</italic>
                    </Card.Text>
                    <Card.Text>
                      Address Line 2: <italic>{country1}</italic>
                    </Card.Text>
                    <Card.Text>
                      City: <italic>{district1}</italic>
                    </Card.Text>

                    <Card.Text>
                      Pin-Code: <italic>{pincode1}</italic>
                    </Card.Text>

                    <Card.Text>
                      Phone: <strong>{phone1}</strong>
                    </Card.Text>
                    <Card.Text>
                      10th Percentage: <strong>{tenthPercentage1}</strong>
                    </Card.Text>
                    {completed12th ? (
                      <Card.Text>
                        12th Percentage: <strong>{twelfthPercentage1}</strong>
                      </Card.Text>
                    ) : (
                      <Card.Text>
                        Diploma Percentage:{" "}
                        <strong>{diplomaPercentage1}</strong>
                      </Card.Text>
                    )}
                    <Card.Text>
                      UG CGPA: <strong>{ugCGPA1}</strong>
                    </Card.Text>
                    <Card.Text>
                      Company: <strong>{company1}</strong>
                    </Card.Text>
                    <Card.Text>
                      Relevant Experience:{" "}
                      <strong>{relevantExperience1}</strong>
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default NestedForm;
