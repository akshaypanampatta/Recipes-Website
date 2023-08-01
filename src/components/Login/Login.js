import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="login">
      <div>
        <img
          className="image"
          src="https://pinchofyum.com/wp-content/assets/images/cta/poy-ecookbook-2021.png"
        />
      </div>
      <div className="text">
        <p className="first-line">get it now</p>
        <p className="second-line">SPRINKLE OF FLAVOR COOKBOOK</p>
        <p className="third-line">
          The eBook includes our most popular 25 recipes in a beautiful, easy to
          download format. Enter your email and we'll send it right over!
        </p>
        <div className="login-section">
          <input placeholder='E-mail' type="text" />
          <input placeholder='Password' type="password" />
        </div>
        <button className='login-button'>Log in</button>
      </div>
    </div>
  );
}

export default Login