import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import banner from "../assets/images/banner.png";

const Login = () => {
  return (
    <section className="login-section">
      <div className="login-wrapper">

        {/* LEFT */}
        <div className="login-left">

          <span className="login-badge">Otake Login</span>

          <h2 className="login-title">Otake Login</h2>

          <button className="social-btn google">
            <FcGoogle />
            Continue with Google
          </button>

          <button className="social-btn twitter">
            <FaXTwitter />
            Continue with Twitter
          </button>

          <div className="or">or</div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="business@mail.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="min 8 character" />
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>
            <span className="forgot">Forgot password?</span>
          </div>

          <button className="login-btn">Login</button>

          <p className="register">
            Don’t have an account? <span>Register</span>
          </p>

        </div>

        {/* RIGHT */}
        {/* RIGHT */}
<div className="login-right">

  {/* Floating Card 1 */}
  <div className="floating-card happy">
    <h4>+416</h4>
    <p>Happy Customer</p>
  </div>

  {/* Floating Card 2 */}
  <div className="floating-card designers">
    <h5>All Designers</h5>
    <span>Meeting Up</span>

    <div className="progress">
      <div className="progress-bar"></div>
    </div>

    <div className="stats">
      <span>62%</span>
      <span>2M</span>
    </div>
  </div>

  {/* Main Image */}
  <img
  src={banner}
  alt="3d character"
  className="login-illustration"
/>


</div>


      </div>
    </section>
  );
};

export default Login;
