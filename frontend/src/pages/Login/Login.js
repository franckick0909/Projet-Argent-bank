import React from "react";
import "./Login.scss";
import Header from "../../Components/Header/Header";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import Form from "../../Components/Form/Form";

const Login = () => {
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FaUserCircle className="sign-in-icon" />
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
