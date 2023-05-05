import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getAllUserData, loginFunction } from "../Redux/Auth/Auth.Action";

const inti = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [data, setData] = useState(inti);
  const [showPassword, setShowPassword] = useState(false);
  const { AllUserData } = useSelector((store) => store.auth);
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data, "login data");
    const { email, password } = data;
    let valid = AllUserData.find(
      (e) => e.email === email && e.password === password
    );
    let validEmail = AllUserData.find((e) => e.email === email);
    let validPassword = AllUserData.find(
      (e) => e.email === email && e.password !== password
    );
    if (valid) {
      dispatch(loginFunction(data, navigate));
    } else if (!validEmail) {
      return setCheckEmail(false);
    } else if (validPassword) {
      setCheckEmail(true);
      return setCheckPassword(false);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    dispatch(getAllUserData());
  }, []);
  return (
    <div className="backgroundImage">
      <div>&nbsp;</div>
      <Container fluid="md" style={{ width: "30%" }} className="mt-4 text-left">
        <Card className="p-4">
          <h3> Login Form</h3>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3 mt-4"
            >
              <Form.Control
                onChange={handleChange}
                required
                name="email"
                type="email"
                className={checkEmail ? "" : "border border-danger"}
                placeholder="name@example.com"
              />
              <Form.Text className={checkEmail ? "text-muted" : "text-danger"}>
                {checkEmail
                  ? "We'll never share your email with anyone else."
                  : "Please Register First"}
              </Form.Text>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                onChange={handleChange}
                required
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className={checkPassword ? "" : "border border-danger"}
              />
              <Form.Text
                className={checkPassword ? "text-muted" : "text-danger"}
              >
                {checkPassword ? "" : "Please Check Your Password"}
              </Form.Text>
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
            Don't Have Account ? <NavLink to="/signup" className="text-primary"> Signup </NavLink>
          </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default LoginPage;
