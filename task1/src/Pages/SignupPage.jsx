import React, { useEffect, useState } from "react";
import { Button, Card, Container, Stack } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserData, signupPost } from "../Redux/Auth/Auth.Action";
import { NavLink, useNavigate } from "react-router-dom";

const inti = {
  name: "",
  email: "",
  password: "",
};
const SignupPage = () => {
  const [form, setForm] = useState(inti);
  const [showPassword, setShowPassword] = useState(false);
  const [checkEmail, setCheckEmail] = useState(true);
  const navigate = useNavigate();
  const { AllUserData } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = form;
    let valid = AllUserData.find((e) => e.email === email);
    if (valid) {
      return setCheckEmail(false);
      // return alert("Please use Different Email, This Email is already exist");
    } else dispatch(signupPost(form, navigate));
  };

  useEffect(() => {
    dispatch(getAllUserData());
  }, []);

  return (
    <div className="backgroundImage text-left">
      <div>&nbsp;</div>
      <Container className="mt-4 text-left">
        <div className="row">
          <div className="col-lg-4 col-md-8 m-auto">
          <Card className="p-4">
          <h3> SignUp Form</h3>
          <Form className="mt-3">
            <Stack gap={2}>
              <FloatingLabel controlId="floatingInput" label="Name">
                <Form.Control
                  required
                  type="text"
                  placeholder="Entre Name"
                  name="name"
                  onChange={handleChange}
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingInput" label="Email address">
                <Form.Control
                  name="email"
                  required
                  type="email"
                  placeholder="name@example.com"
                  className={checkEmail ? "" : "border border-danger"}
                  onChange={handleChange}
                />
                <Form.Text
                  className={checkEmail ? "text-muted" : "text-danger"}
                >
                  {checkEmail
                    ? ""
                    : "Please use Different Email, This Email is already exist"}
                </Form.Text>
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </FloatingLabel>
              <Form.Check
                type="checkbox"
                label="Show Password"
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              />
              <Button
                className="mt-4"
                variant="primary"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <div className="d-flex mt-2 justify-content-center gap-1">
                Already have an Account ?{" "}
                <NavLink to="/login" className="text-primary">
                  {" "}
                  Login{" "}
                </NavLink>
              </div>
            </Stack>
          </Form>
        </Card>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default SignupPage;
