import React from "react";
import Link from "next/link";

const SignInPage = () => {
  return (
    <main>
      <Link href="#" className="scrollToTop">
        <i className="las la-angle-up"></i>
      </Link>

      <div className="account-section pt-120 pb-120">
        <div className="container">
          <div className="account-wrapper bg--section">
            <div className="account-logo">
              <Link href="/">
                <img src="https://www.cryptoplustrader.com/assets/images/logoIcon/logo.png" />
              </Link>
            </div>
            <h4 className="text-center p-2">Sign In</h4>
            <form
              className="account-form verify-gcaptcha"
              method="POST"
              action="https://www.cryptoplustrader.com/auth/sign-in"
            >
              <input
                type="hidden"
                name="_token"
                value="4nZek9oER2Of1dsJXS3jX9K4M401hIHBj7IqWBFw"
              />
              <div className="cmn--form--group form-group">
                <label className="cmn--label text--white">Username</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="las la-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control cmn--form--control"
                    name="username"
                    required
                    value=""
                  />
                </div>
              </div>
              <div className="cmn--form--group form-group">
                <label className="cmn--label text--white">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="las la-key"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control cmn--form--control"
                    name="password"
                    required
                  />
                </div>
              </div>
              <div className="cmn--form--group form-group">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                  id="remember"
                />
                <label className="form-check-label" htmlFor="remember">
                  Remember Me
                </label>
              </div>
              <div className="cmn--form--group form-group">
                <button type="submit" className="cmn--btn btn-block">
                  Sign In
                </button>
              </div>
              <div className="cmn--form--group form-group">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className=" text--white d-flex align-items-center">
                    <Link href="/user/password/reset" className="text--base">
                      Forget Password?
                    </Link>
                  </div>
                  <div className="text--white">
                    Don&apos;t have an account?
                    <Link href="/auth/sign-up" className="text--base">
                      Signup
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
