import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Googleauth from "./Googleauth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Login = () => {
  const [phone, setPhone] = useState("");
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Login</h3>

                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <PhoneInput
                      className="number"
                      country={"cm"}
                      placeholder="+237 671 897 744"
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>

                  <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0 w-50">Login</button>
                      <Link
                        to="/signup"
                        className="button signup w-50 text-white text-center"
                      >
                        SignUp
                      </Link>
                    </div>

                    {/* google auth*/}
                    <Googleauth />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
