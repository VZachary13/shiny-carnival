import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  const bootstrap = "nav-link text-dark";

  return (
    <Navbar
      links={[
        <Link key={1} className={bootstrap} to="/">
          About Me
        </Link>,
        <Link key={2} className={bootstrap} to="/resume">
          Resume
        </Link>,
        <Link key={3} className={bootstrap} to="/portfolio">
          Portfolio
        </Link>,
        <Link key={4} className={bootstrap} to="/contact">
          Contact
        </Link>,
      ]}
    />
  );
}
