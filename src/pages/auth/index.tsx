/* eslint-disable */
import Script from "next/script";


const AuthPage = () => {
  return (
  <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
  <link rel="stylesheet" href="/auth-assets/style.css" />
  <title>Modern Login Page | AsmrProg</title>
  <div className="container" id="container">
    <div className="form-container sign-up">
      <form>
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
          <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
          <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
          <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
        </div>
        <span>or use your email for registeration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
    <div className="form-container sign-in">
      <form>
        <h1>Sign In</h1>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
          <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
          <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
          <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
        </div>
        <span>or use your email password</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forget Your Password?</a>
        <button>Sign In</button>
      </form>
    </div>
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome Back!</h1>
          <p>Enter your personal details to use all of site features</p>
          <button className="hidden" id="login">Sign In</button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Hello, Friend!</h1>
          <p>Register with your personal details to use all of site features</p>
          <button className="hidden" id="register">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
  <Script src="/auth-assets/script.js"/>
</div>

  )
}

export default AuthPage;