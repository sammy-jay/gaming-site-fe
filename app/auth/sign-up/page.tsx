import React from "react";
import Link from "next/link";
import SignupForm from "@/components/auth/SignupForm";

const SignUpPage = () => {
  return (
    <main>
      <Link href="#" className="scrollToTop">
        <i className="las la-angle-up"></i>
      </Link>

      <div className="account-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="account-wrapper bg--section mw-100">
                <div className="account-logo">
                  <Link href="/">
                    <img src="/images/logo.png" />
                  </Link>
                </div>
                <h4 className="text-center p-2">Sign Up</h4>
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade custom--modal"
        id="existModalCenter"
        role="dialog"
        aria-labelledby="existModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="existModalLongTitle">
                You are with us
              </h5>
              <span
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times"></i>
              </span>
            </div>
            <div className="modal-body">
              <h6 className="text-center">
                You already have an account please Login
              </h6>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn--dark btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <Link href="/auth/sign-in" className="btn btn--base btn-sm">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
