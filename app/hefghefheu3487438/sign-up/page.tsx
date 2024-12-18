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
          <div className="account-wrapper bg--section">
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
    </main>
  );
};

export default SignUpPage;
