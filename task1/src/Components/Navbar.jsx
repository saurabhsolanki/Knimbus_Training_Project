import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import PrivateNavbar from "./NavBarTypes/PrivateNavbar";
import PublicNavbar from "./NavBarTypes/PublicNavbar";

function NavigationBar() {
  const token = useSelector((store) => store.auth.token);
  return (
    <div>
      {token ? (
        <>
          <PrivateNavbar />
        </>
      ) : (
        <>
          <PublicNavbar />
        </>
      )}
    </div>
  );
}

export default NavigationBar;
