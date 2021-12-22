import React, { useState } from "react";
import { Button, Card, TextField } from "@material-ui/core";
import axios from "axios";
import Loder from "../Loder/Loder";

//import css
import "./AdminLogin.css";

const AdminLogin = (props) => {
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");

  const [isloading, setisloading] = useState(false);

  // const LoginUser = () => {
  //   setisloading(true);
  //   let url = "https://afternoon-bayou-76409.herokuapp.com/loginAdmin";
  //   setisloading(true);

  //   let temp = {
  //     email,
  //     password,
  //   };
  //   axios
  //     .post(url, temp)
  //     .then(
  //       (res) => {
  //         console.log("data response:::", res);
  //         setisloading(false);
  //         props.history.push("/home");
  //         setisloading(false);
  //       },

  //       (error) => {
  //         setisloading(false);
  //         console.log("data response error:::", error);
  //         setisloading(false);
  //       }
  //     )
  //     .catch((e) => {
  //       setisloading(false);
  //       console.log("data response error:::", e);
  //       setisloading(false);
  //     });
  // };

  return (
    <>
      <div className="admin_card">
        <h5 className="font_change ml-2 mb-4">
          <i class="fa fa-lock"></i> Please enter your login details.
        </h5>
        <Card className="card_shadow">
          <TextField
            className="email_field m-3"
            label="User Id"
            type="text"
            autoComplete="off"
            // value={email}
            // onChange={(e) => {
            //   setemail(e.target.value);
            // }}
          />
          <br />
          <TextField
            className="email_field m-3"
            label="Password"
            type="password"
            autoComplete="on"
            // value={password}
            // onChange={(e) => {
            //   setpassword(e.target.value);
            // }}
          />
          <span
            className="forgot_pass ml-3"
            onClick={() => props.history.push("/emailverify")}
          >
            Forgotten Password
          </span>
          <br />
          <span className="text-center mt-2">
            <Button
              color="primary"
              className="login_btn text-centre ml-2 mt-2 mb-3 mt-3"
              // onClick={LoginUser}
              onClick={() => props.history.push("/home")}
            >
              <i class="fa fa-key pr-1"></i>Login
            </Button>
          </span>
        </Card>
      </div>

      <Loder loading={isloading} />
    </>
  );
};

export default AdminLogin;
