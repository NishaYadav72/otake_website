import React from "react";
import "./Register.css";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <section className="register-section">

      {/* Floating Emojis */}
      <div className="floating-emoji left">🎁</div>
      <div className="floating-emoji right">🚀</div>

      <div className="register-box">

        <span className="register-badge">Otake Register</span>

        <h2 className="register-title">Welcome Otake!</h2>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="business@mail.com" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="min 8 character" />
        </div>

        <div className="register-options">
          <label className="remember">
            <input type="checkbox" />
            Remember me
          </label>
          <span className="forgot">Forgot password?</span>
        </div>

        <button className="register-btn">Login</button>

        <div className="or">or</div>

        <button className="google-btn">
          <FcGoogle />
          Continue with Google
        </button>

        <p className="bottom-text">
          Don’t have an account? <span>Login</span>
        </p>

      </div>
    </section>
  );
};

export default Register;
